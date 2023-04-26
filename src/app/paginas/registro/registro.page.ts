import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {
  credencial?:FormGroup;
  constructor( private service: AutenticacaoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.credencial = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      senha:['',[Validators.required, Validators.minLength]]
    });
  }


registrar(){
  const user = this.service.registrar(this.credencial?.get('nome'), this.credencial?.get('senha'));
  if(user){

  }
}

}
