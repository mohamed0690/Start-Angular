import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portofolio-item',
  templateUrl: './portofolio-item.component.html',
  styleUrls: ['./portofolio-item.component.css']
})
export class PortofolioItemComponent {
  @Input() modalId: string = "";
  @Input() imageSrc: string = "";
}
