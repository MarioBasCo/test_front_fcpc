import { Component } from '@angular/core';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../clients/client.interfce';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';
import { Product } from '../products/product.interface';
import { FacturasService } from './facturas.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  form: FormGroup;

  constructor(
    private _svcFactura: FacturasService,
    private modalService: NgbModal, private formBuilder: FormBuilder) {
    const now = new Date().toLocaleDateString('en-GB');
    console.log(now);
    this.form = this.formBuilder.group({
      cliente_id: ['', Validators.required],
      cliente: ['', Validators.required], 
      fecha: [now, Validators.required], 
      detalles: this.formBuilder.array([]) 
    });
  }

  abrirModalBuscarCliente() {
    const modalRef = this.modalService.open(ModalClienteComponent); 

    modalRef.result.then((cliente: Cliente) => {
      if (cliente) {
        console.log(cliente)
        this.form.get('cliente_id')?.setValue(cliente.id);
        this.form.get('cliente')?.setValue(cliente.nombre);
      }
    });
  }

  abrirModalBuscarProducto() {
    const modalRef = this.modalService.open(ModalProductoComponent); 

    modalRef.result.then((producto: Product) => {
      if (producto) {
        this.agregarProducto(producto);
      }
    });
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
  }

  agregarProducto(producto: Product) {
    const detalles = this.form.get('detalles') as FormArray;

    const detalleFormGroup = this.formBuilder.group({
      producto: [producto],
      producto_id: [producto.id],
      precio: [producto.precio],
      cantidad: [null, Validators.required],
      unidad_medida: [null, Validators.required]
    });

    detalles.push(detalleFormGroup);
  }



  save() {
    const detalles = this.form.get('detalles') as FormArray;
    if (detalles.length != 0) {
      const { cliente, fecha, ...data } = this.form.value;
      const info = {
        ...data,
        fecha: new Date().toISOString().slice(0, 10).replace('T', ' '),
        establecimiento: '001',
        punto_emision: '001',
        numero_factura: '002'
      }

      this._svcFactura.createFactura(info).subscribe(resp => {
        if(resp){
          alert('Orden creada con éxito');
          this.form.reset();
        }
      });
    }
  }
}
