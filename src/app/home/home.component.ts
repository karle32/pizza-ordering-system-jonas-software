import { Component } from '@angular/core';

const MODULES = [];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'pizza-ordering-system';
}
