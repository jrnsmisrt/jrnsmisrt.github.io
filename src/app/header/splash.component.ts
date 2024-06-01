import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'js-splash'
,  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent {

}
