package com.apptracker.service;

import com.apptracker.entity.ContractInfo;

import java.util.Collection;

/**
 * Created by Murthy on 7/18/2017.
 */
public interface ContractService {
    Collection<ContractInfo> findAll();

    ContractInfo get(String aid);

    ContractInfo create(ContractInfo contract);

    ContractInfo update(ContractInfo contract);

}
