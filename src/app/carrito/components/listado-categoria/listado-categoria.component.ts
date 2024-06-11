import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../interfaces/categoriasInterface';

@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrl: './listado-categoria.component.css'
})
export class ListadoCategoriaComponent {
  @Input()
  public categorias:Categoria[] = [
    {
      nombre: 'Refrescos',
      descripcion: 'Todo tipo de refrescos'
    },
    {
      nombre: 'Botanas',
      descripcion: 'Sabritas, takis, cacahuates, etc.'
    },
    {
      nombre: 'Lacteos',
      descripcion: 'Leche, yogures, quesos, etc.'
    }
  ]
  @Output() categoriaEliminado = new EventEmitter<number>();

  eliminarCategoria(index: number) {
    this.categoriaEliminado.emit(index);
  }
}
