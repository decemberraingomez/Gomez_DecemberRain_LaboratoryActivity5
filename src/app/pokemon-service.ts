import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private kantoPokemon = signal([
    {
      id: 25,
      name: 'Pikachu',
      types: ['Electric'],
      heldItem: 'Light Ball',
      description: 'A cheerful Mouse Pokemon that stores electricity in its red cheek pouches and lets it out in sparks when it feels threatened.'
    },
    {
      id: 6,
      name: 'Charizard',
      types: ['Fire', 'Flying'],
      heldItem: 'Charcoal',
      description: 'Flies through the sky looking for strong opponents. Its fiery breath can melt boulders, but it never turns it on weaker foes.'
    },
    {
      id: 94,
      name: 'Gengar',
      types: ['Ghost', 'Poison'],
      heldItem: 'Spell Tag',
      description: 'Lurks in the shadows of rooms and streets. People say the air turns suddenly cold when a Gengar is hiding nearby.'
    },
    {
      id: 143,
      name: 'Snorlax',
      types: ['Normal'],
      heldItem: 'Leftovers',
      description: 'Spends its whole day eating and sleeping. Its stomach is so tough it can digest almost anything without getting sick.'
    },
    {
      id: 131,
      name: 'Lapras',
      types: ['Water', 'Ice'],
      heldItem: 'Never-Melt Ice',
      description: 'A gentle and intelligent Pokemon that loves to carry people across the sea on its back while singing softly.'
    },
    {
      id: 149,
      name: 'Dragonite',
      types: ['Dragon', 'Flying'],
      heldItem: 'Lum Berry',
      description: 'A kind-hearted Pokemon that can fly around the world in about 16 hours and guides lost ships safely back to land.'
    }
  ]);

  private johtoPokemon = signal([
    {
      id: 157,
      name: 'Typhlosion',
      types: ['Fire'],
      heldItem: 'Quick Claw',
      description: 'Hides behind a shimmering wall of heat. When it gets angry, the flames around its neck flare up and scorch everything nearby.'
    },
    {
      id: 181,
      name: 'Ampharos',
      types: ['Electric'],
      heldItem: 'Magnet',
      description: 'The bright orb on its tail can be seen from far away. One famous Ampharos lights up the lighthouse in Olivine City.'
    },
    {
      id: 197,
      name: 'Umbreon',
      types: ['Dark'],
      heldItem: 'Black Glasses',
      description: 'An Eevee evolution touched by moonlight. The yellow rings on its body glow in the dark as it waits to ambush its prey.'
    },
    {
      id: 212,
      name: 'Scizor',
      types: ['Bug', 'Steel'],
      heldItem: 'Metal Coat',
      description: 'Its body is as hard as steel. The eye patterns on its pincers trick enemies into thinking it has three heads.'
    },
    {
      id: 214,
      name: 'Heracross',
      types: ['Bug', 'Fighting'],
      heldItem: 'Black Belt',
      description: 'Uses its mighty horn to throw opponents many times its own weight. It gathers in forests to sip sweet tree sap.'
    },
    {
      id: 248,
      name: 'Tyranitar',
      types: ['Rock', 'Dark'],
      heldItem: 'Hard Stone',
      description: 'Strong enough to knock down a mountain and armored so heavily that most attacks bounce off. It is always looking for a worthy rival.'
    }
  ]);

  private hoennPokemon = signal([
    {
      id: 257,
      name: 'Blaziken',
      types: ['Fire', 'Fighting'],
      heldItem: 'Charcoal',
      description: 'Fights with blazing kicks and flaming wrists. Its legs are so strong it can leap over a 30-story building.'
    },
    {
      id: 260,
      name: 'Swampert',
      types: ['Water', 'Ground'],
      heldItem: 'Mystic Water',
      description: 'Can drag a boulder weighing over a ton. It senses coming storms by listening to the changing sound of the waves.'
    },
    {
      id: 282,
      name: 'Gardevoir',
      types: ['Psychic', 'Fairy'],
      heldItem: 'Twisted Spoon',
      description: 'Will protect its Trainer with its life. It can bend space to create a tiny black hole when its partner is in danger.'
    },
    {
      id: 359,
      name: 'Absol',
      types: ['Dark'],
      heldItem: 'Scope Lens',
      description: 'Often blamed for disasters, but it actually appears to warn people when it senses a natural catastrophe coming.'
    },
    {
      id: 330,
      name: 'Flygon',
      types: ['Ground', 'Dragon'],
      heldItem: 'Soft Sand',
      description: 'Known as the "Desert Spirit." The beating of its wings stirs up sandstorms that hide it while its wings make a singing sound.'
    },
    {
      id: 376,
      name: 'Metagross',
      types: ['Steel', 'Psychic'],
      heldItem: 'Shell Bell',
      description: 'Formed when two Metang fuse together. Its four brains let it solve hard calculations faster than a supercomputer.'
    }
  ]);

  kanto = this.kantoPokemon.asReadonly();
  johto = this.johtoPokemon.asReadonly();
  hoenn = this.hoennPokemon.asReadonly();

  regionSummary = computed(() => [
    { name: 'Kanto', route: '/kanto', count: this.kantoPokemon().length },
    { name: 'Johto', route: '/johto', count: this.johtoPokemon().length },
    { name: 'Hoenn', route: '/hoenn', count: this.hoennPokemon().length }
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
