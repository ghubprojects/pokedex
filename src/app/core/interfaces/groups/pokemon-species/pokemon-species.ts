import { APIResource } from '@core/interfaces/common/api-resource';
import { PokemonSpeciesVariety } from './pokemon-species-variety';

export interface PokemonSpecies {
    id: number;
    name: string;
    evolution_chain: APIResource;
    varieties: PokemonSpeciesVariety[];
}
