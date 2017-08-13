import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { APIURLs } from '../../app/services/api-urls';

@Injectable()
export class ConfigService {

  constructor() { }
  getEnv(): string {
    return environment.envName;
  }

  getDomainURL(): string {
    return environment.domainURL;
  }

  getBasePath(): string {
    return environment.basePath;
  }

  getBaseURL(): string {
    return this.getDomainURL() + this.getBasePath();
  }
  getAPIURL(serviceName: string): string {
    var serviceObj = APIURLs[serviceName];
    var finalDerivedURL = '';
    if (serviceObj) {
      finalDerivedURL = serviceObj[this.getEnv()] || serviceObj.default;
    }

    if(finalDerivedURL) {
     finalDerivedURL = this.getBaseURL() + finalDerivedURL;
    }else{
      console.error( 'NO_URL_FOUND For:"' +serviceName+'"' )
    }

    return finalDerivedURL;
  }
}
