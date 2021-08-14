import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent  {
  respuesta:any= {url:"",titulo:"",texto:""}
  @Input() dataRep :any= [];
  @Output() respuestaEvent = new EventEmitter<any>();
  constructor (){
      this.dataRep =[]
  }

  sendRespuesta(item:any){
    this.respuesta.url = item.url
    this.respuesta.texto = item.texto
    this.respuesta.titulo = item.titulo
    this.respuestaEvent.emit(this.respuesta)
  }
}
