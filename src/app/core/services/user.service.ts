import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../../libs/services';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private __commonService: CommonService) {}

  getUserProfile(): Observable<any> {
    return this.__commonService.get('users/profile');
  }

  updateUserProfile(data: any): Observable<any> {
    return this.__commonService.put('users/profile', data);
  }
}
