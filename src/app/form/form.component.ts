import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  visible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const formElement = document.querySelector('.form-container');
    if (formElement) {
      const rect = formElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;

      if (topShown && bottomShown) {
        this.visible = true;
      }
    }
  }
}
