import { Component, computed, inject } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonService } from '../pokemon-service';

@Component({
  imports: [PokemonCard],
  standalone: true,
  selector: 'app-johto-component',
  styleUrl: './johto-component.css',
  templateUrl: './johto-component.html',
})
export class JohtoComponent {
  pokemonService = inject(PokemonService);

  johtoPokemon = this.pokemonService.johto;

  favoritesHere = computed(() =>
    this.johtoPokemon().filter(pokemon => this.pokemonService.favorites().includes(pokemon.name)).length
  );

  onFavoriteToggled(name: string) {
    this.pokemonService.toggleFavorite(name);
  }
}
