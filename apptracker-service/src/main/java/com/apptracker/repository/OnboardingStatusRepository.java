package com.apptracker.repository;

import com.apptracker.entity.OnboardingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Murthy on 7/22/2017.
 */
@Repository
public interface OnboardingStatusRepository extends JpaRepository<OnboardingStatus,String> {
}
