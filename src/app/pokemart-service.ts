import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemartService {
  private martItems = signal([
    { id: 1, name: 'Poke Ball', category: 'Poke Balls', price: 200, description: 'A basic device for catching wild Pokemon.' },
    { id: 2, name: 'Great Ball', category: 'Poke Balls', price: 600, description: 'A better Ball with a higher catch rate than a Poke Ball.' },
    { id: 3, name: 'Ultra Ball', category: 'Poke Balls', price: 800, description: 'A high-performance Ball for catching tough Pokemon.' },

    { id: 4, name: 'Potion', category: 'Medicine', price: 300, description: 'Restores 20 HP to one Pokemon.' },
    { id: 5, name: 'Super Potion', category: 'Medicine', price: 700, description: 'Restores 50 HP to one Pokemon.' },
    { id: 6, name: 'Hyper Potion', category: 'Medicine', price: 1200, description: 'Restores 200 HP to one Pokemon.' },
    { id: 7, name: 'Max Potion', category: 'Medicine', price: 2500, description: 'Fully restores the HP of one Pokemon.' },
    { id: 8, name: 'Full Restore', category: 'Medicine', price: 3000, description: 'Fully restores HP and heals any status problem.' },
    { id: 9, name: 'Revive', category: 'Medicine', price: 1500, description: 'Revives a fainted Pokemon with half of its HP.' },

    { id: 10, name: 'Antidote', category: 'Status Heals', price: 100, description: 'Cures a Pokemon of poison.' },
    { id: 11, name: 'Paralyze Heal', category: 'Status Heals', price: 200, description: 'Cures a Pokemon of paralysis.' },
    { id: 12, name: 'Awakening', category: 'Status Heals', price: 250, description: 'Wakes up a sleeping Pokemon.' },
    { id: 13, name: 'Full Heal', category: 'Status Heals', price: 600, description: 'Cures every status problem of one Pokemon.' },

    { id: 14, name: 'Escape Rope', category: 'Field Items', price: 550, description: 'Lets you escape instantly from a cave or dungeon.' },
    { id: 15, name: 'Repel', category: 'Field Items', price: 350, description: 'Keeps weak wild Pokemon away for 100 steps.' }
  ]);

  items = this.martItems.asReadonly();

  private categories = ['Poke Balls', 'Medicine', 'Status Heals', 'Field Items'];

  itemsByCategory = computed(() =>
    this.categories.map(category => ({
      category: category,
      items: this.martItems().filter(item => item.category === category)
    }))
  );

  private cartItems = signal<any[]>([]); 
  cart = this.cartItems.asReadonly();    

  private trainerMoney = signal(10000);
  wallet = this.trainerMoney.asReadonly();

  private lastOrderTotal = signal(0);
  lastOrder = this.lastOrderTotal.asReadonly();

  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  itemCount = computed(() => this.cartItems().length);

  remainingMoney = computed(() => this.trainerMoney() - this.totalPrice());

  canCheckout = computed(() => this.itemCount() > 0 && this.remainingMoney() >= 0);

  cartSummary = computed(() => {
    const rows: any[] = [];
    for (const item of this.cartItems()) {
      const row = rows.find(r => r.item.id === item.id);
      if (row) {
        row.quantity++;
        row.subtotal += item.price;
      } else {
        rows.push({ item: item, quantity: 1, subtotal: item.price });
      }
    }
    return rows;
  });

  quantityOf(id: number) {
    return this.cartItems().filter(item => item.id === id).length;
  }

  addToCart(product: any) {
    this.lastOrderTotal.set(0);
    this.cartItems.update(current => [...current, product]);
  }

  removeOne(id: number) {
    this.cartItems.update(current => {
      const index = current.findIndex(item => item.id === id);
      return index === -1 ? current : current.filter((_, i) => i !== index);
    });
  }

  removeAll(id: number) {
    this.cartItems.update(current => current.filter(item => item.id !== id));
  }

  clearCart() {
    this.cartItems.set([]);
  }

  checkout() {
    if (!this.canCheckout()) {
      return;
    }
    const total = this.totalPrice();
    this.trainerMoney.update(money => money - total);
    this.lastOrderTotal.set(total);
    this.clearCart();
  }
}
