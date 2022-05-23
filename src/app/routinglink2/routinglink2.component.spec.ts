import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routinglink2Component } from './routinglink2.component';

describe('Routinglink2Component', () => {
  let component: Routinglink2Component;
  let fixture: ComponentFixture<Routinglink2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routinglink2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routinglink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
