package com.aptrack.service;

import com.aptrack.entity.ContractInfo;
import com.aptrack.repository.ContractInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

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
    public ContractInfo findOne(Long aid) {
        return contractInfoRepository.findOne(aid);
    }

    @Override
    public ContractInfo create(ContractInfo contract) {
        return contractInfoRepository.save(contract);
    }

    @Override
    public ContractInfo update(ContractInfo contract) {
        return contractInfoRepository.save(contract);
    }
}
