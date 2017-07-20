package com.aptrack.repository;

import com.aptrack.entity.CandidateInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Murthy on 7/16/2017.
 */
public interface CandidateInfoRepository extends JpaRepository<CandidateInfo,Long> {
}
