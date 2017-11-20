package com.apptracker.service;

import com.apptracker.entity.CandidateInfo;
import com.apptracker.entity.ContingentWorkerDetails;
import com.apptracker.entity.ContractInfo;
import com.apptracker.utils.ExcelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayOutputStream;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by Murthy on 9/25/2017.
 */
@Service
public class ContingentWorkerDetailsServiceImpl implements ContingentWorkerDetailsService {



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
    public ContingentWorkerDetails get(String aid) {

        return Optional.ofNullable(candidateService.get(aid))
                .map(candidateInfo -> new ContingentWorkerDetails(aid,candidateService.get(aid),contractService.get
                        (aid),101   )) //TODO: Session management
                .orElse(null);

    }

    @Override

    public ContingentWorkerDetails create(ContingentWorkerDetails contract) {
        return null;
    }

    @Override
    @Transactional
    public ContingentWorkerDetails update(ContingentWorkerDetails details) {

      return new ContingentWorkerDetails(details.getAid(),candidateService.update(details.getPersonalInfo()),
                contractService.update(details.getContractInfo()));

    }


    public ByteArrayOutputStream download(String id){

        return ExcelUtils.generateWithByteArray(get(id)) ;

    }

    private ContingentWorkerDetails buildContingentWorker(CandidateInfo candidate, Collection<ContractInfo> contracts) {


        ContractInfo contractInfo = contracts.stream()
                .filter(con -> con.getAid().equalsIgnoreCase(candidate.getAid()))
                .findFirst()
                .orElse(null);
        return new ContingentWorkerDetails(contractInfo.getAid(),candidate,contractInfo,100);

    }
}
