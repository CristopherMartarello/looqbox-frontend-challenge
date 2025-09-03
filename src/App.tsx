import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import router from './lib/router';
import { andtConfig } from './lib/antd';

function App() {
  return (
    <ConfigProvider theme={andtConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
