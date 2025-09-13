import { Component } from '@angular/core';
import { PhotoBoothGalleryComponent } from "../photo-booth-gallery/photo-booth-gallery.component";
import { DjGalleryComponent } from "../dj-gallery/dj-gallery.component";

@Component({
  selector: 'app-gallery',
  imports: [PhotoBoothGalleryComponent, DjGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
