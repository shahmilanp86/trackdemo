package com.aptrack.service;

import com.aptrack.common.Status;
import com.aptrack.common.StatusFlag;
import com.aptrack.entity.OnboardingStatus;
import com.aptrack.entity.StatusView;
import com.aptrack.repository.OnboardingStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import java.util.Optional;

import static com.aptrack.common.Status.*;
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
    public StatusView nextStatus(StatusView requested) {

        OnboardingStatus persisted = onboardingStatusRepository.findOne(requested.getAid());

       /* Optional.ofNullable(newStatus)
                .filter(st -> (st.getBgCheck()==null) && (st.getDemograph()==null))
                .map(onlyStatus -> onboardingStatus.setCurrentStatus(onlyStatus.getCurrentStatus()) )
*/

        Optional.ofNullable(persisted).orElseThrow(() -> new UnsupportedOperationException("The given entry not found" +
                " in backend."));


        checkInput(persisted.getCurrentStatus(), requested.getInputFlg());
        Integer baseCode = AWAITING_BG_AND_DEMOGRAPH.getCode();
        Status current = Status.valueFrom(persisted.getCurrentStatus());
        Integer nextCode = persisted.getCurrentStatus();
        if (requested.getInputFlg() == StatusFlag.BG) {
            nextCode = baseCode + (current.getCode() % baseCode) + 10;
            persisted.setBgCheck(nextCode);
            persisted.setBgCheckUpdTm(dateTimeTotring(LocalDateTime.now()));
        } else if (requested.getInputFlg() == StatusFlag.DEMO) {
            nextCode = baseCode + (current.getCode() % baseCode) + 1;
            persisted.setDemograph(nextCode);
            persisted.setDemographUpdTm(dateTimeTotring(LocalDateTime.now()));
        } else {
            nextCode = current.next().getCode();
        }

        try {
            Status next = Optional.of(Status.valueFrom(nextCode)).filter(st ->
                    st == COMPLETED_BG_AND_COMPLETED_DEMOGRAPH).map(nSt ->
                    SPOC_TO_CHECK_VENDOR_MGMT).orElse(Status.valueFrom(nextCode));

            persisted.setCurrentStatus(next.getCode());
            persisted.setLastUpdTm(dateTimeTotring(LocalDateTime.now()));

        } catch (NoSuchElementException e) {
            throw new UnsupportedOperationException
                    ("Invalid status : " + nextCode);
        }
        OnboardingStatus updatedStatus = onboardingStatusRepository.save(persisted);
        return StatusView.builder()
                .aid(updatedStatus.getAid())
                .bgCheck(updatedStatus.getBgCheck())
                .demograph(updatedStatus
                        .getDemograph())
                .currentStatus(updatedStatus.getCurrentStatus())
                .build();
    }

    private Status next(Status current, StatusFlag flg) {
        checkInput(current.getCode(), flg);
        Integer baseCode = AWAITING_BG_AND_DEMOGRAPH.getCode();

        Integer nextCode = current.getCode();
        if (flg == StatusFlag.BG) {
            nextCode = baseCode + (current.getCode() % baseCode) + 10;
        } else if (flg == StatusFlag.DEMO) {
            nextCode = baseCode + (current.getCode() % baseCode) + 1;
        } else {
            nextCode = current.next().getCode();
        }
        try {
            Status next = Status.valueFrom(nextCode);
            return Optional.of(next).filter(st -> st == COMPLETED_BG_AND_COMPLETED_DEMOGRAPH).map(nSt ->
                    SPOC_TO_CHECK_VENDOR_MGMT).orElse(next);
        } catch (NoSuchElementException e) {
            throw new UnsupportedOperationException
                    ("Invalid status : " + nextCode);
        }
    }

    private void checkInput(Integer code, StatusFlag flg) {
        if ((flg == StatusFlag.BG || flg == StatusFlag.DEMO) && (code / 100 != 2)) {
            throw new UnsupportedOperationException("Invalid status flag.");
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
