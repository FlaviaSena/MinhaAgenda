import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterartarefaPage } from './alterartarefa.page';

describe('AlterartarefaPage', () => {
  let component: AlterartarefaPage;
  let fixture: ComponentFixture<AlterartarefaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterartarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
