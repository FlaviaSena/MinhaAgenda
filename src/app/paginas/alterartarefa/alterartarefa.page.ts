import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alterartarefa',
  templateUrl: './alterartarefa.page.html',
  styleUrls: ['./alterartarefa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterartarefaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
