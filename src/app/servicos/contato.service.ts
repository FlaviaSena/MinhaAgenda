import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';

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
}
