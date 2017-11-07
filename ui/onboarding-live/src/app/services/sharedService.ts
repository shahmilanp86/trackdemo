import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  role: number;

  setRole(data: number) {
    this.role = data;
  }
  getRole() {
    return this.role;
  }
}
