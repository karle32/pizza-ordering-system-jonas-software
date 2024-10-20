import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const MODULES = [CommonModule, RouterModule];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
