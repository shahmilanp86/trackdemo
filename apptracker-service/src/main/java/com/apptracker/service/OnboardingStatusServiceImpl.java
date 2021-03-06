package com.apptracker.service;

import com.apptracker.common.Status;
import com.apptracker.common.StatusFlag;
import com.apptracker.entity.OnboardingStatus;
import com.apptracker.entity.StatusView;
import com.apptracker.repository.OnboardingStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import java.util.Optional;

import static com.apptracker.common.Status.*;
import static com.apptracker.utils.ApptrackerUtils.dateTimeTotring;
import static com.apptracker.utils.ApptrackerUtils.generateRandomString;
import static com.apptracker.utils.ApptrackerUtils.getNullPropertyNames;
import static org.springframework.beans.BeanUtils.copyProperties;


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
    public OnboardingStatus get(String aid) {
        return onboardingStatusRepository.findOne(aid);
    }



    @Override
    public OnboardingStatus add(String aid) {
       return onboardingStatusRepository.save(initialDetails(aid));
    }


    @Override
    public OnboardingStatus update(OnboardingStatus updated) {

        OnboardingStatus existing = this.get(updated.getAid());

        updateTimestamp(existing, updated);
        copyProperties(updated, existing, getNullPropertyNames
                (updated));
        return onboardingStatusRepository.save(existing);
    }

    @Override
    public OnboardingStatus update(String aid) {
        return update(initialDetails(aid));
    }

    @Override
    public StatusView nextStatus(StatusView requested) {

        OnboardingStatus persisted = onboardingStatusRepository.findOne(requested.getAid());
        Optional.ofNullable(persisted).orElseThrow(() -> new UnsupportedOperationException("The given entry not found" +
                " in backend."));

        //TODO
        //checkInput(persisted.getCurrentStatus(), requested.getInputFlg());
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
            /*Status next = Optional.of(Status.valueFrom(nextCode)).filter(st ->
                    st == COMPLETED_BG_AND_COMPLETED_DEMOGRAPH).map(nSt ->
                    SPOC_TO_CHECK_VENDOR_MGMT).orElse(Status.valueFrom(nextCode));*/

            persisted.setCurrentStatus(nextCode);
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



    private void checkInput(Integer code, StatusFlag flg) {
        if ((flg == StatusFlag.BG || flg == StatusFlag.DEMO) &&  code!=null && (code / 100 != 2) ) {
            throw new UnsupportedOperationException("Invalid status flag.");
        }
    }


    private OnboardingStatus initialDetails(String aid) {

        OnboardingStatus initialStatus = new OnboardingStatus();
        initialStatus.setAid(aid);
        initialStatus.setBgCheck(Status.AWAITING_BG_AND_DEMOGRAPH.getCode());
        initialStatus.setDemograph(Status.AWAITING_BG_AND_DEMOGRAPH.getCode());
        initialStatus.setCurrentStatus(Status.AID_CREATED.getCode());
        initialStatus.setComments(INITIL_COMMENTS);
        initialStatus.setLastUpdBy(INITIL_UPDATED_BY);
        initialStatus.setUrlString(generateRandomString());

        return initialStatus;
    }



    public OnboardingStatus updateTimestamp(OnboardingStatus existing, OnboardingStatus updated){

        System.out.println("existing >>>"+existing);
        System.out.println("updated >>>"+updated);

        return Optional.ofNullable(updated)
                .map( upd -> {
                    upd.setBgCheckUpdTm( Optional.ofNullable(upd.getBgCheck()).filter(updChk -> updChk.intValue() != existing
                            .getBgCheck().intValue()).map
                            (changed ->
                                    dateTimeTotring(LocalDateTime.now())).orElse(existing.getBgCheckUpdTm()));

                    upd.setDemographUpdTm( Optional.ofNullable(upd.getDemograph()).filter(updDemo -> updDemo.intValue()
                            != existing.getDemograph().intValue())
                            .map
                                    (changed ->
                                            dateTimeTotring(LocalDateTime.now())).orElse(existing.getDemographUpdTm()));
                  return upd;
                }).orElse(existing);

    }




}
