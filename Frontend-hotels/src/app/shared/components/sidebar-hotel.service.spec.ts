import { TestBed } from '@angular/core/testing';

import { SidebarHotelService } from './sidebar-hotel.service';

describe('SidebarHotelService', () => {
  let service: SidebarHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
