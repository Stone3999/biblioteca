export class BuscadorInterpreter {
  // Simula interpretar una consulta como "titulo:Rayuela"
  interpret(libro: any, query: string): boolean {
    if (!query) return true;
    const [criterio, valor] = query.split(':');
    return libro[criterio]?.toLowerCase().includes(valor.toLowerCase());
  }
}