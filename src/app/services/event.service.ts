import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //API  lista todos os Events disponíveis
  url = 'https://av7az22le1.execute-api.us-east-2.amazonaws.com/events';

 // injetando o HttpClient
 constructor(private httpClient: HttpClient) { }

 // Headers
 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 }

 // Obtem todos os Events
 getEvents(): Observable<Event[]> {
  return this.httpClient.get<Event[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
}

  // Obtem um Event pelo id
  getEventById(id:string): Observable<Event> {
    return this.httpClient.get<Event>(this.url + '/' + id)
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