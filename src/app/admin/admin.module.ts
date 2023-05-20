import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TemplateComponent } from './template/template.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalClienteComponent } from './orders/modal-cliente/modal-cliente.component';
import { ReportsComponent } from './reports/reports.component';
import { ModalProductoComponent } from './orders/modal-producto/modal-producto.component';
import { ModalDetalleComponent } from './reports/modal-detalle/modal-detalle.component';
import { ModalProductComponent } from './products/modal-product/modal-product.component';


@NgModule({
  declarations: [
    TemplateComponent,
    ClientsComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    ModalClienteComponent,
    ReportsComponent,
    ModalProductoComponent,
    ModalDetalleComponent,
    ModalProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
