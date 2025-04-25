import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  item = {
    name: '',
    stock: 0,
    price: 0,
    category: '',
    location: ''
  };

  categories = ['Electronics', 'Furniture', 'Groceries', 'Clothing'];
  locations = ['New York', 'Chennai', 'Berlin', 'Tokyo'];

  onSubmit() {
    console.log('Item Submitted:', this.item);
    alert('Item added successfully!');
    
  }

}
