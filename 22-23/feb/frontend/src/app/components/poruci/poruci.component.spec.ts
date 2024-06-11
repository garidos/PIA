import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoruciComponent } from './poruci.component';

describe('PoruciComponent', () => {
  let component: PoruciComponent;
  let fixture: ComponentFixture<PoruciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoruciComponent]
    });
    fixture = TestBed.createComponent(PoruciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
