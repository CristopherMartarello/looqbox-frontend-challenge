import type { PokemonSprites } from '../types/pokemon';

interface SimpleSpritesGridProps {
  sprites: PokemonSprites;
}

const SimpleSpritesGrid = ({ sprites }: SimpleSpritesGridProps) => {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 text-center">
      <div className="rounded-2xl bg-gray-100 p-2 shadow-md">
        <img
          src={sprites.other?.showdown?.front_default ?? undefined}
          className="h-40 w-40 object-contain drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
      </div>
      <div className="rounded-2xl bg-gray-100 p-2 shadow-md">
        <img
          src={sprites.other?.showdown?.back_default ?? undefined}
          className="h-40 w-40 object-contain drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
      </div>
      <div className="rounded-2xl bg-gray-100 p-2 shadow-md">
        <img
          src={sprites.front_default ?? undefined}
          className="h-40 w-40 object-contain drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
      </div>
      <div className="rounded-2xl bg-gray-100 p-2 shadow-md">
        <img
          src={sprites.back_default ?? undefined}
          className="h-40 w-40 object-contain drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
      </div>
    </div>
  );
};

export default SimpleSpritesGrid;
