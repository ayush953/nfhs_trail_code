import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBaleComponent } from './search-bale.component';

describe('ScanQrComponent', () => {
  let component: SearchBaleComponent;
  let fixture: ComponentFixture<SearchBaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
