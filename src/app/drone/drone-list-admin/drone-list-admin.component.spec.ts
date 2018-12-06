import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneListAdminComponent } from './drone-list-admin.component';

describe('DroneListAdminComponent', () => {
  let component: DroneListAdminComponent;
  let fixture: ComponentFixture<DroneListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
