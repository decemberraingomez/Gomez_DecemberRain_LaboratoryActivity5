import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokemartComponent } from './pokemart-component';

describe('PokemartComponent', () => {
  let component: PokemartComponent;
  let fixture: ComponentFixture<PokemartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemartComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
