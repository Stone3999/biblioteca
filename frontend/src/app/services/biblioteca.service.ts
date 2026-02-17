import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private url = 'http://localhost:3000/biblioteca'; // La IP de tu backend

  constructor(private http: HttpClient) {}

  buscarLibros(query: string): Observable<any> {
    return this.http.get(`${this.url}?search=${query}`);
  }
}