import { Routes } from '@angular/router';
import { ItemsComponent } from './component/items/items.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CategoryComponent } from './component/category/category.component';
import { WarehouseComponent } from './component/warehouse/warehouse.component';
import { CompanyComponent } from './component/company/company.component';
import { MemberComponent } from './component/member/member.component';
import { PermissionComponent } from './component/permission/permission.component';
import { OrderComponent } from './component/order/order.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { AddCompanyComponent } from './component/add-company/add-company.component';
import { AddWarehouseComponent } from './component/add-warehouse/add-warehouse.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'nav',
        component: NavComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'items',
        component: ItemsComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'warehouse',
        component: WarehouseComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'member',
        component: MemberComponent
    }, 
    {
        path: 'permission',
        component: PermissionComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'add-item',
        component: AddItemComponent
    },
    {
        path: 'add-category',
        component: AddCategoryComponent
    },
    {
        path: 'add-company',
        component: AddCompanyComponent
    },
    {
        path: 'add-warehouse',
        component: AddWarehouseComponent
    }
];
