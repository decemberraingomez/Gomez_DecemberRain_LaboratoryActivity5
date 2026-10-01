import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemartService } from '../pokemart-service';

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-cart-component',
  styleUrl: './cart-component.css',
  templateUrl: './cart-component.html',
})
export class CartComponent {
  martService = inject(PokemartService);
}
