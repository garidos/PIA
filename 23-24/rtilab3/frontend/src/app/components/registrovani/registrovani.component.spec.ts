import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovaniComponent } from './registrovani.component';

describe('RegistrovaniComponent', () => {
  let component: RegistrovaniComponent;
  let fixture: ComponentFixture<RegistrovaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrovaniComponent]
    });
    fixture = TestBed.createComponent(RegistrovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
