package com.aptrack.service;

import com.aptrack.common.Status;
import com.aptrack.entity.CandidateInfo;
import com.aptrack.entity.ContractInfo;
import com.aptrack.repository.CandidateInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

import static com.aptrack.common.Status.AWAITING_CANDIDATE_INFO;
import static com.aptrack.utils.ApptrackerUtils.getNullPropertyNames;
import static org.springframework.beans.BeanUtils.copyProperties;


/**
 * Created by Murthy on 7/16/2017.
 */
@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateInfoRepository candidateInfoRepository;

    @Autowired
    private OnboardingStatusService onboardingStatusService;
    @Autowired
    private ContractService contractService;
    //private OnboardingStatusViewRepsitory onboardingStatusRepsitory;

    @Autowired
    private UserService userService;
    //TODO Remove this
    //@Autowired
    // private OnboardingProcessor processor;
    @Autowired
    private NotificationService notificationService;


    @Override
    public Collection<CandidateInfo> findAll() {

        // processor.process();
        return candidateInfoRepository.findAll();
    }

    @Override
    public CandidateInfo get(String aid) {

        return candidateInfoRepository.findOne(aid);
    }

    @Override
    @Transactional
    public CandidateInfo create(CandidateInfo candidate) {
        return (CandidateInfo) Optional.ofNullable(candidateInfoRepository.findOne(candidate.getAid()))
                .map(exits -> {
                    throw new UnsupportedOperationException("Aid already exists.");
                })
                .orElse(saveDetails(candidate));

    }

    private CandidateInfo saveDetails(CandidateInfo candidate) {
        CandidateInfo candidateInfo = candidateInfoRepository.save(candidate);
        //TODO null values of DATETIME feilds in DB table tobe fixed.
        //onboardingStatusService.update(candidate.getAid());
        onboardingStatusService.add(candidate.getAid());
        ContractInfo contractInfo = new ContractInfo();
        contractInfo.setAid(candidate.getAid());
        contractService.create(contractInfo);

        // String[] toList = {candidate.getEmail()};
        //String[] copyList = spocs.stream().toArray(String[]::new);

       /* String[] toList = {"gsvsnmurthy@gmail.com"};
        String[] copyList = {"sivavsmg@virtusapolaris.com"};
        String subject = "Candidate Sub";
        String urlTag = "urlTag"; //TODO retrive urltag
        String urlString = "http://apptracker/"+urlTag;
        String dueDate = ApptrackerUtils.dateTotring(LocalDate.now().plusDays(CANDIDAE_INITIAL_SLA));
        String body = String.format("Candidate email contenent \n Candidate  Name: %s \n Due date to complete: %s \n
        URL to access: %s  ",
                candidate.getLastName() + " , " + candidate.getLastName(),
                dueDate,
                urlString );
        try {
            Notifier.sendEmail(toList, copyList, subject,body,null);
        } catch (MessagingException e) {
            e.printStackTrace();
        }*/

        notificationService.sendEmail(candidate.getAid(), AWAITING_CANDIDATE_INFO, Boolean.FALSE);


        // notify(candidate,false);
        return candidateInfo;
    }

  /*  private boolean notify(CandidateInfo candidate, int addUrltag) {

    }*/

    /**
     * private boolean notify(CandidateInfo candidate, boolean create, String subject, String body,String[] toList,
     * String[] copyList ) {
     * <p>
     * // Get candidate's emailId
     * // Get SPOC emailId  (copy address)
     * // Generate urltag
     * // Get email content - Subject, Body
     * // Call notifier
     * //
     * <p>
     * // if create then
     * //  create urltag
     * // to
     * <p>
     * List<UserInfo> spocs = userService.getUsers(Lists.newArrayList(Role.SPOC.getCode()));
     * // String[] toList = {candidate.getEmail()};
     * //String[] copyList = spocs.stream().toArray(String[]::new);
     * <p>
     * String[] toList = {"gsvsnmurthy@gmail.com"};
     * String[] copyList = {"sivavsmg@virtusapolaris.com"};
     * String subject = "Candidate Sub";
     * String urlTag = "urlTag"; //TODO retrive urltag
     * String urlString = "http://apptracker/"+urlTag;
     * String dueDate = ApptrackerUtils.dateTotring(LocalDate.now().plusDays(CANDIDAE_INITIAL_SLA));
     * String body = String.format("Candidate email contenent \n Candidate  Name: %s \n Due date to complete: %s \n
     * URL to access: %s  ",
     * candidate.getLastName() + " , " + candidate.getLastName(),
     * dueDate,
     * urlString );
     * try {
     * Notifier.sendEmail(toList, copyList, subject,body,null);
     * } catch (MessagingException e) {
     * e.printStackTrace();
     * }
     * <p>
     * <p>
     * return true;
     * }
     **/


    @Override
    @Transactional
    public CandidateInfo update(CandidateInfo updated) {
        CandidateInfo existing = candidateInfoRepository.findOne(updated.getAid());
        Optional.ofNullable(existing)
                .orElseThrow(() -> new UnsupportedOperationException("Invalid update operation: " + existing));

        copyProperties(updated, existing, getNullPropertyNames(updated));

        return Optional.of(updated.getAid())
                .map(onboardingStatusService::get)
                .map(persisted -> {
                    persisted.setCurrentStatus(Status.SPOC_REVIEW.getCode());
                    return persisted;
                })
                .map(onboardingStatusService::update)
                .map(finalReturn -> candidateInfoRepository.save(existing)).get();

    }

}
