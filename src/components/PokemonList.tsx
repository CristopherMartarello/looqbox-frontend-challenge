import { Row, Col, Spin, Empty } from 'antd';
import PokemonCard from './PokemonCard';
import { useGetPokemonListDetails } from '../hooks/data/use-get-pokemon-list-details';
import type { NamedAPIResource, Pokemon } from '../types/pokemon';

interface PokemonListProps {
  pokemons: NamedAPIResource[];
  loading?: boolean;
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonList = ({ pokemons, onPokemonClick }: PokemonListProps) => {
  const results = useGetPokemonListDetails(pokemons);

  const isLoading = results.some((r) => r.isLoading);
  const hasError = results.some((r) => r.isError);

  const pokemonData = results.map((r) => r.data).filter(Boolean);

  if (isLoading) return <Spin size="large" tip="Carregando Pokémons..." />;

  if (hasError || pokemonData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Empty
          description={`Nenhum Pokémon encontrado para essa pesquisa.`}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    );
  }

  return (
    <Row gutter={[24, 24]}>
      {pokemonData.map((pokemon) => (
        <Col key={pokemon!.id} xs={24} sm={12} md={8} lg={6}>
          <PokemonCard
            pokemon={pokemon!}
            onClick={onPokemonClick}
            hasError={hasError}
            isLoading={isLoading}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
