import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirtarefaPage } from './incluirtarefa.page';

describe('IncluirtarefaPage', () => {
  let component: IncluirtarefaPage;
  let fixture: ComponentFixture<IncluirtarefaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluirtarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
