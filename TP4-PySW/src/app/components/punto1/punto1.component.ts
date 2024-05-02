import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  productos = [
    {nombre:"notebook asus 13L", descripcion: "Disco 40PG", img:"https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen", precio:800000},
    {nombre:"Notebook Asus 15L", descripcion: "Disco 60PG 15 pulgadas", img:"https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen", precio:1000000},
    {nombre:"Monitor LG 14'", descripcion: "texto descriptivo producto 02", img:"https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen", precio:1500000},
    {nombre:"Monitor Samsung 17'", descripcion: "texto descriptivo producto 03", img:"https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen", precio:2000000},
    {nombre:"Teclado Genius", descripcion: "texto descriptivo producto 04", img:"https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen", precio:300000},
    {nombre:"Teclado Logitech", descripcion: "texto descriptivo producto 05", img:"https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen", precio:500000}
  ]
  constructor() {

  }

}
