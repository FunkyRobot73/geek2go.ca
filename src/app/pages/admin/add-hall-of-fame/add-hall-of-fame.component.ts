import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HallOfFameService, HallOfFameItem } from '../../../services/hall-of-fame.service';

@Component({
  selector: 'app-add-hall-of-fame',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-hall-of-fame.component.html',
  styleUrls: ['./add-hall-of-fame.component.scss']
})
export class AddHallOfFameComponent {
  item: HallOfFameItem = {
    title: '',
    subtitle: '',
    category: '',
    description: '',
    imageUrl: '',
    link: '',
    facts: '',
    tags: ''
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private hallOfFameService: HallOfFameService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.item.title) {
      this.errorMessage = 'Title is required';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Convert comma-separated facts and tags to JSON string arrays before sending
    const payload = { ...this.item };
    if (this.item.facts && typeof this.item.facts === 'string' && !this.item.facts.startsWith('[')) {
      payload.facts = JSON.stringify(this.item.facts.split(',').map(f => f.trim()).filter(f => f));
    }
    if (this.item.tags && typeof this.item.tags === 'string' && !this.item.tags.startsWith('[')) {
      payload.tags = JSON.stringify(this.item.tags.split(',').map(t => t.trim()).filter(t => t));
    }

    this.hallOfFameService.create(payload).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.successMessage = 'Successfully added to Hall of Fame!';
          this.item = {
            title: '', subtitle: '', category: '', description: '',
            imageUrl: '', link: '', facts: '', tags: ''
          };
        } else {
          this.errorMessage = 'Failed to save.';
        }
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.errorMessage = 'Server error occurred.';
      }
    });
  }
}
