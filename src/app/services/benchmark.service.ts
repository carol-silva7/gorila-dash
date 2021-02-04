import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Benchmark} from '../models/benchmark';

@Injectable({
  providedIn: 'root'
})
export class BenchmarkService {
  //API  lista todos os benchmarks disponíveis

  url = 'https://av7az22le1.execute-api.us-east-2.amazonaws.com/benchmarks';

 // injetando o HttpClient
 constructor(private http: HttpClient) { }

 // Headers
 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*', 'Strict-origin-when-cross-origin': '*'})
 }

 // Obtem todos os Benchmarks
 getBenchmarks(): Observable<Benchmark[]> {
  return this.http.get<Benchmark[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
}

  // Obtem um Benchmark pelo id
  getBenchmarkById(id:string): Observable<Benchmark> {
    return this.http.get<Benchmark>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = 'Código do erro: ${error.status}, ' + 'menssagem: ${error.message}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}