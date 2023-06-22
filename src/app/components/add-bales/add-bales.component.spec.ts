import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBalesComponent } from './add-bales.component';

describe('LotCreateSuccessComponent', () => {
  let component: AddBalesComponent;
  let fixture: ComponentFixture<AddBalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
