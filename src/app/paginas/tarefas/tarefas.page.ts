import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ContatoService } from 'src/app/servicos/contato.service';
import { ActivatedRoute } from '@angular/router';
import { Tarefa, TarefaService } from 'src/app/servicos/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefasPage implements OnInit {
  t: Tarefa[]=[];

  constructor(private service:TarefaService, 
              private nav: NavController) { }

  ngOnInit() {

    this.service.listar().subscribe(res => {
      this.t = res;
      console.log(this.t);
  });

}

novo(){
  this.nav.navigateForward("incluirtarefa");
}
  iniciarEdicao(id: any){
    this.nav.navigateForward(["incluirtarefa", {idtarefa: id}]);
  }

}
