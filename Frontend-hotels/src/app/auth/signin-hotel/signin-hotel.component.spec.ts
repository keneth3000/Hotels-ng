import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninHotelComponent } from './signin-hotel.component';

describe('SigninHotelComponent', () => {
  let component: SigninHotelComponent;
  let fixture: ComponentFixture<SigninHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
