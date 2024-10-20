import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  meta = inject(Meta);
  title = inject(Title);
  dom = inject(DOCUMENT);

  updateMetaTags(tags: { name: string; content: string }[]): void {
    tags.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  setJsonLd(schema: any): void {
    let script = this.dom.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    const existingJsonLd = this.dom.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingJsonLd) {
      existingJsonLd.remove();
    }
    this.dom.head.appendChild(script);
  }

  updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement =
      this.dom.querySelector('link[rel="canonical"]') ||
      this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    if (!link.parentElement) {
      this.dom.head.appendChild(link);
    }
  }
}
