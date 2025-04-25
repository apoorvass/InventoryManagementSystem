import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent {

  company = {
    brandName: '',
    itemCount: 0
  };

  onSubmit() {
    console.log('Company added:', this.company);
    alert('Company added successfully!');
  }

}
