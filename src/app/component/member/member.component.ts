import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-member',
  imports: [CommonModule, NavComponent],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

  members = [
    {
      name: 'Arpita Roy',
      role: 'Admin',
      email: 'arpita@example.com',
      phone: '+91 9876543210',
      joined: '2024-03-12'
    },
    {
      name: 'Ravi Kumar',
      role: 'Staff',
      email: 'ravi.k@example.com',
      phone: '+91 9012345678',
      joined: '2024-05-20'
    },
    {
      name: 'Sneha Mehta',
      role: 'Inventory Manager',
      email: 'sneha.m@example.com',
      phone: '+91 9988776655',
      joined: '2023-11-04'
    }
  ];

}
