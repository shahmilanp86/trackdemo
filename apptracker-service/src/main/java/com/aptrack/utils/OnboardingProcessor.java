package com.aptrack.utils;

/**
 * Created by Murthy on 7/29/2017.
 */
public class OnboardingProcessor {



    // Get All in process records
    //For each record(candidate)
        // If status.sla > 0
            // if  ~(current timestamp, updated db status tm )days > status.sla
                    // if (~(current timestamp, updated db status tm )days - status.sla) >2 -- Escalation
                            //add managers in the cc list
                    // notify to (status.roles and CC) with AID, CandidateName, CurrentStatus and Latstupdated dtm








}
