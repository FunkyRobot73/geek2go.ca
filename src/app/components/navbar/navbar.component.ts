import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private themeService = inject(ThemeService);

  @Output() navItemClicked = new EventEmitter<void>();

  get isDarkMode(): boolean {
    return this.themeService.theme() === 'dark';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onNavClick(): void {
    this.navItemClicked.emit();
  }
}
