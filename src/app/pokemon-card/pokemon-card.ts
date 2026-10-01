import { Component, computed, input, output } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-pokemon-card',
  styleUrl: './pokemon-card.css',
  templateUrl: './pokemon-card.html',
})
export class PokemonCard {
  pokemon = input.required<any>();
  dexNumber = computed(() => '#' + String(this.pokemon().id).padStart(3, '0'));
}
