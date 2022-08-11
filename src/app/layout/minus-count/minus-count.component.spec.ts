import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusCountComponent } from './minus-count.component';

describe('MinusCountComponent', () => {
  let component: MinusCountComponent;
  let fixture: ComponentFixture<MinusCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinusCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
