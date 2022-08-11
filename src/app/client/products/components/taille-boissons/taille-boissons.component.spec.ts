import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleBoissonsComponent } from './taille-boissons.component';

describe('TailleBoissonsComponent', () => {
  let component: TailleBoissonsComponent;
  let fixture: ComponentFixture<TailleBoissonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailleBoissonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleBoissonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
