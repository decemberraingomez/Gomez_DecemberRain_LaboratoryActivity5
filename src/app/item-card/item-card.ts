import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-item-card',
  styleUrl: './item-card.css',
  templateUrl: './item-card.html',
})
export class ItemCard {
  item = input.required<any>();
  quantityInCart = input(0);

  addToCart = output<any>();

  onAdd() {
    this.addToCart.emit(this.item());
  }
}
