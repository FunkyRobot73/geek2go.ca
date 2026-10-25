import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectoryService } from '../../../services/directory.service';
import { DirectoryListing, DirectoryCounts } from '../../../interfaces/directory.interface';

@Component({
  selector: 'app-directory-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './directory-admin.component.html',
  styleUrls: ['./directory-admin.component.scss']
})
export class DirectoryAdminComponent implements OnInit {
  listings: DirectoryListing[] = [];
  counts: DirectoryCounts = { pending: 0, approved: 0, rejected: 0, total: 0 };
  
  activeFilter: 'pending' | 'approved' | 'rejected' | 'all' = 'pending';
  searchQuery: string = '';
  loading: boolean = false;
  actionMessage: { text: string; type: 'success' | 'error' } | null = null;
  processingId: number | null = null;

  constructor(public directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings(): void {
    this.loading = true;
    this.directoryService.getAdminListings(this.activeFilter).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.listings = res.listings;
          this.counts = res.counts;
        }
      },
      error: (err) => {
        this.loading = false;
        this.showMessage('Failed to load directory listings.', 'error');
        console.error(err);
      }
    });
  }

  setFilter(filter: 'pending' | 'approved' | 'rejected' | 'all'): void {
    this.activeFilter = filter;
    this.loadListings();
  }

  approveListing(item: DirectoryListing): void {
    if (!item.id) return;
    this.processingId = item.id;
    this.directoryService.updateStatus(item.id, 'approved', item.adminNotes).subscribe({
      next: (res) => {
        this.processingId = null;
        this.showMessage(`Approved "${item.businessName}"! Now live on directory.`, 'success');
        this.loadListings();
      },
      error: (err) => {
        this.processingId = null;
        this.showMessage('Error approving listing.', 'error');
        console.error(err);
      }
    });
  }

  rejectListing(item: DirectoryListing): void {
    if (!item.id) return;
    if (!confirm(`Reject listing for "${item.businessName}"?`)) return;

    this.processingId = item.id;
    this.directoryService.updateStatus(item.id, 'rejected', item.adminNotes).subscribe({
      next: (res) => {
        this.processingId = null;
        this.showMessage(`Listing for "${item.businessName}" marked as rejected.`, 'success');
        this.loadListings();
      },
      error: (err) => {
        this.processingId = null;
        this.showMessage('Error rejecting listing.', 'error');
        console.error(err);
      }
    });
  }

  saveNotes(item: DirectoryListing): void {
    if (!item.id) return;
    this.processingId = item.id;
    this.directoryService.updateStatus(item.id, item.status || 'pending', item.adminNotes).subscribe({
      next: () => {
        this.processingId = null;
        this.showMessage('Admin note saved.', 'success');
      },
      error: () => {
        this.processingId = null;
        this.showMessage('Failed to save note.', 'error');
      }
    });
  }

  deleteListing(item: DirectoryListing): void {
    if (!item.id) return;
    if (!confirm(`Are you sure you want to permanently delete "${item.businessName}"?`)) return;

    this.processingId = item.id;
    this.directoryService.deleteListing(item.id).subscribe({
      next: () => {
        this.processingId = null;
        this.showMessage(`Deleted "${item.businessName}".`, 'success');
        this.loadListings();
      },
      error: (err) => {
        this.processingId = null;
        this.showMessage('Failed to delete listing.', 'error');
        console.error(err);
      }
    });
  }

  getFbLink(profile?: string): string {
    if (!profile) return '';
    const trimmed = profile.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    // If entered as a username or handle, construct facebook url
    return `https://www.facebook.com/${trimmed.replace('@', '')}`;
  }

  get filteredListings(): DirectoryListing[] {
    if (!this.searchQuery.trim()) return this.listings;
    const q = this.searchQuery.toLowerCase();
    return this.listings.filter(item =>
      item.businessName.toLowerCase().includes(q) ||
      item.contactName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  }

  private showMessage(text: string, type: 'success' | 'error'): void {
    this.actionMessage = { text, type };
    setTimeout(() => {
      this.actionMessage = null;
    }, 4500);
  }
}
