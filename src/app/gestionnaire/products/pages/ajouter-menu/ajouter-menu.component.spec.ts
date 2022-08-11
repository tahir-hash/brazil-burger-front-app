import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMenuComponent } from './ajouter-menu.component';

describe('AjouterMenuComponent', () => {
  let component: AjouterMenuComponent;
  let fixture: ComponentFixture<AjouterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
