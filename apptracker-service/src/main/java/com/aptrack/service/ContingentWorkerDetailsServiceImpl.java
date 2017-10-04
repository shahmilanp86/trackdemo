package com.aptrack.service;

import com.aptrack.entity.CandidateInfo;
import com.aptrack.entity.ContingentWorkerDetails;
import com.aptrack.entity.ContractInfo;
import com.aptrack.repository.CandidateInfoRepository;
import com.aptrack.repository.ContractInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by Murthy on 9/25/2017.
 */
@Service
public class ContingentWorkerDetailsServiceImpl implements ContingentWorkerDetailsService {

   /* @Autowired
    private ContractInfoRepository contractInfoRepository;
    @Autowired
    private CandidateInfoRepository candidateInfoRepository;
*/

    @Autowired
    private  ContractService contractService;
    @Autowired
    private CandidateService candidateService;

    @Override
    public Collection<ContingentWorkerDetails> findAll() {

        Collection<CandidateInfo> candidates = candidateService.findAll();
        Collection<ContractInfo> cwdList = contractService.findAll();

        return candidates.stream()
                .map(candidate -> buildContingentWorker(candidate, cwdList))
                .collect(Collectors.toList());
    }

    @Override
    public ContingentWorkerDetails get(Long aid) {


       /* CandidateInfo candidate = candidateInfoRepository.findOne(aid);
        ContractInfo contractInfo = contractInfoRepository.findOne(aid);
*/

        return Optional.ofNullable(contractService.get(aid))
                .map(candidateInfo -> new ContingentWorkerDetails(aid,candidateService.get(aid),contractService.get(aid)))
                .orElse(null);

       /* return ContingentWorkerDetails.builder().aid(aid)
                .personalInfo(candidateInfoRepository.findOne(aid))
                .contractInfo(contractInfoRepository.findOne(aid))
                .build();
*/
    }

    @Override

    public ContingentWorkerDetails create(ContingentWorkerDetails contract) {
        return null;
    }

    @Override
    @Transactional
    public ContingentWorkerDetails update(ContingentWorkerDetails details) {

        /*candidateService.update(details.getPersonalInfo());
        contractService.create(details.getContractInfo());
*/

        return new ContingentWorkerDetails(details.getAid(),candidateService.update(details.getPersonalInfo()),
                contractService.update(details.getContractInfo()));

    }

    private ContingentWorkerDetails buildContingentWorker(CandidateInfo candidate, Collection<ContractInfo> contracts) {


        ContractInfo contractInfo = contracts.stream()
                .filter(con -> con.getAid() == candidate.getAid())
                .findFirst()
                .orElse(null);
        return new ContingentWorkerDetails(contractInfo.getAid(),candidate,contractInfo);

    }
}
