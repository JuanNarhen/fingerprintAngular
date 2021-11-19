import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class MyUUIDService {

  constructor() { }

  generateUUID(size:number):string{
    return UUID.UUID().replace("-","").substring(0, size);
  }
}
