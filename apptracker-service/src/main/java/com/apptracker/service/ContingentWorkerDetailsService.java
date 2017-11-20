package com.apptracker.service;

import com.apptracker.entity.ContingentWorkerDetails;

import java.io.ByteArrayOutputStream;
import java.util.Collection;

/**
 * Created by Murthy on 9/25/2017.
 */
public interface ContingentWorkerDetailsService {

    Collection<ContingentWorkerDetails> findAll();

    ContingentWorkerDetails get(String aid);

    ContingentWorkerDetails create(ContingentWorkerDetails contract);

    ContingentWorkerDetails update(ContingentWorkerDetails contract);

    ByteArrayOutputStream download(String id);

}
