import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController } from '@ionic/angular';
import { TarefaService } from 'src/app/servicos/tarefa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incluirtarefa',
  templateUrl: './incluirtarefa.page.html',
  styleUrls: ['./incluirtarefa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirtarefaPage implements OnInit {
  id:any
  tarefa: any;

  constructor(private service: TarefaService, private nav: NavController, private rota: ActivatedRoute) {
    this.tarefa = {'nome': '',
  'tipo':'',
  'descricao':''
   };
  }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idtarefa'];
    if(this.id !=undefined){
      this.service.buscar(this.id).subscribe (res =>{
        this.tarefa = res;
        console.log(res);
      })
    }
    console.log("id =" + this.id);
  }
  incluir(){
    if(this.id==undefined){
      this.service.cadastrar(this.tarefa);
    }else{
      this.service.alterar(this.tarefa);
    }
    this.nav.navigateForward("tarefas");
    
  }
  voltar(){
    this.nav.navigateForward("tarefas");
  }
}
