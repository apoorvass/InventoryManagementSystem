import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-company',
  imports: [CommonModule, NavComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

  companies = [
    { brand: 'Samsung', itemCount: 18 },
    { brand: 'Apple', itemCount: 12 },
    { brand: 'LG', itemCount: 10 },
    { brand: 'Sony', itemCount: 9 },
    { brand: 'Dell', itemCount: 15 },
    { brand: 'Lenovo', itemCount: 20 }
  ];

}
