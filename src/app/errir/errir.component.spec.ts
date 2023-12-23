import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrirComponent } from './errir.component';

describe('ErrirComponent', () => {
  let component: ErrirComponent;
  let fixture: ComponentFixture<ErrirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
