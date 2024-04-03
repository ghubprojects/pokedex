import { NamedAPIResource } from '../utility/common-models';

export interface ChainLink {
    is_baby: boolean;
    species: NamedAPIResource;
    evolves_to: ChainLink[];
}
