import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon-service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should have 6 Pokemon per region', () => {
    expect(service.kanto().length).toBe(6);
    expect(service.johto().length).toBe(6);
    expect(service.hoenn().length).toBe(6);
    expect(service.totalPokemon()).toBe(18);
  });

  it('should toggle favorites and update the computed count', () => {
    service.toggleFavorite('Pikachu');
    expect(service.isFavorite('Pikachu')).toBe(true);
    expect(service.favoriteCount()).toBe(1);

    service.toggleFavorite('Pikachu');
    expect(service.favoriteCount()).toBe(0);
  });
});
