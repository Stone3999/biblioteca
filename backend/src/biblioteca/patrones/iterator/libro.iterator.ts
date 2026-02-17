export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class LibroIterator implements Iterator<any> {
  private position: number = 0;
  constructor(private libros: any[]) {}

  next() {
    return this.libros[this.position++];
  }

  hasNext(): boolean {
    return this.position < this.libros.length;
  }
}