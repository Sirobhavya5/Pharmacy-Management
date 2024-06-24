import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchase1Component } from './purchase1.component';

describe('Purchase1Component', () => {
  let component: Purchase1Component;
  let fixture: ComponentFixture<Purchase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Purchase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Purchase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
