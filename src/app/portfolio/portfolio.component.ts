import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'Description of Project One.',
      image: 'https://picsum.photos/350?random=1',
    },
    {
      title: 'Project Two',
      description: 'Description of Project Two.',
      image: 'https://picsum.photos/350?random=2',
    },
    {
      title: 'Project Three',
      description: 'Description of Project Three.',
      image: 'https://picsum.photos/350?random=3',
    },
    // Add more projects as needed
  ];
}
