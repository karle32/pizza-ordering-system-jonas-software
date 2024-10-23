import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const MODULES = [CommonModule, RouterLink];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'pizza-ordering-system';
}
