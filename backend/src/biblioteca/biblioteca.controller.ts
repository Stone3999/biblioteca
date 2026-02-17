import { Controller, Get, Query } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';

@Controller('biblioteca')
export class BibliotecaController {
  constructor(private readonly bibliotecaService: BibliotecaService) {}

  @Get()
  buscar(@Query('search') search: string) {
    // Aquí se dispara tu Iterator e Interpreter
    return this.bibliotecaService.buscar(search);
  }
}