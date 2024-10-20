import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'about-us',
    title: 'About Us Page Title',
    data: {
      metaTags: [
        { name: 'description', content: 'About Us Page Description' },
        { property: 'og:title', content: 'About Us Page Title' },
        { property: 'og:description', content: 'About Us Page Description' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'About Us Page Title' },
        { name: 'twitter:description', content: 'About Us Page Description' },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'About Us Page Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    loadComponent: () =>
      import('./about-us/about-us.component').then((a) => a.AboutUsComponent),
  },
  {
    path: 'contact',
    data: {
      metaTags: [
        { name: 'description', content: 'Contact Us Page Description' },
        { property: 'og:title', content: 'Contact Us Page Title' },
        { property: 'og:description', content: 'Contact Us Page Description' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Contact Us Page Title' },
        { name: 'twitter:description', content: 'Contact Us Page Description' },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Contact Us Page Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    title: 'Contact Us Page Title',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
  },
  {
    path: 'blog',
    title: 'Blog Page Title',
    data: {
      metaTags: [
        { name: 'description', content: 'Blog Page Description' },
        { property: 'og:title', content: 'Blog Page Title' },
        { property: 'og:description', content: 'Blog Page Description' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Blog Page Title' },
        { name: 'twitter:description', content: 'Blog Page Description' },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Blog Page Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    loadComponent: () =>
      import('./blog/blog.component').then((b) => b.BlogComponent),
  },
  {
    path: 'portfolio',
    title: 'Portfolio Page Title',
    data: {
      metaTags: [
        { name: 'description', content: 'Portfolio Page Description' },
        { property: 'og:title', content: 'Portfolio Page Title' },
        { property: 'og:description', content: 'Portfolio Page Description' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: 'https://example.com/portfolio-image.jpg',
        },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Portfolio Page Title' },
        { name: 'twitter:description', content: 'Portfolio Page Description' },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Portfolio Page Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (p) => p.PortfolioComponent
      ),
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy Page Title',
    data: {
      metaTags: [
        { name: 'description', content: 'Privacy Policy Page Description' },
        { property: 'og:title', content: 'Privacy Policy Page Title' },
        {
          property: 'og:description',
          content: 'Privacy Policy Page Description',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Privacy Policy Page Title' },
        {
          name: 'twitter:description',
          content: 'Privacy Policy Page Description',
        },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Privacy Policy Page Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(
        (p) => p.PrivacyComponent
      ),
  },
  {
    path: 'terms',
    title: 'Terms of Use',
    data: {
      metaTags: [
        { name: 'description', content: 'Terms of Use Description' },
        { property: 'og:title', content: 'Terms of Use Title' },
        { property: 'og:description', content: 'Terms of Use Description' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Terms of Use Title' },
        { name: 'twitter:description', content: 'Terms of Use Description' },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Terms of Use Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    loadComponent: () =>
      import('./pages/terms-of-use/terms-of-use.component').then(
        (p) => p.TermsOfUseComponent
      ),
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page Title',
    data: {
      metaTags: [
        { name: 'description', content: 'Home Page Description' },
        { property: 'og:title', content: 'Home Page Title' },
        { property: 'og:description', content: 'Home Page Description' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Home Page Title' },
        { name: 'twitter:description', content: 'Home Page Description' },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Home Page Title',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    pathMatch: 'full',
  },
  // otherwise redirect to 404 page
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (n) => n.NotFoundComponent
      ),
  },
];
