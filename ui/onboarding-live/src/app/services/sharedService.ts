import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  role: string;

  setRole(data: string){
    this.role = data;
  }
  getRole() {
    return this.role;
  }
}
