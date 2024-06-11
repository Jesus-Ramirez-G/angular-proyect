import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedoresInterface';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrl: './listado-proveedores.component.css'
})
export class ListadoProveedoresComponent {
  @Input()
  public proveedores:Proveedor[] = [
    {
      nombre: 'Coca Cola',
      tipo: 'Proveedor de productos',
      telefono: '3452349085',
      correo: 'cocacola@gmail.com'
    },
    {
      nombre: 'Bimbo',
      tipo: 'Proveedor de productos',
      telefono: '3512761190',
      correo: 'bimbo@gmail.com'
    },
    {
      nombre: 'Tec Bon',
      tipo: 'Proveedor de servicio',
      telefono: '1819374922',
      correo: 'tecbon@gmail.com'
    }
  ]
  @Output() proveedorEliminado = new EventEmitter<number>();

  eliminarProveedor(index: number) {
    this.proveedorEliminado.emit(index);
  }
}
