import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuorComponent } from './tuor.component';

describe('TuorComponent', () => {
  let component: TuorComponent;
  let fixture: ComponentFixture<TuorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
