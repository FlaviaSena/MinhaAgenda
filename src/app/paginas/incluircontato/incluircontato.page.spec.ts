import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluircontatoPage } from './incluircontato.page';

describe('IncluircontatoPage', () => {
  let component: IncluircontatoPage;
  let fixture: ComponentFixture<IncluircontatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluircontatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
