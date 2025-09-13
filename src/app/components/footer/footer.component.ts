import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-footer',
  imports: [BrowserModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  profile: any;
  
  constructor(private profileService: ProfileService) {
    this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
    });
  }
}
