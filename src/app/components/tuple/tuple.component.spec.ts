import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupleComponent } from './tuple.component';

describe('TupleComponent', () => {
  let component: TupleComponent;
  let fixture: ComponentFixture<TupleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TupleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
