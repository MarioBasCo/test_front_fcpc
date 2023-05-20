import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, 
    private _svcProduct: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, Validators.required],
      categoria: ['', Validators.required]
    });
  }

  closeModal() {
    this.activeModal.dismiss('Modal cerrado');
  }

  saveProduct() {
    if (this.productForm.valid) {
      const data = this.productForm.value;
      console.log(data);
      this._svcProduct.crearProducto(data).subscribe(resp => {
        if(resp){
          alert('Producto creado con éxito');
          this.productForm.reset();
        }
      });
      this.activeModal.close('Producto guardado');
    }
  }
}
