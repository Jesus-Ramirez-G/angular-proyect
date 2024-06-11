import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../interfaces/productoInterface';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  @Output() productoAgregado = new EventEmitter<Producto>();

  public producto:Producto =
    {
      nombre: 'Mazapan',
      descripcion: '100 gr',
      precio: 8
    }

    agregarProducto(form: any):void {
      if(form.valid){
        this.productoAgregado.emit({nombre:form.value.nomProducto, descripcion:form.value.descProducto, precio:form.value.precProducto});
        form.reset();
      }
    }
}
