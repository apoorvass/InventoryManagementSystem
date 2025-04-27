import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { ItemsComponent } from "./component/items/items.component";
import { CategoryComponent } from './component/category/category.component';
import { CompanyComponent } from './component/company/company.component';
import { WarehouseComponent } from './component/warehouse/warehouse.component';
import { OrderComponent } from "./component/order/order.component";
import { MemberComponent } from "./component/member/member.component";
import { AddItemComponent } from "./component/add-item/add-item.component";
import { AddCategoryComponent } from "./component/add-category/add-category.component";
import { AddCompanyComponent } from "./component/add-company/add-company.component";
import { AddWarehouseComponent } from "./component/add-warehouse/add-warehouse.component";
import { LoginComponent } from "./component/login/login.component";
import { SignupComponent } from "./component/signup/signup.component";
import { PermissionComponent } from "./component/permission/permission.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent ],
  template: `
    <div class="main-body">        
        <!-- <app-nav></app-nav> -->
        <router-outlet></router-outlet>
      
    </div>
  `,
  styles: [`
    .main-body {
      display: flex;
      height: 100vh;
    }

    // app-nav {
    //   width: 220px;
    //   flex-shrink: 0;
    //   background-color: #2c3e50;
    //   height: 100%;
    // }

    // .content-area {
    //   flex: 1;
    //   padding: 20px;
    //   background-color: #f4f6f9;
    //   overflow-y: auto;
    // }
  `]
})
export class AppComponent {
  title = 'InventoryManagement';
}
