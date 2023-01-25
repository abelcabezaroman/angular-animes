import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  // PASO 2 - Crear el componente con sus estilos y subscribirse para recibir los cambios del isLoading y asi mostrar u ocultarlo
  isLoading: boolean = false;


  constructor(private loadingService: LoadingService){}

  ngOnInit(){
    this.loadingService.obs().subscribe((isLoading: boolean)=> {
      this.isLoading = isLoading
    })
  }


}
