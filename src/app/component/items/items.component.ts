import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {

  items = [
    { name: 'Item A', stock: 120, price: 250, category: 'Electronics', location: 'Warehouse A' },
    { name: 'Item B', stock: 80, price: 150, category: 'Stationery', location: 'Warehouse B' },
    { name: 'Item C', stock: 200, price: 320, category: 'Furniture', location: 'Warehouse C' },
    // Add more mock data here
  ];

}
