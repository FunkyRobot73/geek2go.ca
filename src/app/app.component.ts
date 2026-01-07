import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { PROFILE_DATA } from './services/profile.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'Geek2Go.ca';
  profile = PROFILE_DATA;

  constructor(private profileService: ProfileService) {
    this.profileService.setProfile(this.profile);
  }
}
