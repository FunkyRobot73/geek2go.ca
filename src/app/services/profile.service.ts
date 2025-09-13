import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSubject = new BehaviorSubject<any>(null);
  profile$ = this.profileSubject.asObservable();

  setProfile(profile: any) {
    this.profileSubject.next(profile);
  }

  constructor() { }
}
