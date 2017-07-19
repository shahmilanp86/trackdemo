package com.aptrack.schema.repository;

import com.aptrack.schema.model.CandidateInfo;
import com.aptrack.schema.model.ContractInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Murthy on 7/16/2017.
 */
public interface ContractInfoRepository extends JpaRepository<ContractInfo,Long> {
}
