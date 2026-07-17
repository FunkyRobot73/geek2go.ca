import { Component } from '@angular/core';
import { TechGalleryComponent } from "../tech-gallery/tech-gallery.component";
import { GeekGalleryComponent } from "../geek-gallery/geek-gallery.component";

@Component({
  selector: 'app-gallery',
  imports: [TechGalleryComponent, GeekGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
