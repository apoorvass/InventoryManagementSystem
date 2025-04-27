import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-warehouse',
  standalone: true, 
  imports: [CommonModule, NavComponent],
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  warehouses = [
    {
      location: 'New York, USA',
      capacity: 15000,
      manager: 'John Doe',
      phone: '+1 555 123 4567'
    },
    {
      location: 'Chennai, India',
      capacity: 10000,
      manager: 'Priya Kumar',
      phone: '+91 98765 43210'
    },
    {
      location: 'Berlin, Germany',
      capacity: 12000,
      manager: 'Hans Müller',
      phone: '+49 176 12345678'
    },
    {
      location: 'Tokyo, Japan',
      capacity: 8000,
      manager: 'Yuki Sato',
      phone: '+81 90 1234 5678'
    }
  ];
}
