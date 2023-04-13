import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController } from '@ionic/angular';
import { ContatoService } from 'src/app/servicos/contato.service';


@Component({
  selector: 'app-incluirtarefa',
  templateUrl: './incluirtarefa.page.html',
  styleUrls: ['./incluirtarefa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirtarefaPage implements OnInit {
  tarefa: any;

  constructor(private service: ContatoService, private nav: NavController) {
    this.tarefa = {'nome': '',
  'tipo':'',
  'descricao':''
   };
  }

  ngOnInit() {

  }
  incluir(){
    this.service.cadastrar(this.tarefa);
    this.nav.navigateForward("tarefas");

}
}
