import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'js-contact',
  standalone: true,
  imports: [
    MatIcon,
    MatFormField,
    MatHint,
    MatLabel,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormBuilder().group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor(private formBuilder: FormBuilder){
  }

  submit(){

  }

  get firstName(): string {
    return this.contactForm.get('firstName')?.value!;
  }
  get lastName(): string {
    return this.contactForm.get('lastName')?.value!;
  }
  get message(): string {
    return this.contactForm.get('message')?.value!;
  }

}
