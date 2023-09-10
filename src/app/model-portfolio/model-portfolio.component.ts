import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-portfolio',
  templateUrl: './model-portfolio.component.html',
  styleUrls: ['./model-portfolio.component.css']
})
export class ModelPortfolioComponent {
  @Input() modalId: string = "";
  @Input() imageSrc: string = "";

}
