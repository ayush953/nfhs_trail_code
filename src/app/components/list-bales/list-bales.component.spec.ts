import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBalesComponent } from './list-bales.component';

describe('ListBalesComponent', () => {
  let component: ListBalesComponent;
  let fixture: ComponentFixture<ListBalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
