import { Typography } from 'antd';

const { Text } = Typography;

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col rounded-lg bg-gray-50 p-2">
    <Text type="secondary" className="text-xs font-semibold">
      {label}
    </Text>
    <Text className={`font-semibold`}>{value}</Text>
  </div>
);

export default StatCard;
