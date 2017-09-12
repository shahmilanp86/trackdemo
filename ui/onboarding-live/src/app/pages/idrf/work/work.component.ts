import { Component, OnInit }   from '@angular/core';
import { Work } from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'Contract Details';
    work: Work;
    form: any;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.work = this.formDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setWork(this.work);
    }
}
