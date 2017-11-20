package com.apptracker.repository;

import com.apptracker.entity.ContractInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Murthy on 7/16/2017.
 */
public interface ContractInfoRepository extends JpaRepository<ContractInfo,String> {
}
