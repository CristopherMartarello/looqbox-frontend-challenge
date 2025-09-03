import { Row, Col, Spin, Empty } from 'antd';
import PokemonCard from './PokemonCard';
import type { NamedAPIResource, Pokemon } from '../types/pokemon';

interface PokemonListProps {
  pokemons: NamedAPIResource[];
  loading?: boolean;
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonList = ({
  pokemons,
  loading = false,
  onPokemonClick,
}: PokemonListProps) => {
  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spin size="large" tip="Carregando Pokémons..." />
      </div>
    );
  }

  if (pokemons.length === 0) {
    return (
      <Empty
        description="Nenhum Pokémon encontrado"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  }

  return (
    <Row gutter={[24, 24]} justify="start">
      {pokemons.map((pokemon) => (
        <Col key={pokemon.name} xs={24} sm={12} md={8} lg={6} xl={6}>
          <div className="flex justify-center">
            <PokemonCard pokemonNamed={pokemon} onClick={onPokemonClick} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
