import { Component } from '@angular/core';

@Component({
  selector: 'app-adote',
  templateUrl: './adote.component.html',
  styleUrl: './adote.component.css'
})
export class AdoteComponent {

  tranparencia:boolean = false
  ShowDadosPets:boolean = false

  Pets = [
    {nome:"Renecca", img: "CatAdult.png"},
    {nome:"Cadu", img:"CatAdult2.png" },
    {nome:"Marie", img:"CatAdult3.png" },
    {nome:"Figma", img:"CatBaby.png" },
    {nome: "Snoopy", img: "DogAdult.png"},
    {nome: "Yanna", img : "DogBaby.png"},
    {nome:"Zeca", img: "DogBeagleAdult.png"}
  ]

  AbrirDados(){
    this.tranparencia = true
    this.ShowDadosPets = true
  }

  FecharDados(){
    this.tranparencia = false
    this.ShowDadosPets = false
  }

}
