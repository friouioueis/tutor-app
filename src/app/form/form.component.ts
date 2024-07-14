import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  submitForm() {
    console.log('Form Data:', this.formData);
    // Add form submission logic here (e.g., send data to backend, etc.)
  }
}
