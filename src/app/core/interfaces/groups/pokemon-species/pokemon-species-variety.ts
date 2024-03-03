import { NamedAPIResource } from '@core/interfaces/common/named-api-resource';

export interface PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedAPIResource;
}
