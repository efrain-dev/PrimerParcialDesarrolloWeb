import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  constructor() { }
  respuesta:any={url:"assets/img/YouTube-Logo.png",titulo:"",texto:""}
  dataRep:any= [
    {url:"assets/img/vue.jpg",titulo:"Vue",texto:"Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página"},
    {url:"assets/img/laravel.png",titulo:"Laravel",texto:"Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8"},
    {url:"assets/img/node.jpg",titulo:"Node",texto:"Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google"},
    {url:"assets/img/python.jpg",titulo:"Python",texto:"Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código"},
    {url:"assets/img/angular.png",titulo:"Angular",texto:"Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página"},
    {url:"assets/img/react.png",titulo:"React",texto:"React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página"},

  ];
  ngOnInit(): void {
  }
  receivedRespuesta($event:any){
    this.respuesta = $event

  }
}
