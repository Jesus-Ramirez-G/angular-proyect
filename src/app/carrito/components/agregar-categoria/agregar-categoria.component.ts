import { Component, EventEmitter, Output } from '@angular/core';
import { Categoria } from '../../interfaces/categoriasInterface';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css'
})
export class AgregarCategoriaComponent {
  @Output() categoriaAgregado = new EventEmitter<Categoria>();

  public categoria:Categoria =
    {
      nombre: '',
      descripcion: ''
    }

    agregarCategoria(form: any):void {
      if(form.valid){
        this.categoriaAgregado.emit({nombre:form.value.nomCategoria, descripcion:form.value.descCategoria});
        form.reset();
      }
    }
}
