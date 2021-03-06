package com.apptracker.service;

import com.apptracker.entity.CandidateInfo;

import java.util.Collection;

/**
 * Created by Murthy on 7/16/2017.
 */
public interface CandidateService {
    Collection<CandidateInfo> findAll();

    CandidateInfo get(String aid);

    CandidateInfo create(CandidateInfo candidate);

    CandidateInfo update(CandidateInfo candidate);

}
