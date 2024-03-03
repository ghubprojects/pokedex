import { NamedAPIResource } from '@core/interfaces/common/named-api-resource';

export interface ChainLink {
    is_baby: boolean;
    species: NamedAPIResource;
    evolves_to: ChainLink[];
}
