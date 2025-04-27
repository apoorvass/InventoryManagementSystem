import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
