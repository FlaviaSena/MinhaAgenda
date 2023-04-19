import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';


export interface Tarefa{
  id?: string;
  nome: string;
  tipo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  colecao: string ="tarefas";
  constructor( private firestore: Firestore) { }

  cadastrar (obj:any){
    const t = collection(this.firestore, this.colecao);
    return addDoc(t, obj);
  }
  listar(): Observable<Tarefa[]>{
    const t = collection(this.firestore, this.colecao);
      return collectionData (t, {idField:'id'}) as Observable<Tarefa[]>;
  }
}
