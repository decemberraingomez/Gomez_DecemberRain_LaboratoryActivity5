import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemCard } from '../item-card/item-card';
import { PokemartService } from '../pokemart-service';

@Component({
  imports: [ItemCard, RouterLink],
  standalone: true,
  selector: 'app-pokemart-component',
  styleUrl: './pokemart-component.css',
  templateUrl: './pokemart-component.html',
})
export class PokemartComponent {
  martService = inject(PokemartService);

  onAddToCart(item: any) {
    this.martService.addToCart(item);
  }
}
