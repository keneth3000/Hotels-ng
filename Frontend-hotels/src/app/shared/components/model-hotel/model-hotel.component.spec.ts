import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHotelComponent } from './model-hotel.component';

describe('ModelHotelComponent', () => {
  let component: ModelHotelComponent;
  let fixture: ComponentFixture<ModelHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
