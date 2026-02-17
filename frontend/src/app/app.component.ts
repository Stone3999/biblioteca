import { CommonModule } from '@angular/common'; // Por si acaso
import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from './services/biblioteca.service'; //

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Esto arregla el error NG8103
  template: `
    <h1>Lista de Libros (UTEQ Project)</h1>
    <ul>
      @for (libro of libros; track libro.id) {
        <li>{{ libro.titulo }} - {{ libro.autor }}</li>
      } @empty {
        <li>No se encontraron libros.</li>
      }
    </ul>
  `
})
export class AppComponent implements OnInit {
  libros: any[] = []; //

  constructor(private biblioService: BibliotecaService) {}

  ngOnInit() {
    // Llamada al backend de NestJS
    this.biblioService.buscarLibros('autor:Asimov').subscribe({
      next: (res) => {
        this.libros = res;
        console.log('Datos recibidos del backend:', res);
      },
      error: (err) => console.error('Error al conectar con Nest:', err)
    });
  }
}