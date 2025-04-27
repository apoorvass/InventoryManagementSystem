import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-category',
  imports: [CommonModule, NavComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categories = [
    { name: 'Electronics', itemCount: 25 },
    { name: 'Furniture', itemCount: 10 },
    { name: 'Stationery', itemCount: 40 },
    { name: 'Groceries', itemCount: 15 },
    { name: 'Books', itemCount: 30 }
  ];

}
