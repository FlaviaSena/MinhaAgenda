import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Contato{
  id?: string;
  nome: string;
  email: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  colecao: string ="contato";
  constructor( private firestore: Firestore) { }
  cadastrar (obj:any){
    const contatos = collection(this.firestore, this.colecao);
    return addDoc(contatos, obj);
  
  }
  listar(): Observable<Contato[]>{
    const contatos = collection(this.firestore, this.colecao);
      return collectionData (contatos, {idField:'id'}) as Observable<Contato[]>;
  }
}
