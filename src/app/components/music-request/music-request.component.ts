import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MusicRequestService } from '../../services/music-request.service';
import { EventPhase, SpecialDanceType } from '../../interfaces/music-request';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-request',
  templateUrl: './music-request.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./music-request.component.scss']
})
export class MusicRequestComponent implements OnInit {
  musicForm: FormGroup;
  songForm: FormGroup;
  customers: any[] = [];
  savedSongs: any[] = [];
  selectedCustomerId: number | null = null;
  selectedCustomerDetails: any = null;
  isEditing: boolean = false;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private musicRequestService: MusicRequestService) {
    this.musicForm = this.fb.group({
      customerId: new FormControl('', Validators.required)
    });

    this.songForm = this.fb.group({
      phaseId: [1, Validators.required],
      artist: ['', Validators.required],
      title: ['', Validators.required],
      youtubeUrl: [''],
      specialInstructions: [''],
      isSpecialDance: [false],
      danceType: ['']
    });
  }

  ngOnInit(): void {
    this.musicRequestService.getCustomers().subscribe(customers => this.customers = customers);
  }

  onCustomerSelect(event: any): void {
    const id = parseInt(event.target.value);
    this.selectedCustomerId = id;
    this.selectedCustomerDetails = this.customers.find(c => c.id === id);
    this.musicRequestService.getSongRequests(id).subscribe(songs => this.savedSongs = songs);
  }

  submitSong(): void {
    if (this.songForm.invalid || !this.selectedCustomerId) return;

    const newSong = {
      customerId: this.selectedCustomerId,
      ...this.songForm.value
    };

    if (this.isEditing && this.editingIndex !== null) {
      this.savedSongs[this.editingIndex] = newSong;
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.savedSongs.push(newSong);
    }

    this.songForm.reset({ phaseId: 1, isSpecialDance: false });
  }

  editSong(index: number): void {
    const song = this.savedSongs[index];
    this.songForm.patchValue(song);
    this.isEditing = true;
    this.editingIndex = index;
  }

  deleteSong(index: number): void {
    this.savedSongs.splice(index, 1);
    if (this.editingIndex === index) {
      this.songForm.reset({ phaseId: 1, isSpecialDance: false });
      this.isEditing = false;
      this.editingIndex = null;
    }
  }

  saveAllToServer(): void {
    if (this.savedSongs.length === 0) return;
    this.musicRequestService.saveMusicRequests(this.savedSongs).subscribe({
      next: () => alert('Saved successfully!'),
      error: err => alert('Save failed: ' + err.message)
    });
  }

  get customerIdControl(): FormControl {
  return this.musicForm.get('customerId') as FormControl;
}

}
