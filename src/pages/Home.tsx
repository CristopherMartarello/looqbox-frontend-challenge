import { message, Pagination, Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PokemonList from '../components/PokemonList';
import type { Pokemon } from '../types/pokemon';
import { useGetPokemons } from '../hooks/data/use-get-pokemons';
import { useState } from 'react';

const { Search } = Input;

const Home = () => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError, error } = useGetPokemons(20, 0, page);

  if (isError) {
    message.error('Erro ao carregar Pokémons');
    console.error(error);
  }

  const handlePokemonClick = (pokemon: Pokemon) => {
    console.log('Clicou no Pokémon:', pokemon.name);
  };

  const filteredPokemons =
    data?.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? [];

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-6 space-y-4">
        <Row gutter={[24, 24]} justify="start">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Search
              placeholder="Buscar por nome"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={setSearchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        <div className="text-center text-gray-600">
          {filteredPokemons.length > 0 ? (
            <span>
              Mostrando {filteredPokemons.length} de {data?.results.length ?? 0}{' '}
              Pokémons
            </span>
          ) : (
            <span>Nenhum Pokémon "{searchTerm}" encontrado</span>
          )}
        </div>
      </div>

      <PokemonList
        pokemons={filteredPokemons}
        loading={isLoading}
        onPokemonClick={handlePokemonClick}
      />

      <Pagination
        className="!mt-6"
        align="center"
        current={page + 1}
        pageSize={20}
        total={data?.count ?? 0}
        onChange={(p) => setPage(p - 1)}
      />
    </div>
  );
};

export default Home;
