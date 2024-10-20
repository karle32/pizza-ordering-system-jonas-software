import { Component, Inject, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SeoService } from './core/seo.service';
import { filter } from 'rxjs';
import { GoolgeAnalyticsService } from '@core/goolge-analytics.service';
import { WINDOW } from '@core/window-injection-token';

const MODULES = [RouterOutlet, HomeComponent, FooterComponent, HeaderComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);
  seoService = inject(SeoService);
  googleAnalyticService = inject(GoolgeAnalyticsService);
  private window = inject(WINDOW);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;
        const routeData =
          this.router.routerState.snapshot.root.firstChild?.data;
        if (routeData) {
          const { title, metaTags, jsonLdSchema, canonicalUrl } = routeData;

          if (title) {
            this.seoService.setTitle(title);
          }

          if (metaTags) {
            this.seoService.updateMetaTags(metaTags);
          }

          if (jsonLdSchema) {
            const schema = {
              ...jsonLdSchema,
              url: this.window.location.href,
            };
            this.seoService.setJsonLd(schema);
          }

          if (canonicalUrl) {
            this.seoService.updateCanonicalUrl(
              this.window.location.origin + currentUrl
            );
          }
        }
      });
  }
}
