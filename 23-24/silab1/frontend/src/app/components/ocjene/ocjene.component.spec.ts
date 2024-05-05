import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcjeneComponent } from './ocjene.component';

describe('OcjeneComponent', () => {
  let component: OcjeneComponent;
  let fixture: ComponentFixture<OcjeneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcjeneComponent]
    });
    fixture = TestBed.createComponent(OcjeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
