import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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

  constructor(private service:TarefaService) { }

  ngOnInit() {

    this.service.listar().subscribe(res => {
      this.t = res;
      console.log(this.t);
  });

}
}
