import { Injectable, computed, signal } from '@angular/core';

const ARTWORK = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const ITEM_SPRITE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private kantoPokemon = signal([
    {
      id: 25,
      name: 'Pikachu',
      types: ['Electric'],
      heldItem: { name: 'Light Ball', sprite: ITEM_SPRITE + 'light-ball.png' },
      description: 'A cheerful Mouse Pokémon that stores electricity in its red cheek pouches and lets it out in sparks when it feels threatened.',
      image: ARTWORK + '25.png'
    },
    {
      id: 6,
      name: 'Charizard',
      types: ['Fire', 'Flying'],
      heldItem: { name: 'Charcoal', sprite: ITEM_SPRITE + 'charcoal.png' },
      description: 'Flies through the sky looking for strong opponents. Its fiery breath can melt boulders, but it never turns it on weaker foes.',
      image: ARTWORK + '6.png'
    },
    {
      id: 94,
      name: 'Gengar',
      types: ['Ghost', 'Poison'],
      heldItem: { name: 'Spell Tag', sprite: ITEM_SPRITE + 'spell-tag.png' },
      description: 'Lurks in the shadows of rooms and streets. People say the air turns suddenly cold when a Gengar is hiding nearby.',
      image: ARTWORK + '94.png'
    },
    {
      id: 143,
      name: 'Snorlax',
      types: ['Normal'],
      heldItem: { name: 'Leftovers', sprite: ITEM_SPRITE + 'leftovers.png' },
      description: 'Spends its whole day eating and sleeping. Its stomach is so tough it can digest almost anything without getting sick.',
      image: ARTWORK + '143.png'
    },
    {
      id: 131,
      name: 'Lapras',
      types: ['Water', 'Ice'],
      heldItem: { name: 'Never-Melt Ice', sprite: ITEM_SPRITE + 'never-melt-ice.png' },
      description: 'A gentle and intelligent Pokémon that loves to carry people across the sea on its back while singing softly.',
      image: ARTWORK + '131.png'
    },
    {
      id: 149,
      name: 'Dragonite',
      types: ['Dragon', 'Flying'],
      heldItem: { name: 'Lum Berry', sprite: ITEM_SPRITE + 'lum-berry.png' },
      description: 'A kind-hearted Pokémon that can fly around the world in about 16 hours and guides lost ships safely back to land.',
      image: ARTWORK + '149.png'
    }
  ]);

  private johtoPokemon = signal([
    {
      id: 157,
      name: 'Typhlosion',
      types: ['Fire'],
      heldItem: { name: 'Quick Claw', sprite: ITEM_SPRITE + 'quick-claw.png' },
      description: 'Hides behind a shimmering wall of heat. When it gets angry, the flames around its neck flare up and scorch everything nearby.',
      image: ARTWORK + '157.png'
    },
    {
      id: 181,
      name: 'Ampharos',
      types: ['Electric'],
      heldItem: { name: 'Magnet', sprite: ITEM_SPRITE + 'magnet.png' },
      description: 'The bright orb on its tail can be seen from far away. One famous Ampharos lights up the lighthouse in Olivine City.',
      image: ARTWORK + '181.png'
    },
    {
      id: 197,
      name: 'Umbreon',
      types: ['Dark'],
      heldItem: { name: 'Black Glasses', sprite: ITEM_SPRITE + 'black-glasses.png' },
      description: 'An Eevee evolution touched by moonlight. The yellow rings on its body glow in the dark as it waits to ambush its prey.',
      image: ARTWORK + '197.png'
    },
    {
      id: 212,
      name: 'Scizor',
      types: ['Bug', 'Steel'],
      heldItem: { name: 'Metal Coat', sprite: ITEM_SPRITE + 'metal-coat.png' },
      description: 'Its body is as hard as steel. The eye patterns on its pincers trick enemies into thinking it has three heads.',
      image: ARTWORK + '212.png'
    },
    {
      id: 214,
      name: 'Heracross',
      types: ['Bug', 'Fighting'],
      heldItem: { name: 'Black Belt', sprite: ITEM_SPRITE + 'black-belt.png' },
      description: 'Uses its mighty horn to throw opponents many times its own weight. It gathers in forests to sip sweet tree sap.',
      image: ARTWORK + '214.png'
    },
    {
      id: 248,
      name: 'Tyranitar',
      types: ['Rock', 'Dark'],
      heldItem: { name: 'Hard Stone', sprite: ITEM_SPRITE + 'hard-stone.png' },
      description: 'Strong enough to knock down a mountain and armored so heavily that most attacks bounce off. It is always looking for a worthy rival.',
      image: ARTWORK + '248.png'
    }
  ]);

  private hoennPokemon = signal([
    {
      id: 257,
      name: 'Blaziken',
      types: ['Fire', 'Fighting'],
      heldItem: { name: 'Charcoal', sprite: ITEM_SPRITE + 'charcoal.png' },
      description: 'Fights with blazing kicks and flaming wrists. Its legs are so strong it can leap over a 30-story building.',
      image: ARTWORK + '257.png'
    },
    {
      id: 260,
      name: 'Swampert',
      types: ['Water', 'Ground'],
      heldItem: { name: 'Mystic Water', sprite: ITEM_SPRITE + 'mystic-water.png' },
      description: 'Can drag a boulder weighing over a ton. It senses coming storms by listening to the changing sound of the waves.',
      image: ARTWORK + '260.png'
    },
    {
      id: 282,
      name: 'Gardevoir',
      types: ['Psychic', 'Fairy'],
      heldItem: { name: 'Twisted Spoon', sprite: ITEM_SPRITE + 'twisted-spoon.png' },
      description: 'Will protect its Trainer with its life. It can bend space to create a tiny black hole when its partner is in danger.',
      image: ARTWORK + '282.png'
    },
    {
      id: 359,
      name: 'Absol',
      types: ['Dark'],
      heldItem: { name: 'Scope Lens', sprite: ITEM_SPRITE + 'scope-lens.png' },
      description: 'Often blamed for disasters, but it actually appears to warn people when it senses a natural catastrophe coming.',
      image: ARTWORK + '359.png'
    },
    {
      id: 330,
      name: 'Flygon',
      types: ['Ground', 'Dragon'],
      heldItem: { name: 'Soft Sand', sprite: ITEM_SPRITE + 'soft-sand.png' },
      description: 'Known as the "Desert Spirit." The beating of its wings stirs up sandstorms that hide it while its wings make a singing sound.',
      image: ARTWORK + '330.png'
    },
    {
      id: 376,
      name: 'Metagross',
      types: ['Steel', 'Psychic'],
      heldItem: { name: 'Shell Bell', sprite: ITEM_SPRITE + 'shell-bell.png' },
      description: 'Formed when two Metang fuse together. Its four brains let it solve hard calculations faster than a supercomputer.',
      image: ARTWORK + '376.png'
    }
  ]);

  kanto = this.kantoPokemon.asReadonly();
  johto = this.johtoPokemon.asReadonly();
  hoenn = this.hoennPokemon.asReadonly();

  regionSummary = computed(() => [
    { name: 'Kanto', emoji: '🔴', route: '/kanto', count: this.kantoPokemon().length, cover: this.kantoPokemon()[1] },
    { name: 'Johto', emoji: '🔵', route: '/johto', count: this.johtoPokemon().length, cover: this.johtoPokemon()[1] },
    { name: 'Hoenn', emoji: '🟢', route: '/hoenn', count: this.hoennPokemon().length, cover: this.hoennPokemon()[1] }
  ]);

  totalPokemon = computed(() =>
    this.regionSummary().reduce((sum, region) => sum + region.count, 0)
  );

  private favoriteNames = signal<string[]>([]);
  favorites = this.favoriteNames.asReadonly();

  favoriteCount = computed(() => this.favoriteNames().length);

  isFavorite(name: string) {
    return this.favoriteNames().includes(name);
  }

  toggleFavorite(name: string) {
    this.favoriteNames.update(current =>
      current.includes(name)
        ? current.filter(favorite => favorite !== name)
        : [...current, name]
    );
  }
}
