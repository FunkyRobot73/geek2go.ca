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
      question: 'System Memory (RAM) Allocation',
      options: [
        { label: '< 8 GB', value: 'insufficient', icon: 'fa-solid fa-microchip' },
        { label: '16 GB', value: 'minimal', icon: 'fa-solid fa-microchip' },
        { label: '32 GB', value: 'optimal', icon: 'fa-solid fa-microchip' },
        { label: '64 GB+', value: 'elite', icon: 'fa-solid fa-microchip' }
      ]
    },
    {
      id: 1,
      question: 'Neural Processing Unit (GPU)',
      options: [
        { label: 'Integrated / Basic', value: 'cpu_only', icon: 'fa-solid fa-desktop' },
        { label: 'NVIDIA (Under 8GB VRAM)', value: 'gpu_basic', icon: 'fa-solid fa-bolt' },
        { label: 'NVIDIA (8GB+ VRAM)', value: 'gpu_advanced', icon: 'fa-solid fa-server' },
        { label: 'Mac M-Series', value: 'mac_unified', icon: 'fa-brands fa-apple' }
      ]
    },
    {
      id: 2,
      question: 'Primary Storage Protocol',
      options: [
        { label: 'Hard Drive (HDD)', value: 'hdd', icon: 'fa-solid fa-hard-drive' },
        { label: 'Solid State (SSD)', value: 'ssd', icon: 'fa-solid fa-bolt-lightning' },
        { label: 'NVMe Gen 4/5', value: 'nvme', icon: 'fa-solid fa-gauge-high' }
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
    }, 2500);
  }

  calculateResults() {
    const ram = this.selections[0];
    const gpu = this.selections[1];
    const storage = this.selections[2];

    let readiness = 0;
    let recommendation = '';
    let models = [];

    // Simple scoring
    if (ram === 'elite') readiness += 40;
    else if (ram === 'optimal') readiness += 30;
    else if (ram === 'minimal') readiness += 15;

    if (gpu === 'gpu_advanced' || gpu === 'mac_unified') readiness += 50;
    else if (gpu === 'gpu_basic') readiness += 30;

    if (storage === 'nvme' || storage === 'ssd') readiness += 10;

    if (readiness >= 80) {
      recommendation = 'OPTIMAL DEPLOYMENT ZONE';
      models = ['Llama 3 8B (Lightning Fast)', 'Mistral 7B', 'Llama 3 70B (Functional)'];
    } else if (readiness >= 50) {
      recommendation = 'FUNCTIONAL DEPLOYMENT ZONE';
      models = ['Llama 3 8B (Stable)', 'Phi-3 Mini', 'Gemma 2B'];
    } else {
      recommendation = 'HARDWARE UPGRADE RECOMMENDED';
      models = ['Small Language Models (SLMs) only', 'Cloud-assisted AI recommended'];
    }

    this.results = {
      score: readiness,
      status: recommendation,
      models: models,
      timestamp: new Date().toISOString().split('T')[0].toUpperCase(),
      node: 'MARKETPLACE_ALPHA'
    };
  }

  reset() {
    this.currentStep = 0;
    this.selections = {};
    this.results = null;
  }
}
