import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,NavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

