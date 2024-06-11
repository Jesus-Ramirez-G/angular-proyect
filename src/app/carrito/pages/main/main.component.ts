import { Component } from '@angular/core';
import { Producto } from '../../interfaces/productoInterface';
import { Categoria } from '../../interfaces/categoriasInterface';
import { Proveedor } from '../../interfaces/proveedoresInterface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
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
    },
    {
      nombre: 'Gansito',
      descripcion: '600 gr',
      precio: 10
    },
    {
      nombre: 'Sabritas',
      descripcion: '800 gr',
      precio: 14
    }
  ];

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
    },
    {
      nombre: 'Limpieza',
      descripcion: 'Detergentes, jabones, esponjas, etc.',
    },
    {
      nombre: 'Bimbo',
      descripcion: 'Donas, pan de sandwich, ingredientes para cocinar, etc.',
    }
  ];

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
    },
    {
      nombre: 'Lala',
      tipo: 'Proveedor de productos',
      telefono: '3528873792',
      correo: 'lala@gmail.com'
    },
    {
      nombre: 'MegaCable',
      tipo: 'Proveedor de servicio',
      telefono: '8173827991',
      correo: 'megacable@gmail.com'
    }
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  };

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  };

  agregarCategoria(categoria: Categoria) {
    this.categorias.push(categoria);
  };

  eliminarCategoria(index: number) {
    this.categorias.splice(index, 1);
  };

  agregarProveedor(proveedor: Proveedor) {
    this.proveedores.push(proveedor);
  };

  eliminarProveedor(index: number) {
    this.proveedores.splice(index, 1);
  };
}
