import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon-service';
import { PokemartService } from '../pokemart-service';

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  pokemonService = inject(PokemonService);
  martService = inject(PokemartService);
}
