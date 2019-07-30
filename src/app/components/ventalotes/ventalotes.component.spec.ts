import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentalotesComponent } from './ventalotes.component';

describe('VentalotesComponent', () => {
  let component: VentalotesComponent;
  let fixture: ComponentFixture<VentalotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentalotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentalotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
