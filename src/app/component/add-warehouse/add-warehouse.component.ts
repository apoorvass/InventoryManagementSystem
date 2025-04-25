import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-warehouse',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-warehouse.component.html',
  styleUrl: './add-warehouse.component.scss'
})
export class AddWarehouseComponent {

  warehouse = {
    location: '',
    capacity: 0,
    manager: '',
    phone: ''
  };

  onSubmit() {
    console.log('Warehouse added:', this.warehouse);
    alert('Warehouse added successfully!');
  }

}
