import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HallOfFameService, HallOfFameItem } from '../../services/hall-of-fame.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hall-of-fame',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {
  items: HallOfFameItem[] = [];
  loading = true;

  constructor(private hallOfFameService: HallOfFameService) {}

  ngOnInit(): void {
    this.hallOfFameService.getAll().subscribe({
      next: (res) => {
        if (res.success) {
          this.items = res.items;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading Hall of Fame', err);
        this.loading = false;
      }
    });
  }

  getImage(url?: string): string {
    if (!url) return 'assets/images/placeholder.jpg';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return environment.imageBaseUrl + url;
  }

  parseFacts(factsStr?: string): string[] {
    if (!factsStr) return [];
    try {
      const parsed = JSON.parse(factsStr);
      if (Array.isArray(parsed)) return parsed;
      return [factsStr];
    } catch {
      return [factsStr];
    }
  }

  parseTags(tagsStr?: string): string[] {
    if (!tagsStr) return [];
    try {
      const parsed = JSON.parse(tagsStr);
      if (Array.isArray(parsed)) return parsed;
      return [tagsStr];
    } catch {
      return [tagsStr];
    }
  }
}
