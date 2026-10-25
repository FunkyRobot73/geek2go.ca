import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectoryService } from '../../services/directory.service';
import { DirectoryListing } from '../../interfaces/directory.interface';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  listings: DirectoryListing[] = [];
  loading = true;
  errorMessage = '';

  selectedCategory = 'All';
  searchQuery = '';

  baseCategories: string[] = [
    'All',
    'Plumbing',
    'Electrical',
    'HVAC & Heating/AC',
    'Handyman & Renovation',
    'Roofing & Siding',
    'Landscaping & Lawn Care',
    'Automotive & Detailing',
    'DJ & Entertainment',
    'Event Rentals',
    'Photo Booth',
    'Comic Books & Collectibles',
    'SEO & Digital Marketing',
    'Accounting & Tax',
    'Mortgages & Real Estate',
    'Legal Services',
    'IT & Tech Support',
    'Photography & Media',
    'Fitness & Health',
  ];

  categories: string[] = [...this.baseCategories];

  constructor(public directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchListings();
  }

  fetchCategories(): void {
    this.directoryService.getCategories().subscribe({
      next: (res) => {
        if (res.success && res.categories) {
          this.mergeCategories(res.categories);
        }
      },
      error: () => {
        // Fallback to base categories on error
      }
    });
  }

  mergeCategories(newCats: string[]): void {
    const combined = Array.from(new Set([...this.baseCategories, ...newCats]));
    this.categories = combined;
  }

  fetchListings(): void {
    this.loading = true;
    this.errorMessage = '';

    this.directoryService.getApprovedListings(this.selectedCategory, this.searchQuery).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.listings = res.listings;
          const listingCats = res.listings.map(l => l.category).filter(Boolean);
          this.mergeCategories(listingCats);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Unable to load directory listings at this time.';
        console.error(err);
      }
    });
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.fetchListings();
  }

  onSearch(): void {
    this.fetchListings();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.fetchListings();
  }
}
