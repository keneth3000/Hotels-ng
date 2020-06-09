import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEditUserComponent } from './model-edit-user.component';

describe('ModelEditUserComponent', () => {
  let component: ModelEditUserComponent;
  let fixture: ComponentFixture<ModelEditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelEditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
