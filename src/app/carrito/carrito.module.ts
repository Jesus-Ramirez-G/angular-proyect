import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgregarCategoriaComponent } from './components/agregar-categoria/agregar-categoria.component';
import { ListadoCategoriaComponent } from './components/listado-categoria/listado-categoria.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { ListadoProveedoresComponent } from './components/listado-proveedores/listado-proveedores.component';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarProductoComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AgregarCategoriaComponent,
    ListadoCategoriaComponent,
    AgregarProveedorComponent,
    ListadoProveedoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class CarritoModule { }
