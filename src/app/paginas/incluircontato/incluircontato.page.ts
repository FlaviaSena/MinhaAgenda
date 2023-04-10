import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContatoService } from 'src/app/servicos/contato.service';

@Component({
  selector: 'app-incluircontato',
  templateUrl: './incluircontato.page.html',
  styleUrls: ['./incluircontato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluircontatoPage implements OnInit {
    
   contato: any;

  constructor(private service: ContatoService) {
this.contato = {'nome': '',
  'email':'',
  'telefone':''
};
}
  ngOnInit() {
  }
  incluir(){
    this.service.cadastrar(this.contato);
  }
}
