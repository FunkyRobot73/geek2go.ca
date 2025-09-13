import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DjPackagesComponent } from './pages/dj-packages/dj-packages.component';
import { PhotoBoothPackagesComponent } from './pages/photo-booth-packages/photo-booth-packages.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DjGalleryComponent } from './pages/dj-gallery/dj-gallery.component';
import { PhotoBoothGalleryComponent } from './pages/photo-booth-gallery/photo-booth-gallery.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AddeventComponent } from './pages/addevent/addevent.component';
import { MusicRequestComponent } from './components/music-request/music-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dj-packages', component: DjPackagesComponent },
  { path: 'photo-booth-packages', component: PhotoBoothPackagesComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'dj-gallery', component: DjGalleryComponent },
  { path: 'photo-booth-gallery', component: PhotoBoothGalleryComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'addevent', component: AddeventComponent },
  { path: 'music-request', component: MusicRequestComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
