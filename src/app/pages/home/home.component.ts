import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, LatestArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  profile: any;

  constructor(private profileService: ProfileService) {
    this.profileService.profile$.subscribe(data => {
      this.profile = data;
    });
  }
}
