import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
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
              private nav: NavController, private alerta: AlertController) { }

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
  async excluir(id:any){
    const mensagem = await this.alerta.create({
      header: "Excluir tarefa",
      message: "Deseja realmente excluir essa tarefa?",
      buttons:[
        {text: "Sim",
         handler: res => {
          this.service.excluir(id);
         } 
        },
        {text: "Não"}
      ]
    });
    await mensagem.present();
//    this.service.excluir(id);
  }
}
