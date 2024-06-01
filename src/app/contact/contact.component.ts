import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'js-contact',
  standalone: true,
  imports: [
    MatIcon,
    MatFormField,
    MatHint,
    MatLabel,
    MatInput
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
