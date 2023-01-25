import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // PASO 1 - Crear servicio
  // loadingSubject = new ReplaySubject(1);
  private loadingSubject = new Subject<boolean>();

  constructor() { }

  // Enviar valor al subject para luego recogerlo los que esten subscritos
  next(newValue: any) {
    this.loadingSubject.next(newValue)
  }

  // Sirve para subscribirse en cualquier sitio y obtener los valores enviados
  obs() {
    return this.loadingSubject;
  }
}
