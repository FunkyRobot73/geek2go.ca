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

  // Edit Modal State
  editingItem: DirectoryListing | null = null;
  editForm: Partial<DirectoryListing> = {};
  editSelectedFile: File | null = null;
  editImagePreview: string | null = null;
  isSavingEdit: boolean = false;

  categories: string[] = [
    'Plumbing',
    'Electrical',
    'HVAC & Heating/AC',
    'Handyman & Renovation',
    'Roofing & Siding',
    'Landscaping & Lawn Care',
    'Automotive & Detailing',
    'DJ & Music Entertainment',
    'Event Rentals & Party Supplies',
    'Photo Booth Services',
    'Comic Books, Toys & Collectibles',
    'SEO & Digital Marketing',
    'Accounting & Tax',
    'Mortgages & Real Estate',
    'Legal Services',
    'IT & Tech Support',
    'Photography & Media',
    'Fitness & Health',
    'Other Local Services'
  ];

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
      next: () => {
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
      next: () => {
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

  // --- EDIT MODAL HANDLERS ---
  openEdit(item: DirectoryListing): void {
    this.editingItem = item;
    this.editForm = { ...item };
    this.editSelectedFile = null;
    this.editImagePreview = null;
  }

  closeEdit(): void {
    this.editingItem = null;
    this.editForm = {};
    this.editSelectedFile = null;
    this.editImagePreview = null;
  }

  onEditFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editSelectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editImagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  resetToDefaultAvatar(): void {
    this.editForm.imageUrl = 'avatars/default-dad.svg';
    this.editSelectedFile = null;
    this.editImagePreview = null;
  }

  saveEdit(): void {
    if (!this.editingItem?.id) return;
    this.isSavingEdit = true;

    const payload = new FormData();
    if (this.editForm.businessName) payload.append('businessName', this.editForm.businessName);
    if (this.editForm.contactName) payload.append('contactName', this.editForm.contactName);
    if (this.editForm.category) payload.append('category', this.editForm.category);
    if (this.editForm.tagline !== undefined) payload.append('tagline', this.editForm.tagline || '');
    if (this.editForm.description) payload.append('description', this.editForm.description);
    if (this.editForm.phone !== undefined) payload.append('phone', this.editForm.phone || '');
    if (this.editForm.email) payload.append('email', this.editForm.email);
    if (this.editForm.websiteUrl !== undefined) payload.append('websiteUrl', this.editForm.websiteUrl || '');
    if (this.editForm.serviceArea !== undefined) payload.append('serviceArea', this.editForm.serviceArea || '');
    if (this.editForm.fbProfile !== undefined) payload.append('fbProfile', this.editForm.fbProfile || '');
    if (this.editForm.dadDiscount !== undefined) payload.append('dadDiscount', this.editForm.dadDiscount || '');
    if (this.editForm.status) payload.append('status', this.editForm.status);
    if (this.editForm.adminNotes !== undefined) payload.append('adminNotes', this.editForm.adminNotes || '');
    if (this.editForm.imageUrl) payload.append('imageUrl', this.editForm.imageUrl);

    if (this.editSelectedFile) {
      payload.append('image', this.editSelectedFile);
    }

    this.directoryService.updateListing(this.editingItem.id, payload).subscribe({
      next: (res) => {
        this.isSavingEdit = false;
        if (res.success) {
          this.showMessage(`Successfully updated "${this.editForm.businessName}"!`, 'success');
          this.closeEdit();
          this.loadListings();
        } else {
          this.showMessage('Failed to update listing.', 'error');
        }
      },
      error: (err) => {
        this.isSavingEdit = false;
        this.showMessage('Server error updating listing.', 'error');
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
