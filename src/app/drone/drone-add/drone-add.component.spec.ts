import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneAddComponent } from './drone-add.component';

describe('DroneAddComponent', () => {
  let component: DroneAddComponent;
  let fixture: ComponentFixture<DroneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
