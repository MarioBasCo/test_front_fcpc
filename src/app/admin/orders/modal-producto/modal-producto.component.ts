import { Component } from '@angular/core';
import { Product } from '../../products/product.interface';
import { ProductService } from '../../products/product.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent {
  productos: Product[] = [];
  productoSeleccionado!: Product;

  constructor(
    private _svcProduct: ProductService,
    private modalService: NgbActiveModal
  ){

  }

  ngOnInit(){
    this._svcProduct.getProductos().subscribe(resp=> {
      this.productos = resp;
    });
  }

  seleccionarProducto(producto: Product) {
    this.productoSeleccionado = producto;
    this.modalService.close(this.productoSeleccionado); 
  }
  
}
