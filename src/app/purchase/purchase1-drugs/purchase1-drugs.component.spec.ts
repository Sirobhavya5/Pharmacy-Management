import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchase1DrugsComponent } from './purchase1-drugs.component';

describe('Purchase1DrugsComponent', () => {
  let component: Purchase1DrugsComponent;
  let fixture: ComponentFixture<Purchase1DrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Purchase1DrugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Purchase1DrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
