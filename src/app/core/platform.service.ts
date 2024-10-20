import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  isBrowser = signal<boolean>(false);

  constructor() {
    this.isBrowser.set(this.checkIfBrowser());
  }

  checkIfBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }
}
