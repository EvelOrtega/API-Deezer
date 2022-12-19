import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneroComponent } from './card-genero.component';

describe('CardGeneroComponent', () => {
  let component: CardGeneroComponent;
  let fixture: ComponentFixture<CardGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
