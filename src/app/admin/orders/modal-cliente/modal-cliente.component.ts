import { Component } from '@angular/core';
import { Cliente } from '../../clients/client.interfce';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from '../../clients/client.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent {
  clientes: Cliente[] = [];
  clienteSeleccionado!: Cliente;

  constructor(
    private _svcClient: ClientService,
    private activeModal: NgbActiveModal) { }

  ngOnInit(){
    this._svcClient.getClientes().subscribe( resp => {
      this.clientes = resp;
    });
  }

  seleccionarCliente(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    this.activeModal.close(this.clienteSeleccionado); 
  }
  
}
