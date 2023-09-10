import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Check the scroll position and change styles accordingly
    if (window.scrollY > 100) { // Adjust the scroll position as needed
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}







