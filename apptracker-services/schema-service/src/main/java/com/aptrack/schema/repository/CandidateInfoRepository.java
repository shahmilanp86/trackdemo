package com.aptrack.schema.repository;

import com.aptrack.schema.model.CandidateInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Murthy on 7/16/2017.
 */
public interface CandidateInfoRepository extends JpaRepository<CandidateInfo,Long> {
}
