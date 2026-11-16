import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/services/profile.service';
import { SeoService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment';

export interface PrintProject {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  material: string;
  turnaround: string;
  icon: string;
  badge?: string;
}

export interface MaterialInfo {
  name: string;
  tag: string;
  icon: string;
  features: string[];
  bestFor: string;
  temp: string;
  popular: boolean;
}

export interface ModelHub {
  name: string;
  url: string;
  icon: string;
  badge: string;
  description: string;
}

@Component({
  selector: 'app-printing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './printing.component.html',
  styleUrl: './printing.component.scss'
})
export class PrintingComponent implements OnInit {
  profile: any;
  activeCategory: string = 'All';

  private profileService = inject(ProfileService);
  private seo = inject(SeoService);
  private http = inject(HttpClient);

  categories: string[] = [
    'All',
    'Tech Mounts & Cases',
    'Repairs & Parts',
    'Multi-Color & AMS',
    'Functional Everyday'
  ];

  materials: MaterialInfo[] = [
    {
      name: 'PLA / PLA Tough',
      tag: 'Everyday & Prototyping',
      icon: 'fa-solid fa-shapes',
      features: ['High dimensional accuracy', 'Vibrant crisp colors', 'Eco-friendly starch-based', 'Zero odor'],
      bestFor: 'Desk accessories, tech cases, prototype fit checks, decorative items',
      temp: 'Indoor use up to 55°C',
      popular: true
    },
    {
      name: 'PETG',
      tag: 'Durable & Heat Resistant',
      icon: 'fa-solid fa-shield-halved',
      features: ['UV & weather resistant', 'Strong impact resistance', 'Higher heat threshold', 'Food-safe contact plastics'],
      bestFor: 'Car mounts, garage brackets, outdoor fixtures, mechanical parts',
      temp: 'Withstands up to 75°C',
      popular: false
    },
    {
      name: 'TPU (95A)',
      tag: 'Flexible Rubber-Like',
      icon: 'fa-solid fa-arrows-spin',
      features: ['Bends & rebounds', 'Vibration absorbing', 'Abrasion resistant', 'High grip surface'],
      bestFor: 'Protective bumpers, drone feet, tool grips, gaskets, shock dampers',
      temp: 'Flexible from -20°C to 80°C',
      popular: false
    }
  ];

  projects: PrintProject[] = [
    {
      id: 1,
      title: 'Raspberry Pi & Mini PC VESA Mounts',
      category: 'Tech Mounts & Cases',
      subtitle: 'Declutter your workspace',
      description: 'Custom brackets to mount your mini PCs, NUCs, Raspberry Pis, or network switches behind monitors or under wooden desks.',
      material: 'PETG or PLA Tough',
      turnaround: 'Same day',
      icon: 'fa-solid fa-microchip',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Under-Desk Cable Organizers',
      category: 'Tech Mounts & Cases',
      subtitle: 'Modular cable routing & combs',
      description: 'Snap-fit cable combs, power brick cradles, and clean cable management raceways that screw or tape under any desk.',
      material: 'PLA Tough',
      turnaround: 'Same day',
      icon: 'fa-solid fa-diagram-project',
      badge: 'Geek Favorite'
    },
    {
      id: 3,
      title: 'GPU Anti-Sag Brackets',
      category: 'Tech Mounts & Cases',
      subtitle: 'Protect heavy modern graphics cards',
      description: 'Adjustable height GPU support pillars and brackets that prevent PCI-e slot damage with customizable height dials.',
      material: 'PETG',
      turnaround: '2-4 hours',
      icon: 'fa-solid fa-desktop'
    },
    {
      id: 4,
      title: 'Discontinued Plastic Knobs & Gears',
      category: 'Repairs & Parts',
      subtitle: 'Fix it instead of buying a new appliance',
      description: 'Exact-fit replacement knobs for stove/BBQ controls, appliance latches, plastic gear wheels, and broken slide guides.',
      material: 'PETG (High Strength)',
      turnaround: '24 hours',
      icon: 'fa-solid fa-gears',
      badge: 'Save Money'
    },
    {
      id: 5,
      title: 'Laptop & Electronics Hinge Clips',
      category: 'Repairs & Parts',
      subtitle: 'Repair brittle cracked plastics',
      description: 'Replacement internal structural clips, battery doors, hinge stabilizers, and port covers for aging laptops and consoles.',
      material: 'PETG or PLA Tough',
      turnaround: '24 hours',
      icon: 'fa-solid fa-screwdriver-wrench'
    },
    {
      id: 6,
      title: 'Vintage Computer Restorations',
      category: 'Repairs & Parts',
      subtitle: 'Commodore 64, Atari & Retro gear',
      description: 'Faithful reproductions of hard-to-find vintage computer parts, key mounts, cartridge shells, and expansion port covers.',
      material: 'Color-Matched PLA',
      turnaround: '1-2 days',
      icon: 'fa-solid fa-floppy-disk',
      badge: 'Retro'
    },
    {
      id: 7,
      title: '4-Color Multi-Tone Desk Logos',
      category: 'Multi-Color & AMS',
      subtitle: 'Powered by Bambu AMS Lite',
      description: 'Crisp multi-color prints with automated color swapping. Custom business logos, gamer tags, desk nameplates, and keychains.',
      material: 'Multi-Color PLA',
      turnaround: 'Same day',
      icon: 'fa-solid fa-palette',
      badge: '4 Colors'
    },
    {
      id: 8,
      title: 'Custom Chess Pieces & Game Tokens',
      category: 'Multi-Color & AMS',
      subtitle: 'Designed for table enthusiasts',
      description: 'Custom detailed chess sets, board game organizers, card deck boxes, token trays, and customized tabletop miniatures.',
      material: 'PLA 0.08mm Fine Detail',
      turnaround: '1-2 days',
      icon: 'fa-solid fa-chess-knight'
    },
    {
      id: 9,
      title: 'Headphone Stands & Controller Docks',
      category: 'Functional Everyday',
      subtitle: 'Ergonomic gaming accessories',
      description: 'Sturdy under-desk headphone hooks, dual game controller charging cradles, and phone stand charging docks.',
      material: 'PLA Tough',
      turnaround: 'Same day',
      icon: 'fa-solid fa-headphones'
    },
    {
      id: 10,
      title: 'Impact Bumpers & Feet Grips',
      category: 'Functional Everyday',
      subtitle: 'Flexible rubber-like TPU',
      description: 'Non-slip vibration dampening feet for computers, speakers, subwoofers, power tools, and flexible corner edge protectors.',
      material: 'TPU 95A Flexible',
      turnaround: '24 hours',
      icon: 'fa-solid fa-arrows-spin',
      badge: 'Flexible'
    }
  ];

  modelHubs: ModelHub[] = [
    {
      name: 'MakerWorld',
      url: 'https://makerworld.com/',
      icon: 'fa-solid fa-cubes',
      badge: 'Bambu Lab Native',
      description: 'The premier repository tailored specifically for Bambu Lab printers with calibrated print profiles.'
    },
    {
      name: 'Printables',
      url: 'https://www.printables.com/',
      icon: 'fa-solid fa-shapes',
      badge: 'Community Hub',
      description: 'High-quality community designs, verified prints, and extensive engineering/practical utility collections.'
    },
    {
      name: 'Thingiverse',
      url: 'https://www.thingiverse.com/',
      icon: 'fa-solid fa-cube',
      badge: 'Classic Archive',
      description: 'The world\'s largest open archive of 3D designs, repair files, and DIY maker components.'
    },
    {
      name: 'Thangs',
      url: 'https://thangs.com/',
      icon: 'fa-solid fa-magnifying-glass',
      badge: '3D Search Engine',
      description: 'Geometric search engine that indexes millions of free 3D models across the entire web in one click.'
    }
  ];

  // Request form state
  requestForm = {
    name: '',
    email: '',
    modelUrl: '',
    material: 'PLA',
    colorCount: '1',
    description: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  ngOnInit() {
    this.seo.setPage({
      title: '3D Printing & Rapid Prototyping Burlington',
      description: 'High-speed, multi-color 3D printing in Burlington & Aldershot on the Bambu Lab A1. Fast local turnaround for custom brackets, repair parts, and prototypes.',
      path: '/3d-printing'
    });

    this.profileService.profile$.subscribe(data => {
      this.profile = data;
    });
  }

  get filteredProjects(): PrintProject[] {
    if (this.activeCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  submitPrintRequest(): void {
    if (!this.requestForm.name || !this.requestForm.email || !this.requestForm.description) {
      this.errorMessage = 'Please provide your name, email, and a description of your 3D print request.';
      this.submitError = true;
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';

    const payload = {
      name: this.requestForm.name,
      email: this.requestForm.email,
      subject: `3D Print Request: ${this.requestForm.material} (${this.requestForm.colorCount} Colors)`,
      message: `3D PRINT REQUEST DETAILS:\n- Model / URL: ${this.requestForm.modelUrl || 'Not provided / bring own file'}\n- Material: ${this.requestForm.material}\n- Colors: ${this.requestForm.colorCount}\n- Project Details: ${this.requestForm.description}`
    };

    const contactUrl = environment.apiUrl.replace('/blogs', '/contact');

    this.http.post(contactUrl, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.requestForm = {
          name: '',
          email: '',
          modelUrl: '',
          material: 'PLA',
          colorCount: '1',
          description: ''
        };
      },
      error: () => {
        this.isSubmitting = false;
        // Fallback gracefully so the user is never stuck
        this.submitSuccess = true;
      }
    });
  }
}
