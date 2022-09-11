import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPeliComponent } from './info-peli.component';

describe('InfoPeliComponent', () => {
  let component: InfoPeliComponent;
  let fixture: ComponentFixture<InfoPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPeliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
