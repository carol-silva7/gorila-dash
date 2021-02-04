
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Asset} from '../models/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  //API lista todos os ativos disponíveis

  private url = 'https://av7az22le1.execute-api.us-east-2.amazonaws.com`/securities';

 // injetando o HttpClient
 constructor(private httpClient: HttpClient) { }

 // Headers
 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
 }

 // Obtem todos os Assets
 getAssets(): Observable<Asset[]> {
  return this.httpClient.get<Asset[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
}

  // Obtem um Asset pelo id
  getAssetById(id:string): Observable<Asset> {
    return this.httpClient.get<Asset>(this.url + '/' + id)
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