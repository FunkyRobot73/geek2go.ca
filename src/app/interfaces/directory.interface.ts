export interface DirectoryListing {
  id?: number;
  businessName: string;
  contactName: string;
  category: string;
  tagline?: string;
  description: string;
  phone?: string;
  email: string;
  websiteUrl?: string;
  serviceArea?: string;
  fbProfile?: string;
  dadDiscount?: string;
  imageUrl?: string;
  status?: 'pending' | 'approved' | 'rejected';
  adminNotes?: string;
  approvedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DirectoryCounts {
  pending: number;
  approved: number;
  rejected: number;
  total: number;
}
