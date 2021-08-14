import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  constructor() { }
  respuesta:any={url:"assets/img/YouTube-Logo.png",titulo:"",texto:""}
  dataRep:any= [{url:"assets/img/vue.jpg",titulo:"Vue",texto:"Framework vue"}];
  ngOnInit(): void {
  }
  receivedRespuesta($event:any){
    this.respuesta = $event

  }
}
