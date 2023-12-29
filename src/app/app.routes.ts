import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { RestaurantItemsComponent } from './Pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './Pages/create-order/create-order.component';
import { LayoutComponent } from './Pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '*',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'foodCategory',
        component: CategoriesComponent,
      },
      {
        path: 'restaurant-items/:categoryname',
        component: RestaurantItemsComponent,
      },
      //   {
      //     path: 'select-items/:restaurantId/:categoryId',
      //     component: SelectFoodComponent,
      //   },
      {
        path: 'create-order',
        component: CreateOrderComponent,
      },
    ],
  },
];
