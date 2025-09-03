import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import router from './lib/router';
import { andtConfig } from './lib/antd';
import { queryClient } from './lib/query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={andtConfig}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
