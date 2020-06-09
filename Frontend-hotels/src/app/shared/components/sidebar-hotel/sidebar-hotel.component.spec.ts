import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHotelComponent } from './sidebar-hotel.component';

describe('SidebarHotelComponent', () => {
  let component: SidebarHotelComponent;
  let fixture: ComponentFixture<SidebarHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
