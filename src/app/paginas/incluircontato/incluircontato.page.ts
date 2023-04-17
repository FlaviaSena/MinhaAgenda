import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ContatoService } from 'src/app/servicos/contato.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incluircontato',
  templateUrl: './incluircontato.page.html',
  styleUrls: ['./incluircontato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluircontatoPage implements OnInit {
   id:any; 
   contato: any;

  constructor(private service: ContatoService, private nav: NavController, private rota: ActivatedRoute) {
this.contato = {'nome': '',
  'email':'',
  'telefone':''
};
}
  ngOnInit() {
    this.id = this.rota.snapshot.params['idcontato'];
    if(this.id !=undefined){
      this.service.buscar(this.id).subscribe (res =>{
        this.contato = res;
        console.log(res);
      })
    }
    console.log("id =" + this.id);
  }
  incluir(){
    if(this.id==undefined){
      this.service.cadastrar(this.contato);
    }else{
      this.service.alterar(this.contato);
    }
    this.nav.navigateForward("contatos");
    
  }
  voltar(){
    this.nav.navigateForward("contatos");
  }
}
