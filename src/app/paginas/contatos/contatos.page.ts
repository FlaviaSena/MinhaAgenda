import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
  
import { Contato, ContatoService } from 'src/app/servicos/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatosPage implements OnInit {
contatos: Contato[] = [];

  constructor( private service: ContatoService) { }

  ngOnInit() {
    this.service.listar().subscribe(res => {
      this.contatos = res;
      console.log(this.contatos);
    });
    
  }

}
