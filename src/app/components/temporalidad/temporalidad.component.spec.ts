import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalidadComponent } from './temporalidad.component';

describe('TemporalidadComponent', () => {
  let component: TemporalidadComponent;
  let fixture: ComponentFixture<TemporalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
