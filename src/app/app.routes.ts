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
    path: 'pizza-builder',
    title: 'Build Your Order',
    data: {
      metaTags: [
        {
          name: 'description',
          content:
            'This page allows you to build your own pizza, adding topping for the ultimate pizza',
        },
        { property: 'og:title', content: 'Build Your Pizza' },
        {
          property: 'og:description',
          content:
            'This page allows you to build your own pizza, adding topping for the ultimate pizza',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Build Your Pizza' },
        {
          name: 'twitter:description',
          content:
            'This page allows you to build your own pizza, adding topping for the ultimate pizza',
        },
        { name: 'twitter:image', content: 'https://example.com/image.jpg' },
      ],
      jsonLdSchema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Build Your Pizza',
        logo: 'https://example.com/logo.jpg',
      },
      canonicalUrl: true,
    },
    loadComponent: () =>
      import('./pizza-builder/pizza-builder.component').then(
        (pb) => pb.PizzaBuilderComponent
      ),
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
