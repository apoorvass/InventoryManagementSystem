import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-permission',
  imports: [CommonModule, NavComponent],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent {

  permissions = [
    {
      role: 'Admin',
      access: ['Products', 'Orders', 'Users', 'Reports'],
      canEdit: true,
      canDelete: true
    },
    {
      role: 'Staff',
      access: ['Products', 'Orders'],
      canEdit: true,
      canDelete: false
    },
    {
      role: 'Viewer',
      access: ['Reports'],
      canEdit: false,
      canDelete: false
    }
  ];

}
