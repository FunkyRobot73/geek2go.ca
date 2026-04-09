import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {

  private readonly siteName = 'Geek2Go.ca';
  private readonly siteUrl  = 'https://www.geek2go.ca';
  private readonly ogImage  = 'https://www.geek2go.ca/assets/logo.png';

  constructor(private title: Title, private meta: Meta) {}

  setPage(config: {
    title: string;
    description: string;
    path?: string;
  }) {
    const fullTitle = `${config.title} | ${this.siteName}`;
    const url = `${this.siteUrl}${config.path ?? ''}`;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description',         content: config.description });
    this.meta.updateTag({ property: 'og:title',        content: fullTitle });
    this.meta.updateTag({ property: 'og:description',  content: config.description });
    this.meta.updateTag({ property: 'og:url',          content: url });
    this.meta.updateTag({ property: 'og:image',        content: this.ogImage });
    this.meta.updateTag({ property: 'og:type',         content: 'website' });
    this.meta.updateTag({ property: 'og:site_name',    content: this.siteName });
    this.meta.updateTag({ name: 'twitter:card',        content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title',       content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image',       content: this.ogImage });
    this.meta.updateTag({ name: 'twitter:site',        content: '@funkyrobot73' });
  }
}
