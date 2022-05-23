import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routinglink1Component } from './routinglink1.component';

describe('Routinglink1Component', () => {
  let component: Routinglink1Component;
  let fixture: ComponentFixture<Routinglink1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routinglink1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routinglink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
