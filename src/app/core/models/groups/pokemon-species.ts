import { APIResource, NamedAPIResource } from '../utility/common-models';

export interface PokemonSpecies {
    id: number;
    name: string;
    evolution_chain: APIResource;
    varieties: PokemonSpeciesVariety[];
}

export interface PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedAPIResource;
}
