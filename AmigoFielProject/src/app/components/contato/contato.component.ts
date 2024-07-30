import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  NomeInput:string = ""
  EmailInput:string = ""
  NumInput = ""
  MsmInput:string = ""

  DadosContato = {
    nome:this.NomeInput,
    email:this.EmailInput,
    numero:this.NumInput,
    mensagem:this.MsmInput,
  }

  EnviarMsm(){
    this.DadosContato.nome = this.NomeInput
    this.DadosContato.email = this.EmailInput
    this.DadosContato.numero= this.NumInput
    this.DadosContato.mensagem = this.MsmInput
    localStorage.setItem('ContatoUser', JSON.stringify(this.DadosContato))
  }
}
