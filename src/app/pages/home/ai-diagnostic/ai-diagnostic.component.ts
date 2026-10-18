import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BeginnerDistro {
  name: string;
  subtitle: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-ai-diagnostic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ai-diagnostic.component.html',
  styleUrl: './ai-diagnostic.component.scss'
})
export class AiDiagnosticComponent {
  distros: BeginnerDistro[] = [
    {
      name: 'Linux Mint',
      subtitle: 'Feels just like Windows',
      icon: 'fa-solid fa-leaf',
      link: 'https://linuxmint.com/'
    },
    {
      name: 'Ubuntu',
      subtitle: 'Most popular & supported',
      icon: 'fa-brands fa-ubuntu',
      link: 'https://ubuntu.com/desktop'
    },
    {
      name: 'Zorin OS',
      subtitle: 'Made for easy switching',
      icon: 'fa-solid fa-desktop',
      link: 'https://zorinos.com/'
    },
    {
      name: 'Pop!_OS',
      subtitle: 'Great for gaming & work',
      icon: 'fa-solid fa-rocket',
      link: 'https://system76.com/pop/'
    }
  ];
}
