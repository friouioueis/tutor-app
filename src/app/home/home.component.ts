import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const overlayContent = this.el.nativeElement.querySelector('.overlay-content');
    this.renderer.addClass(overlayContent, 'hidden');
    const buttons = this.el.nativeElement.querySelector('.buttons');
    this.renderer.addClass(buttons, 'visible');
  }

  @HostListener('mouseleave') onMouseLeave() {
    const overlayContent = this.el.nativeElement.querySelector('.overlay-content');
    this.renderer.removeClass(overlayContent, 'hidden');
    const buttons = this.el.nativeElement.querySelector('.buttons');
    this.renderer.removeClass(buttons, 'visible');
  }
}
