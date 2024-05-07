import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovirajComponent } from './renoviraj.component';

describe('RenovirajComponent', () => {
  let component: RenovirajComponent;
  let fixture: ComponentFixture<RenovirajComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenovirajComponent]
    });
    fixture = TestBed.createComponent(RenovirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
