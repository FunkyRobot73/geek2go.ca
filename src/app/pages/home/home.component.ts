import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, LatestArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
