import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Portfolio');
  }
  portfolioItems = [
    { modalId: 'portfolioModal1', imageSrc: 'assets/images/port1.png' },
    { modalId: 'portfolioModal2', imageSrc: 'assets/images/port2.png' },
    { modalId: 'portfolioModal3', imageSrc: 'assets/images/port3.png' }
  ];

  portfolioModel = [
    { modalId: '#portfolioModal1', imageSrc: 'assets/images/port1.png' },
    { modalId: '#portfolioModal2', imageSrc: 'assets/images/port2.png' },
    { modalId: '#portfolioModal3', imageSrc: 'assets/images/port3.png' },
    { modalId: '#portfolioModal1', imageSrc: 'assets/images/port1.png' },
    { modalId: '#portfolioModal2', imageSrc: 'assets/images/port2.png' },
    { modalId: '#portfolioModal3', imageSrc: 'assets/images/port3.png' }
  ];

}
