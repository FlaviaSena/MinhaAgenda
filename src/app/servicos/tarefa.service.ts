import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, docData } from '@angular/fire/firestore';
import { addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
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
  buscar(id:any):Observable<Tarefa>{
    const tarefa = doc(this.firestore, this.colecao +'/' +id);

    return docData(tarefa, {idField: 'id'}) as Observable<Tarefa>
  }
  alterar(obj: any){
    const tarefa = doc(this.firestore, this.colecao +'/' +obj.id);
    return updateDoc(tarefa, { 
      nome: obj.nome, tipo: obj.tipo, descricao:obj.descricao
    });

  } 
  
  excluir(id: any){
    const tarefa = doc(this.firestore, this.colecao +'/' +id);
    return deleteDoc(tarefa);

  } 
}


