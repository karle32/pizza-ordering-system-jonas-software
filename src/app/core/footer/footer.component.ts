import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const MODULES = [CommonModule, RouterModule];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
