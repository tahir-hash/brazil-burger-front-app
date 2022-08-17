import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLivComponent } from './details-liv.component';

describe('DetailsLivComponent', () => {
  let component: DetailsLivComponent;
  let fixture: ComponentFixture<DetailsLivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
