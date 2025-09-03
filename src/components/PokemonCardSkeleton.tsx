import { Card, Skeleton } from 'antd';

const PokemonCardSkeleton = () => {
  return (
    <Card
      className="relative w-64 overflow-hidden"
      style={{
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      }}
      cover={
        <div className="flex h-48 w-full items-center justify-center bg-gray-100">
          <Skeleton.Avatar size={120} shape="square" />
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-row items-center justify-between">
          <Skeleton.Input style={{ width: 120, height: 24 }} active />
          <Skeleton.Avatar size="small" />
        </div>
        <div className="flex gap-2">
          <Skeleton.Button size="small" />
          <Skeleton.Button size="small" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Skeleton.Input size="small" />
          <Skeleton.Input size="small" />
          <Skeleton.Input size="small" />
        </div>
        <div className="flex justify-between">
          <Skeleton.Input size="small" style={{ width: 60 }} />
          <Skeleton.Input size="small" style={{ width: 60 }} />
        </div>
      </div>
    </Card>
  );
};

export default PokemonCardSkeleton;
