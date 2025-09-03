import { api } from '../lib/axios';
import type { Pokemon } from '../types/pokemon';

interface FetchPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface FetchPokemonListParams {
  limit: number;
  offset: number;
  page: number;
}

export async function getPokemonsList({
  limit = 20,
  offset = 0,
  page = 0,
}: FetchPokemonListParams) {
  const response = await api.get<FetchPokemonListResponse>('/pokemon', {
    params: {
      offset: page > 0 ? page * limit : offset,
      limit,
    },
  });

  return response.data;
}

export async function getPokemonDetails(pokemonUrl: string): Promise<Pokemon> {
  const response = await fetch(pokemonUrl);
  const pokemon = await response.json();
  return pokemon as Pokemon;
}
