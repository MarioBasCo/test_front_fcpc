import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.css']
})
export class ModalDetalleComponent {
  @Input() factura: any;

  constructor(private activeModal: NgbActiveModal){

  }


  cerrarModal(){
    this.activeModal.close();
  }
}
