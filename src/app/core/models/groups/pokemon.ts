import { NamedAPIResource } from '../utility/common-models';

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
}

export interface PokemonSprites {
    other: {
        'official-artwork': {
            front_default: string;
            front_shiny: string;
        };
    };
}

export interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}
