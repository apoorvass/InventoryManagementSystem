import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  orders = [
    {
      orderId: '#ORD1023',
      customer: 'Rahul Sharma',
      product: 'iPhone 14',
      quantity: 2,
      total: 159998,
      status: 'Delivered',
      date: '2025-04-17'
    },
    {
      orderId: '#ORD1024',
      customer: 'Meena Gupta',
      product: 'Office Chair',
      quantity: 1,
      total: 8500,
      status: 'Shipped',
      date: '2025-04-16'
    },
    {
      orderId: '#ORD1025',
      customer: 'Aditya Verma',
      product: 'Notebook',
      quantity: 10,
      total: 500,
      status: 'Processing',
      date: '2025-04-15'
    }
  ];

}
