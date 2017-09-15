import { Component, OnInit, Input }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks!';
    @Input() formData: FormData;
    isFormValid: boolean = false;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log(JSON.stringify(this.formData))
        console.log('Result feature loaded!');
    }

    submit() {
      /*this.http
        .post('/api/contract', this.formData)
        .subscribe();*/
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
   /* private submitData(){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('/api/contract/', this.formData, options).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
      let body = res.json();
      return body.data || {};
    }
    private handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
      console.error(error.message || error);
      return Promise.reject(error.message || error);
    }*/
}
