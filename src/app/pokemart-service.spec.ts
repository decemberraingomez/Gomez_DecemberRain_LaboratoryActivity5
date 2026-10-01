import { TestBed } from '@angular/core/testing';
import { PokemartService } from './pokemart-service';

describe('PokemartService', () => {
  let service: PokemartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemartService);
  });

  it('should have at least 10 items', () => {
    expect(service.items().length).toBeGreaterThanOrEqual(10);
  });

  it('should compute the total price of the cart', () => {
    const pokeBall = service.items()[0];
    service.addToCart(pokeBall);
    service.addToCart(pokeBall);
    expect(service.itemCount()).toBe(2);
    expect(service.totalPrice()).toBe(pokeBall.price * 2);
    expect(service.cartSummary()[0].quantity).toBe(2);
  });

  it('should remove items and clear the cart', () => {
    const potion = service.items()[3];
    service.addToCart(potion);
    service.addToCart(potion);
    service.removeOne(potion.id);
    expect(service.quantityOf(potion.id)).toBe(1);
    service.clearCart();
    expect(service.totalPrice()).toBe(0);
  });

  it('should take money from the wallet on checkout', () => {
    const startingMoney = service.wallet();
    const ultraBall = service.items()[2];
    service.addToCart(ultraBall);
    service.checkout();
    expect(service.wallet()).toBe(startingMoney - ultraBall.price);
    expect(service.lastOrder()).toBe(ultraBall.price);
    expect(service.itemCount()).toBe(0);
  });
});
