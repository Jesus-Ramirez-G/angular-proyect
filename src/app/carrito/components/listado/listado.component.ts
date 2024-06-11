import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../interfaces/productoInterface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @Input()
  public productos:Producto[] = [
    {
      nombre: 'Coca Cola',
      descripcion: '600 ml',
      precio: 15
    },
    {
      nombre: 'Galletas',
      descripcion: '1000 gr',
      precio: 20
    },
    {
      nombre: 'Yogurt',
      descripcion: '500 gr',
      precio: 12
    }
  ]
  @Output() productoEliminado = new EventEmitter<number>();

  eliminarProducto(index: number) {
    this.productoEliminado.emit(index);
  }
}
