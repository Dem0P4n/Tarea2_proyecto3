import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto3';
  resultado:number = 0;
  numero1:number = 0;
  numero2:number = 0;
  operacion:string = "";
  public sumar(){
    this.numero1 = Math.round(Math.random() * (1000 - 1) + 1)
    this.numero2 = Math.round(Math.random() * (1000 - 1) + 1)
    this.resultado = this.numero1 + this.numero2
    this.operacion = "+"
  }
  public restar(){
    this.numero1 = Math.round(Math.random() * (1000 - 1) + 1)
    this.numero2 = Math.round(Math.random() * (1000 - 1) + 1)
    this.resultado = this.numero1 - this.numero2
    this.operacion = "-"
  }
  public multiplicar(){
    this.numero1 = Math.round(Math.random() * (1000 - 1) + 1)
    this.numero2 = Math.round(Math.random() * (1000 - 1) + 1)
    this.resultado = this.numero1 * this.numero2
    this.operacion = "*"
  }
  public dividir(){
    this.numero1 = Math.round(Math.random() * (1000 - 1) + 1)
    this.numero2 = Math.round(Math.random() * (1000 - 1) + 1)
    this.resultado = this.numero1 / this.numero2
    this.operacion = "/"
  }
}
