import { Injectable } from '@nestjs/common';
import { BuscadorInterpreter } from './patrones/interpreter/buscador.interpreter';
import { LibroIterator } from './patrones/iterator/libro.iterator';

@Injectable()
export class BibliotecaService {
  private libros = [
    { id: 1, titulo: 'Rayuela', autor: 'Cortázar' },
    { id: 2, titulo: 'Fundación', autor: 'Asimov' }
  ];

  buscar(query: string) {
    const it = new LibroIterator(this.libros);
    const interpreter = new BuscadorInterpreter();
    const resultados: any[] = [];

    while (it.hasNext()) {
      const libro = it.next();
      if (interpreter.interpret(libro, query)) {
        resultados.push(libro);
      }
    }
    return resultados;
  }
}