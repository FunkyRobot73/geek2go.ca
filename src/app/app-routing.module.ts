import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DjGalleryComponent } from './pages/dj-gallery/dj-gallery.component';
import { PhotoBoothGalleryComponent } from './pages/photo-booth-gallery/photo-booth-gallery.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ItservicesService } from './services/itservices.service';
import { ServicesComponent } from './pages/services/services.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { HardwareComponent } from './pages/hardware/hardware.component';
import { SourcingAgentComponent } from './pages/sourcing-agent/sourcing-agent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'geek-gallery', component: DjGalleryComponent },
  { path: 'social-gallery', component: PhotoBoothGalleryComponent },
  { path: 'blog-single/:id', component: BlogSingleComponent },
  { path: 'hardware', component: HardwareComponent },
  { path: 'sourcing-agent', component: SourcingAgentComponent },
  { path: 'hall-of-fame', loadComponent: () => import('./pages/hall-of-fame/hall-of-fame.component').then(m => m.HallOfFameComponent) },
  { path: 'admin/add-hall-of-fame', loadComponent: () => import('./pages/admin/add-hall-of-fame/add-hall-of-fame.component').then(m => m.AddHallOfFameComponent) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
