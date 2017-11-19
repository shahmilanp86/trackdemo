package com.aptrack.service;

import com.aptrack.entity.ContractInfo;
import com.aptrack.repository.ContractInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

import static com.aptrack.utils.ApptrackerUtils.getNullPropertyNames;
import static org.springframework.beans.BeanUtils.copyProperties;

/**
 * Created by Murthy on 7/18/2017.
 */
@Service
public class ContractServiceImpl implements ContractService {

    @Autowired
    private ContractInfoRepository contractInfoRepository;

    @Override
    public Collection<ContractInfo> findAll() {
        return contractInfoRepository.findAll();
    }

    @Override
    public ContractInfo get(String aid) {
        return contractInfoRepository.findOne(aid);
    }

    @Override
    public ContractInfo create(ContractInfo contract) {
        return contractInfoRepository.save(contract);
    }

    @Override
    public ContractInfo update(ContractInfo updated) {

        ContractInfo  existing = contractInfoRepository.findOne(updated.getAid());
        ContractInfo data = Optional.ofNullable(existing).map(ext -> {
            copyProperties(updated, existing, getNullPropertyNames(updated));
            return updated;
        })
                .orElse(updated);
     return contractInfoRepository.save(data);
    }
}
