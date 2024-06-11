import { Component, EventEmitter, Output } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedoresInterface';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {
  @Output() proveedorAgregado = new EventEmitter<Proveedor>();

  public proveedor:Proveedor =
    {
      nombre: '',
      tipo: '',
      telefono: '',
      correo: ''
    }

    agregarProveedor(form: any):void {
      if(form.valid){
        this.proveedorAgregado.emit({nombre:form.value.nomProv, tipo:form.value.tipoProv, telefono:form.value.telProv, correo:form.value.emailProv});
        form.reset();
      }
    }
}
