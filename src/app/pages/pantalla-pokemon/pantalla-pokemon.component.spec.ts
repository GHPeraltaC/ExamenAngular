import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPokemonComponent } from './pantalla-pokemon.component';

describe('PantallaPokemonComponent', () => {
  let component: PantallaPokemonComponent;
  let fixture: ComponentFixture<PantallaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
