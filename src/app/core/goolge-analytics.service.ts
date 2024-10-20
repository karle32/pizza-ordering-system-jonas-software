import { effect, Inject, inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from './platform.service';

// declare ga as a function to set and sent the events
declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class GoolgeAnalyticsService {
  private router = inject(Router);
  private platformService = inject(PlatformService);

  onBroswer = this.platformService.isBrowser;

  constructor() {
    this.init();
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string | null = null,
    eventValue: number | null = null
  ) {
    if (this.onBroswer()) {
      gtag('event', eventName, {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue,
      });
    }
  }

  private init() {
    effect(() => {
      if (this.onBroswer()) {
        this.addGAScript();
        this.listenForRouteChanges();
      }
    });
  }

  private addGAScript(): void {
    try {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src =
        'https://www.googletagmanager.com/gtag/js?id=' +
        environment.google.gtagId;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML =
        `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '` +
        environment.google.gtagId +
        `');`;
      document.head.appendChild(script2);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }

  private listenForRouteChanges(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.google.gtagId, {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
