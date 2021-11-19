import { Injectable } from '@angular/core';
//Para las cabeceras de las requests
import { HttpHeaders } from '@angular/common/http';
//Para la comunicacion con la API
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { of } from 'core-js/es/array';
import { NewAssistantRequest } from '../models/newAssistantRequest';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  private env: any = environment;

  constructor(private client:HttpClient) { }

  private httpHeadersREST(): HttpHeaders{
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set('Content-Type', 'application/json; charset=utf-8');
    return myHeaders;
  }

  public saveAssistant(assistant: NewAssistantRequest):Observable<any>{
    return this.client.post(`${this.env.saveAssistant}`, assistant, {headers:this.httpHeadersREST()})
    .pipe(map((response: any) => {
      return response;
    }), pipe(
      catchError(() => of([]))
    ));
  }
}
