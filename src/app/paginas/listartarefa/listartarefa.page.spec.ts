import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListartarefaPage } from './listartarefa.page';

describe('ListartarefaPage', () => {
  let component: ListartarefaPage;
  let fixture: ComponentFixture<ListartarefaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListartarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
