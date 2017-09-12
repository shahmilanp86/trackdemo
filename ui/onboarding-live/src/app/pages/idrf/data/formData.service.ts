import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address, Work }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) {
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : Work {
        // Return the work type
      var work: Work = {
      appprovedContactNum : this.formData.appprovedContactNum,
      contractEndDte : this.formData.contractEndDte,
      cwAssignmentEndDte : this.formData.cwAssignmentEndDte,
      candidateRoleTyp : this.formData.candidateRoleTyp,
      returnStatus : this.formData.returnStatus,
      formaerWorker : this.formData.formaerWorker,
      priorSid : this.formData.priorSid,
      priorDates : this.formData.priorDates,
      supplierName : this.formData.supplierName,
      cwWorkCity : this.formData.cwWorkCity,
      cwWorkLocation : this.formData.cwWorkLocation,
      cwWorkMailDrop : this.formData.cwWorkMailDrop,
      homeZip : this.formData.homeZip,
      usArmedForces : this.formData.usArmedForces,
      registeredNotaryPublic : this.formData.registeredNotaryPublic,
      csiInfoAccess : this.formData.csiInfoAccess,
      candidateReferredToYou : this.formData.candidateReferredToYou,
      referralOriginate : this.formData.referralOriginate,
      candiateSeletedWithinGuidelines : this.formData.candiateSeletedWithinGuidelines,
      currentAddress : this.formData.currentAddress,
      serviceType : this.formData.serviceType,
      fullORPartTime : this.formData.fullORPartTime,
      paymentType : this.formData.paymentType,
      costCenter : this.formData.costCenter,
      cwJobCode : this.formData.cwJobCode,
      lobName : this.formData.lobName,
      cwAssignmentStartDte : this.formData.cwAssignmentStartDte,
      sponsorId : this.formData.sponsorId,
      sponsorLastName : this.formData.sponsorLastName,
      sponsorFirstName : this.formData.sponsorFirstName,
      emailRequired : this.formData.emailRequired,
      spocEmail : this.formData.spocEmail,
      itornonIT : this.formData.itornonIT
      };
      return work;
    }

    setWork(data: Work) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.appprovedContactNum = data.appprovedContactNum;
        this.formData.contractEndDte = data.contractEndDte;
        this.formData.cwAssignmentEndDte = data.cwAssignmentEndDte;
        this.formData.candidateRoleTyp = data.candidateRoleTyp;
        this.formData.returnStatus = data.returnStatus;
        this.formData.formaerWorker = data.formaerWorker;
        this.formData.priorSid = data.priorSid;
        this.formData.priorDates = data.priorDates;
        this.formData.supplierName = data.supplierName;
        this.formData.cwWorkCity = data.cwWorkCity;
        this.formData.cwWorkLocation = data.cwWorkLocation;
        this.formData.cwWorkMailDrop = data.cwWorkMailDrop;
        this.formData.homeZip = data.homeZip;
        this.formData.usArmedForces = data.usArmedForces;
        this.formData.registeredNotaryPublic = data.registeredNotaryPublic;
        this.formData.csiInfoAccess = data.csiInfoAccess;
        this.formData.candidateReferredToYou = data.candidateReferredToYou;
        this.formData.referralOriginate = data.referralOriginate;
        this.formData.candiateSeletedWithinGuidelines = data.candiateSeletedWithinGuidelines;
        this.formData.currentAddress = data.currentAddress;
        this.formData.serviceType = data.serviceType;
        this.formData.fullORPartTime = data.fullORPartTime;
        this.formData.paymentType = data.paymentType;
        this.formData.costCenter = data.costCenter;
        this.formData.cwJobCode = data.cwJobCode;
        this.formData.lobName = data.lobName;
        this.formData.cwAssignmentStartDte = data.cwAssignmentStartDte;
        this.formData.sponsorId = data.sponsorId;
        this.formData.sponsorLastName = data.sponsorLastName;
        this.formData.sponsorFirstName = data.sponsorFirstName;
        this.formData.emailRequired = data.emailRequired;
        this.formData.spocEmail = data.spocEmail;
        this.formData.itornonIT = data.itornonIT;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid &&
                this.isAddressFormValid;
    }
}
