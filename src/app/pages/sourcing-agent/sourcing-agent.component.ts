import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface SourcingResult {
  platform: string;
  url: string;
  icon: string;
  status: string;
  intelligence: string;
}

@Component({
  selector: 'app-sourcing-agent',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sourcing-agent.component.html',
  styleUrl: './sourcing-agent.component.scss'
})
export class SourcingAgentComponent {
  searchTerm: string = '';
  maxPrice: number = 50;
  location: string = 'Burlington, ON';
  radius: number = 25;
  isSearching: boolean = false;
  results: SourcingResult[] = [];

  launchMission() {
    if (!this.searchTerm) return;

    this.isSearching = true;
    this.results = [];

    // Simulate "Agent Scanning"
    setTimeout(() => {
      this.generateResults();
      this.isSearching = false;
    }, 2000);
  }

  generateResults() {
    const encodedQuery = encodeURIComponent(this.searchTerm);
    
    this.results = [
      {
        platform: 'Amazon.ca',
        icon: 'fa-brands fa-amazon',
        url: `https://www.amazon.ca/s?k=${encodedQuery}&rh=p_36%3A0-${this.maxPrice}00`,
        status: 'Online',
        intelligence: `Checking the Canadian Amazon store for ${this.searchTerm} under $${this.maxPrice}.`
      },
      {
        platform: 'FB Marketplace',
        icon: 'fa-brands fa-facebook',
        url: `https://www.facebook.com/marketplace/burlington/search?query=${encodedQuery}&maxPrice=${this.maxPrice}`,
        status: 'Local',
        intelligence: `Checking Burlington and nearby for people selling ${this.searchTerm} second-hand.`
      },
      {
        platform: 'Kijiji',
        icon: 'fa-solid fa-k',
        url: `https://www.kijiji.ca/b-burlington-on/${encodedQuery}/k0l1700290?address=Burlington%2C+ON&radius=${this.radius}&price=__${this.maxPrice}`,
        status: 'Local',
        intelligence: `Looking through local Ontario ads for any good deals on ${this.searchTerm}.`
      },
      {
        platform: 'Google Shopping (.ca)',
        icon: 'fa-solid fa-cart-shopping',
        url: `https://www.google.ca/search?q=${encodedQuery}+site:.ca&tbm=shop`,
        status: 'Online',
        intelligence: `A quick scan of other Canadian shops to see who has the best price.`
      }
    ];
  }
}
