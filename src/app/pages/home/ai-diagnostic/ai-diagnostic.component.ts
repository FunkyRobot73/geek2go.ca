import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DiagnosticStep {
  id: number;
  question: string;
  options: { label: string; value: string; icon: string }[];
}

@Component({
  selector: 'app-ai-diagnostic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ai-diagnostic.component.html',
  styleUrl: './ai-diagnostic.component.scss'
})
export class AiDiagnosticComponent {
  currentStep = 0;
  isScanning = false;
  results: any = null;

  steps: DiagnosticStep[] = [
    {
      id: 0,
      question: 'How old is your current computer?',
      options: [
        { label: '1–3 Years Old', value: 'modern', icon: 'fa-solid fa-bolt' },
        { label: '4–7 Years Old', value: 'mid', icon: 'fa-solid fa-laptop' },
        { label: '8+ Years Old', value: 'vintage', icon: 'fa-solid fa-clock-rotate-left' },
        { label: 'Blocked by Win 11', value: 'win10_refugee', icon: 'fa-brands fa-windows' }
      ]
    },
    {
      id: 1,
      question: 'How much memory (RAM) does it have?',
      options: [
        { label: '2 GB – 4 GB', value: 'low', icon: 'fa-solid fa-memory' },
        { label: '8 GB', value: 'standard', icon: 'fa-solid fa-microchip' },
        { label: '16 GB+', value: 'high', icon: 'fa-solid fa-rocket' },
        { label: 'Not Sure', value: 'unsure', icon: 'fa-solid fa-circle-question' }
      ]
    },
    {
      id: 2,
      question: 'What do you use your computer for most?',
      options: [
        { label: 'Web, Email & Office', value: 'office', icon: 'fa-solid fa-file-lines' },
        { label: 'Photos & Video', value: 'creative', icon: 'fa-solid fa-photo-film' },
        { label: 'Gaming & Everyday', value: 'gaming', icon: 'fa-solid fa-gamepad' },
        { label: 'Business / Home Cloud', value: 'business', icon: 'fa-solid fa-server' }
      ]
    }
  ];

  selections: { [key: number]: string } = {};

  selectOption(stepId: number, value: string) {
    this.selections[stepId] = value;
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.runDiagnostic();
    }
  }

  runDiagnostic() {
    this.isScanning = true;
    setTimeout(() => {
      this.calculateResults();
      this.isScanning = false;
    }, 1800);
  }

  calculateResults() {
    const age = this.selections[0];
    const ram = this.selections[1];
    const usage = this.selections[2];

    let score = 98;
    let status = '100% READY FOR LINUX MINT';
    let distro = 'Linux Mint Cinnamon Edition (Windows-like & super friendly)';

    if (ram === 'low' || age === 'vintage') {
      score = 95;
      status = 'GREAT MATCH — ULTRA-LIGHT LINUX';
      distro = 'Linux Mint XFCE Edition (Revives older PCs to run like new)';
    } else if (age === 'win10_refugee') {
      score = 100;
      status = 'DON\'T BUY A NEW PC — SWITCH TO LINUX!';
      distro = 'Linux Mint Cinnamon (No forced upgrades or telemetry)';
    }

    const apps: string[] = [distro];

    if (usage === 'office') {
      apps.push('LibreOffice Suite (Replaces Microsoft 365 — Saves $100/yr)');
      apps.push('Thunderbird Mail & Brave / Firefox (Fast, ad-free browsing)');
    } else if (usage === 'creative') {
      apps.push('GIMP & Inkscape (Replaces Photoshop & Illustrator — Saves $260/yr)');
      apps.push('Kdenlive Video Editor (Multi-track editing with zero watermarks)');
    } else if (usage === 'gaming') {
      apps.push('Steam with Proton + Heroic Launcher (Runs thousands of PC games)');
      apps.push('LibreOffice & VLC Media Player (Zero subscription bloatware)');
    } else {
      apps.push('Nextcloud Personal Server (Replaces Dropbox & Google Drive)');
      apps.push('LibreOffice & Bitwarden (Secure, license-free business stack)');
    }

    this.results = {
      score: score,
      status: status,
      models: apps,
      timestamp: new Date().toISOString().split('T')[0].toUpperCase(),
      node: 'OPEN_SOURCE_READY'
    };
  }

  reset() {
    this.currentStep = 0;
    this.selections = {};
    this.results = null;
  }
}
