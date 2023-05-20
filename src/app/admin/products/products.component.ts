import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductComponent } from './modal-product/modal-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  list: any[]=[];

  constructor(
    private _svcProduct: ProductService,
    private modalService: NgbModal
  ){}

  ngOnInit(){
    this._svcProduct.getProductos().subscribe(resp => {
      this.list = resp;
    });
  }

  openModal(){
    const modalRef = this.modalService.open(ModalProductComponent);
    modalRef.result.then((result) => {
      console.log('Modal cerrado con resultado:', result);
    }, (reason) => {
      console.log('Modal descartado:', reason);
    });
  }
}
