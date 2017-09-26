package com.aptrack.service;

import com.aptrack.entity.ContingentWorkerDetails;

import java.util.Collection;

/**
 * Created by Murthy on 9/25/2017.
 */
public interface ContingentWorkerDetailsService {

    Collection<ContingentWorkerDetails> findAll();

    ContingentWorkerDetails get(Long aid);

    ContingentWorkerDetails create(ContingentWorkerDetails contract);

    ContingentWorkerDetails update(ContingentWorkerDetails contract);
}
