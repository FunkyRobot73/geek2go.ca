import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PrintFeature {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
}

interface SpecItem {
  label: string;
  value: string;
  icon: string;
}

interface ModelHub {
  name: string;
  link: string;
  icon: string;
  desc: string;
}

@Component({
  selector: 'app-print-lab',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './print-lab.component.html',
  styleUrl: './print-lab.component.scss'
})
export class PrintLabComponent {
  modelHubs: ModelHub[] = [
    {
      name: 'MakerWorld',
      link: 'https://makerworld.com/',
      icon: 'fa-solid fa-cubes',
      desc: 'Bambu Lab official 1-click models'
    },
    {
      name: 'Printables',
      link: 'https://www.printables.com/',
      icon: 'fa-solid fa-shapes',
      desc: 'High quality community models'
    },
    {
      name: 'Thingiverse',
      link: 'https://www.thingiverse.com/',
      icon: 'fa-solid fa-cube',
      desc: 'Vast archive of free 3D designs'
    }
  ];

  specs: SpecItem[] = [
    { label: 'Hardware', value: 'Bambu Lab A1 + AMS Lite', icon: 'fa-solid fa-print' },
    { label: 'Max Speed', value: 'Up to 500 mm/s', icon: 'fa-solid fa-gauge-high' },
    { label: 'Build Volume', value: '256 × 256 × 256 mm', icon: 'fa-solid fa-vector-square' },
    { label: 'Multi-Color', value: 'Up to 4 Colors (AMS)', icon: 'fa-solid fa-palette' },
    { label: 'Materials', value: 'PLA, PETG, TPU (Flexible)', icon: 'fa-solid fa-layer-group' },
    { label: 'Layer Precision', value: 'Down to 0.08 mm', icon: 'fa-solid fa-microscope' }
  ];

  features: PrintFeature[] = [
    {
      title: 'Custom Mounts & Brackets',
      subtitle: 'Cable clips, Raspberry Pi & Mini PC',
      description: 'Wall mounts, under-desk cable management clips, GPU anti-sag brackets, SSD/HDD sleds, and custom cases for small electronics.',
      icon: 'fa-solid fa-wrench',
      badge: 'Popular'
    },
    {
      title: 'Repairs & Replacement Parts',
      subtitle: 'Fix it instead of replacing it',
      description: 'Discontinued plastic gears, broken knobs, laptop hinge clips, battery doors, and vintage tech restoration pieces that you can no longer buy.',
      icon: 'fa-solid fa-screwdriver-wrench',
      badge: 'Save Money'
    },
    {
      title: 'Multi-Color & AMS Precision',
      subtitle: 'Crisp multi-tone logos & designs',
      description: 'Full multi-color prints with automated filament switching. Custom desk signs, shop logos, board game accessories, and custom chess pieces.',
      icon: 'fa-solid fa-palette',
      badge: '4 Colors'
    },
    {
      title: 'Rapid Prototyping & STL Slicing',
      subtitle: 'Fast local Aldershot/Burlington turnaround',
      description: 'Bring your STL, STEP, or 3MF file or pick any design online. High-speed printing gets parts in your hands in hours, not weeks.',
      icon: 'fa-solid fa-bolt',
      badge: 'Local'
    }
  ];
}
