import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentComponent } from './klijent.component';

describe('KlijentComponent', () => {
  let component: KlijentComponent;
  let fixture: ComponentFixture<KlijentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlijentComponent]
    });
    fixture = TestBed.createComponent(KlijentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
