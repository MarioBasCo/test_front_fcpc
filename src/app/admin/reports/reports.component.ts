import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';
import { FacturasService } from '../orders/facturas.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  registros: any[] = [];

  constructor(
    private _svcFactura: FacturasService,
    private modalService: NgbModal) { }

  ngOnInit(){
    this._svcFactura.listar().subscribe(resp => {
      this.registros = resp;
    });
  }

  abrirModalDetalle(registro: any) {
    const modalRef = this.modalService.open(ModalDetalleComponent);
    modalRef.componentInstance.factura = registro;
  }
}
