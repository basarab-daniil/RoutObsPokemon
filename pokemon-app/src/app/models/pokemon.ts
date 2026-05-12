export interface PokemonTypeResponse
{
    results: PokemonType[];
}

export interface PokemonType
{
    name: string;
    url: string;
}

export interface PokemonByTypeResponse
{
    pokemon: PokemonEntry[];
}

export interface PokemonEntry
{
    pokemon: Pokemon;
}

export interface Pokemon
{
    name: string;
    url: string;
}

export interface PokemonDetail
{
    name: string;
    height: number;
    weight: number;
    base_experience: number;

    sprites:
    {
        front_default: string;
    };
}