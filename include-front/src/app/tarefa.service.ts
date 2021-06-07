import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './model/tarefa';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private baseURL: string = 'http://localhost:3000/tarefas';

  private colecaoAtualizada = new Subject<Tarefa[]>();

  //injeção de dependência
  constructor(private httpClient: HttpClient) { }

  public getColecaoAtualizada (){
    return this.colecaoAtualizada.asObservable();
  }

  public list (){
    this.httpClient.get<{tarefas: Tarefa[]}>(this.baseURL).subscribe( resultado => {
      this.colecaoAtualizada.next(resultado.tarefas);
    });
  }

  public add (tarefa: Tarefa){
    this.httpClient.post<{tarefas: Tarefa[]}>(this.baseURL, tarefa).subscribe (resultado => {
      this.colecaoAtualizada.next(resultado.tarefas);
    })
  }

  public update (tarefa: Tarefa){
    this.httpClient.put<{tarefas: Tarefa[]}>(this.baseURL, tarefa).subscribe(resultado => {
      this.colecaoAtualizada.next(resultado.tarefas);
    })
  }
}