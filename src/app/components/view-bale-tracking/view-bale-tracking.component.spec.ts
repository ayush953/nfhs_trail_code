import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBaleTrackingComponent } from './view-bale-tracking.component';

describe('ViewBaleTrackingComponent', () => {
  let component: ViewBaleTrackingComponent;
  let fixture: ComponentFixture<ViewBaleTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBaleTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBaleTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
