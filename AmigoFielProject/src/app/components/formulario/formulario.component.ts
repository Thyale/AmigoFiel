import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';
  dataNascimento: string = '';
  genero: string = '';
  residencia: string = '';
  telefone: string = '';
  razaoAdocao: string = '';
  concordaVisita: string = '';
  termoResponsabilidade: string = '';
  informacoesCorretas: string = '';
  listaAdocoes: string = '';
  tipoResidencia: string = '';
  statusPosse: string = '';
  permissaoAnimais: string = '';
  espacoDisponivel: string = '';
  telasSeguranca: string = '';
  outrosAnimais: number | null = null;
  numeroResidentes: number | null = null;
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';

  EnviarForm() {
    if (
      this.nome === '' ||
      this.dataNascimento === '' ||
      this.genero === '' ||
      this.residencia === '' ||
      this.telefone === '' ||
      this.razaoAdocao === '' ||
      this.concordaVisita === '' ||
      this.termoResponsabilidade === '' ||
      this.informacoesCorretas === '' ||
      this.listaAdocoes === '' ||
      this.tipoResidencia === '' ||
      this.statusPosse === '' ||
      this.permissaoAnimais === '' ||
      this.espacoDisponivel === '' ||
      this.telasSeguranca === '' ||
      this.outrosAnimais === null ||
      this.numeroResidentes === null ||
      this.cep === '' ||
      this.rua === '' ||
      this.bairro === '' ||
      this.cidade === '' ||
      this.estado === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Formulário enviado com sucesso!',
        text: 'Estamos felizes que você decidiu adotar um novo amigo, vamos analisar seu perfil e em breve entraremos em contato!',
      });

      const dadosFormulario = {
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        genero: this.genero,
        residencia: this.residencia,
        telefone: this.telefone,
        razaoAdocao: this.razaoAdocao,
        concordaVisita: this.concordaVisita,
        termoResponsabilidade: this.termoResponsabilidade,
        informacoesCorretas: this.informacoesCorretas,
        listaAdocoes: this.listaAdocoes,
        tipoResidencia: this.tipoResidencia,
        statusPosse: this.statusPosse,
        permissaoAnimais: this.permissaoAnimais,
        espacoDisponivel: this.espacoDisponivel,
        telasSeguranca: this.telasSeguranca,
        outrosAnimais: this.outrosAnimais,
        numeroResidentes: this.numeroResidentes,
        cep: this.cep,
        rua: this.rua,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado
      };

      console.log(dadosFormulario);
      localStorage.setItem('FormAdotante', JSON.stringify(dadosFormulario));
    }
  }
}
