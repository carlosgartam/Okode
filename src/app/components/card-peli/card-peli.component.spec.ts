import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeliComponent } from './card-peli.component';

describe('CardPeliComponent', () => {
  let component: CardPeliComponent;
  let fixture: ComponentFixture<CardPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPeliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
