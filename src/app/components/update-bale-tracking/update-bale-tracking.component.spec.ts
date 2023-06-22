import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBaleTrackingComponent } from './update-bale-tracking.component';

describe('UpdateBaleTrackingComponent', () => {
  let component: UpdateBaleTrackingComponent;
  let fixture: ComponentFixture<UpdateBaleTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBaleTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBaleTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
