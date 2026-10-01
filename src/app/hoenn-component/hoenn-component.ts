import { Component, computed, inject } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonService } from '../pokemon-service';

@Component({
  imports: [PokemonCard],
  standalone: true,
  selector: 'app-hoenn-component',
  styleUrl: './hoenn-component.css',
  templateUrl: './hoenn-component.html',
})
export class HoennComponent {
  pokemonService = inject(PokemonService);

  hoennPokemon = this.pokemonService.hoenn;

  favoritesHere = computed(() =>
    this.hoennPokemon().filter(pokemon => this.pokemonService.favorites().includes(pokemon.name)).length
  );

  onFavoriteToggled(name: string) {
    this.pokemonService.toggleFavorite(name);
  }
}
