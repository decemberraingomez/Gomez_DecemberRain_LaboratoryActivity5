import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private kantoPokemon = signal([
    {
      id: 226,
      name: 'Mantine',
      types: ['Water', 'Flying'],
      heldItem: 'Light Ball',
      description: 'A majestic, docile Water/Flying-type resembling a manta ray. It skims the open ocean waves and can glide over 300 feet into the air once it builds sufficient momentum.'
    },
    {
      id: 194,
      name: 'Wooper',
      types: ['Water', 'Ground'],
      heldItem: 'Charcoal',
      description: 'A cheerful, amphibious axolotl-like Pokémon. When on land, it coats its skin in a slippery, poisonous film to stay hydrated'
    },
    {
      id: 183,
      name: 'Marill',
      types: ['Water', 'Fairy'],
      heldItem: 'Spell Tag',
      description: 'A round "Aqua Mouse" Pokémon. Its fur naturally repels water, and its oil-filled tail keeps it safely afloat even in intense river currents.'
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
      id: 143,
      name: 'Snorlax',
      types: ['Normal'],
      heldItem: 'Leftovers',
      description: 'Spends its whole day eating and sleeping. Its stomach is so tough it can digest almost anything without getting sick.'
    },
    {
      id: 7,
      name: 'Squirtle',
      types: ['Bitter Berry'],
      heldItem: 'Magnet',
      description: 'The iconic Kanto starter. Its soft back swells and hardens after birth into a protective, hydrodynamic shell used to spray water.'
    },
    {
      id: 54,
      name: 'Psyduck',
      types: ['Water'],
      heldItem: 'Berry',
      description: 'A yellow, dazed duck-like Pokémon. It suffers from constant headaches; when its stress peaks, it accidentally unleashes potent psychokinetic powers.'
    },
    {
      id: 87,
      name: 'Dewgong',
      types: ['Water', 'Ice'],
      heldItem: 'NeverMeltIce',
      description: 'A sleek, white sea mammal. It thrives in freezing ocean waters, sleeping beneath shallow ice during the day and hunting gracefully at night.'
    },
    {
      id: 133,
      name: 'Eevee',
      types: ['Normal'],
      heldItem: 'Eevium Z',
      description: ' A small mammalian Pokémon beloved for its unstable genetic structure. This allows it to evolve into one of eight distinct "Eeveelutions" depending on its environment.'
    },
    {
      id: 35,
      name: 'Clefairy',
      types: ['Fairy'],
      heldItem: 'Moon Stone',
      description: 'A rare, magical Pokémon rumored to have come from the moon. It uses its small wings to float and gathers in mountain ranges to dance during full moons.'
    }
  ]);

  private hoennPokemon = signal([
    {
      id: 385,
      name: 'Jirachi',
      types: ['Steel', 'Psychic'],
      heldItem: 'Star Piece',
      description: 'A Mythical "Wish Pokémon." It hibernates for a thousand years, waking up for only seven days to grant any wishes written upon the tags on its head.'
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
