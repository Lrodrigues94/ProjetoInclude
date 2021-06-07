import { Component } from '@angular/core';
import { Tarefa } from './model/tarefa';
import {TarefaService} from './tarefa.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  tarefas: Tarefa[] = [];
  dados: any;
  value: Date;
  dateValue: Date;

  opcoes = [
    {rotulo: "Despesa", valor: false},
    {rotulo: "Receita", valor: true}
  ]

  constructor(private tarefaService: TarefaService){

  }

  ngOnInit(){
    this.tarefaService.getColecaoAtualizada().subscribe(tarefas => {
      this.tarefas = tarefas;
      this.atualizarGrafico();
    })
    this.tarefaService.list();
  }

  atualizarGrafico(){
    let despesa = 0;
    this.tarefas.filter(t => t.tipo).forEach((element) => {despesa += element.valor})
    let receita = 0;
    this.tarefas.filter(t => !t.tipo).forEach((element) => {receita += element.valor})

    this.dados = {
      labels: ["Receita", "Despesas"],
      datasets: [
        {
          data: [despesa,receita],
          
          backgroundColor: [
            '#2196F3',
            '#F44336'
          ]
        }
      ]
    }
  }

  adicionar (tarefaForm){
    const t: Tarefa = {
      descricao: tarefaForm.value.descricao,
      data: tarefaForm.value.data,
      tipo: false,
      valor: tarefaForm.value.valor,


    }
    this.tarefaService.add(t);
    tarefaForm.resetForm();
  }

  atualizar (tarefa: Tarefa){
    this.tarefaService.update(tarefa);
  }

  converterData(data) {
    var date = new Date(data);
    return date.getDate()+'/' + (date.getMonth()+1) + '/' + date.getFullYear();
    
  }
}
