package com.aptrack.service;

import com.aptrack.common.Status;
import com.aptrack.entity.OnboardingStatus;
import com.aptrack.entity.StatusView;
import com.aptrack.repository.OnboardingStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

import static com.aptrack.utils.ApptrackerUtils.dateTimeTotring;
import static com.aptrack.utils.ApptrackerUtils.generateRandomString;



/**
 * Created by Murthy on 7/22/2017.
 */
@Service
public class OnboardingStatusServiceImpl implements OnboardingStatusService {

    //TODO: Move these to properties.
    private static final Integer INITIL_STATUS = Status.AWAITING_CANDIDATE_INFO.getCode();
    private static final String INITIL_COMMENTS = "Candidate was notified.";
    private static final String INITIL_UPDATED_BY = "Admin";
    private static final Integer DEFAULT_BG_CHECK = 100;
    private static final Integer DEFAULT_DEMOGRAPH_CHECK = 200;
    @Autowired
    private OnboardingStatusRepository onboardingStatusRepository;

    @Override
    public OnboardingStatus get(Long aid) {
        return onboardingStatusRepository.findOne(aid);
    }

    @Override
    public OnboardingStatus update(OnboardingStatus status) {

        //TODO null values of DATETIME feilds in DB table tobe fixed.
        return onboardingStatusRepository.save(status);
    }

    @Override
    public OnboardingStatus update(Long aid) {
        return update(initialDetails(aid));
    }

    @Override
    public StatusView nextStatus(StatusView uiStatus) {

        OnboardingStatus persisted = onboardingStatusRepository.findOne(uiStatus.getAid());

       /* Optional.ofNullable(newStatus)
                .filter(st -> (st.getBgCheck()==null) && (st.getDemograph()==null))
                .map(onlyStatus -> onboardingStatus.setCurrentStatus(onlyStatus.getCurrentStatus()) )
*/

        Optional.ofNullable(persisted).orElseThrow(() -> new UnsupportedOperationException("The given entry not found" +
                " in backend."));
        if (uiStatus != null) {
            Status nextStatus = null;
            if ((uiStatus.getBgCheck() == null) && (uiStatus.getDemograph() == null)) {
                nextStatus = Status.valueFrom(persisted.getCurrentStatus()).next();
                //persisted.setCurrentStatus(newStatus.getCurrentStatus()); //TODO next status
            } else if (uiStatus.getDemograph() != null && uiStatus.getBgCheck() == null) {
                nextStatus = Status.AWAITING_BG_AND_COMPLETED_DEMOGRAPH;
                persisted.setDemograph(nextStatus.getCode());
                persisted.setDemographUpdTm(dateTimeTotring(LocalDateTime.now()));
            } else if (uiStatus.getDemograph() == null && uiStatus.getBgCheck() != null) {
                nextStatus = Status.COMPLETED_BG_AND_AWAITING_DEMOGRAPH;
                persisted.setBgCheck(nextStatus.getCode());
                persisted.setBgCheckUpdTm(dateTimeTotring(LocalDateTime.now()));
            } else if (uiStatus.getDemograph() != null && uiStatus.getBgCheck() != null) {
                nextStatus = Status.SPOC_TO_CHECK_VENDOR_MGMT;
                persisted.setBgCheck(1000);
                persisted.setBgCheckUpdTm(dateTimeTotring(LocalDateTime.now()));
                persisted.setDemograph(1000);
                persisted.setDemographUpdTm(dateTimeTotring(LocalDateTime.now()));
            }
            persisted.setCurrentStatus(nextStatus.getCode());
            persisted.setLastUpdTm(dateTimeTotring(LocalDateTime.now()));

            OnboardingStatus updatedStatus = onboardingStatusRepository.save(persisted);
            return StatusView.builder()
                    .aid(updatedStatus.getAid())
                    .bgCheck(updatedStatus.getBgCheck())
                    .demograph(updatedStatus
                    .getDemograph())
                    .currentStatus(updatedStatus.getCurrentStatus())
            .build();
        }else{
            throw new UnsupportedOperationException("Input Can't be null");
        }

    }


    private OnboardingStatus initialDetails(Long aid) {

        OnboardingStatus initialStatus = new OnboardingStatus();
        initialStatus.setAid(aid);
        initialStatus.setBgCheck(DEFAULT_BG_CHECK);
        initialStatus.setDemograph(DEFAULT_DEMOGRAPH_CHECK);
        initialStatus.setCurrentStatus(INITIL_STATUS);
        initialStatus.setComments(INITIL_COMMENTS);
        initialStatus.setLastUpdBy(INITIL_UPDATED_BY);
        initialStatus.setUrlString(generateRandomString());

        return initialStatus;
    }


}
