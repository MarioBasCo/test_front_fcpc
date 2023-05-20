import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from './client.service';
import { Cliente } from './client.interfce';
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  listClientes: Cliente[] = [];
  cliform!: FormGroup;

  constructor(
    private _svcClient: ClientService,
    private fb: FormBuilder){
    this.cliform = this.fb.group({
      identificacion: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {
    this._svcClient.getClientes().subscribe(resp=> {
      this.listClientes = resp;
    });
  }

  closePopup() {
    this.closeModal();
    this.cliform.reset();
  }

  functionedit(item: any){
    
  }

  functiondelete(item: any){
    
  }

  save(){
    this._svcClient.nuevoCliente(this.cliform.value).subscribe(resp => {
      if(resp){
        alert('Cliente creado con éxito');
        this.closePopup();
      } else {
        alert('No se pudo crear el cliente')
      }
    });
  }

  openModal() {
    $('#myModal').modal('show');
  }
  
  closeModal() {
    $('#myModal').modal('hide');
  }
  
}
