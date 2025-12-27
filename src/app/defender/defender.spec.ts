import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defender } from './defender';

describe('Defender', () => {
  let component: Defender;
  let fixture: ComponentFixture<Defender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Defender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
