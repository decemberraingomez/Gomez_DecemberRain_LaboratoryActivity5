import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { KantoComponent } from './kanto-component/kanto-component';
import { JohtoComponent } from './johto-component/johto-component';
import { HoennComponent } from './hoenn-component/hoenn-component';
import { PokemartComponent } from './pokemart-component/pokemart-component';
import { CartComponent } from './cart-component/cart-component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'kanto', component: KantoComponent, title: 'Kanto Region' },
  { path: 'johto', component: JohtoComponent, title: 'Johto Region' },
  { path: 'hoenn', component: HoennComponent, title: 'Hoenn Region' },
  { path: 'pokemart', component: PokemartComponent, title: 'PokeMart' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
