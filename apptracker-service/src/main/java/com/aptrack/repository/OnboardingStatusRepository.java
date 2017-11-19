package com.aptrack.repository;

import com.aptrack.entity.ContractInfo;
import com.aptrack.entity.OnboardingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Murthy on 7/22/2017.
 */
@Repository
public interface OnboardingStatusRepository extends JpaRepository<OnboardingStatus,String> {
}
