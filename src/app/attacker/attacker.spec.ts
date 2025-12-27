import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attacker } from './attacker';

describe('Attacker', () => {
  let component: Attacker;
  let fixture: ComponentFixture<Attacker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Attacker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attacker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
