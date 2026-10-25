import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { PROFILE_DATA } from './services/profile.data';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'Geek2Go.ca';
  profile = PROFILE_DATA;
  isMobileMenuOpen = false;

  constructor(
    private profileService: ProfileService,
    private themeService: ThemeService
  ) {
    this.profileService.setProfile(this.profile);
  }

  get isDarkMode(): boolean {
    return this.themeService.theme() === 'dark';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
