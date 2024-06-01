import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WhoAmIComponent} from "./who-am-i/who-am-i.component";
import {CurriculumComponent} from "./curriculum/curriculum.component";
import {ContactComponent} from "./contact/contact.component";
import {MatIcon} from "@angular/material/icon";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoAmIComponent, CurriculumComponent, ContactComponent, MatIcon, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JeroenSmissaert';
}
