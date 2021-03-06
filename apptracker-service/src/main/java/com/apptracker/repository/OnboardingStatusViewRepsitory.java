package com.apptracker.repository;

import com.apptracker.entity.CandidateInfo;
import com.apptracker.entity.OnboardingStatus;
import com.apptracker.entity.OnboardingSummaryView;
import com.apptracker.entity.OnboardingView;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Murthy on 7/23/2017.
 */
@Repository
public interface OnboardingStatusViewRepsitory extends CrudRepository<CandidateInfo, Long> {
    @Query("SELECT c FROM OnboardingView c left join c.onboardingStatus s WHERE s.aid = :id")
    List<OnboardingView> findStatus(@Param("id") Long id);

    @Query("SELECT c FROM OnboardingView c left join c.onboardingStatus s")
    List<OnboardingView> findStatusAll();

    @Query("SELECT o FROM OnboardingSummaryView o left join o.onboardingStatus s left join o.contractInfo c  where o" +
            ".aid =:id")
    OnboardingSummaryView findStatusSummary(@Param("id") String id);

    @Query("SELECT st FROM OnboardingStatus st where st.urlString = :urlStr")
    OnboardingStatus findByUrl(@Param("urlStr") String urlStr);


    // @Query("SELECT o FROM OnboardingView o left join o.onboardingStatus s ")
    // List<OnboardingView> findStatusViewAll();
}
