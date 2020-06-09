import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHotelComponent } from './account-hotel.component';

describe('AccountHotelComponent', () => {
  let component: AccountHotelComponent;
  let fixture: ComponentFixture<AccountHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
