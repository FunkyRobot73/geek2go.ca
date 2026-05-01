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
  selectedFile: File | null = null;

  constructor(
    private hallOfFameService: HallOfFameService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    if (!this.item.title) {
      this.errorMessage = 'Title is required';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = new FormData();
    formData.append('title', this.item.title);
    if (this.item.subtitle) formData.append('subtitle', this.item.subtitle);
    if (this.item.category) formData.append('category', this.item.category);
    if (this.item.description) formData.append('description', this.item.description);
    if (this.item.link) formData.append('link', this.item.link);
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    } else if (this.item.imageUrl) {
      formData.append('imageUrl', this.item.imageUrl);
    }

    if (this.item.facts && typeof this.item.facts === 'string') {
      const factsArr = this.item.facts.split(',').map(f => f.trim()).filter(f => f);
      formData.append('facts', JSON.stringify(factsArr));
    }
    if (this.item.tags && typeof this.item.tags === 'string') {
      const tagsArr = this.item.tags.split(',').map(t => t.trim()).filter(t => t);
      formData.append('tags', JSON.stringify(tagsArr));
    }

    this.hallOfFameService.create(formData).subscribe({
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
