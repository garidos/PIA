import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZeljaComponent } from './lista-zelja.component';

describe('ListaZeljaComponent', () => {
  let component: ListaZeljaComponent;
  let fixture: ComponentFixture<ListaZeljaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaZeljaComponent]
    });
    fixture = TestBed.createComponent(ListaZeljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
