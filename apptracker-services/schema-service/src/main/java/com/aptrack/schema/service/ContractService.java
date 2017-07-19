package com.aptrack.schema.service;

import com.aptrack.schema.model.CandidateInfo;
import com.aptrack.schema.model.ContractInfo;

import java.util.Collection;

/**
 * Created by Murthy on 7/18/2017.
 */
public interface ContractService {
    Collection<ContractInfo> findAll();

    ContractInfo findOne(Long aid);

    ContractInfo create(ContractInfo contract);

    ContractInfo update(ContractInfo contract);

}
