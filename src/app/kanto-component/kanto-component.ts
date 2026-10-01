import { Component, computed, inject } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonService } from '../pokemon-service';

@Component({
  imports: [PokemonCard],
  standalone: true,
  selector: 'app-kanto-component',
  styleUrl: './kanto-component.css',
  templateUrl: './kanto-component.html',
})
export class KantoComponent {
  pokemonService = inject(PokemonService);

  kantoPokemon = this.pokemonService.kanto;

  favoritesHere = computed(() =>
    this.kantoPokemon().filter(pokemon => this.pokemonService.favorites().includes(pokemon.name)).length
  );

  onFavoriteToggled(name: string) {
    this.pokemonService.toggleFavorite(name);
  }
}
