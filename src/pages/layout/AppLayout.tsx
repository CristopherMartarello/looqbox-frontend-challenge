import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Pokeball from '../../assets/pokeball.svg';

const { Header, Content, Footer } = Layout;

export default function AppLayout() {
  const { token } = theme.useToken();

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        className="flex items-center shadow-md"
        style={{
          backgroundColor: token.colorPrimary,
        }}
      >
        <img src={Pokeball} alt="Pokeball" className="mr-4 h-12 w-12" />
        <div className="text-2xl font-bold text-white">
          <h1>Pokedex</h1>
        </div>
      </Header>

      <Content
        className="p-6"
        style={{
          backgroundColor: token.colorBgContainer,
        }}
      >
        <Outlet />
      </Content>

      <Footer
        className="flex justify-center"
        style={{
          color: token.colorTextSecondary,
        }}
      >
        Pokedex | Looqbox ©{new Date().getFullYear()} Created by Cristopher
        Martarello
      </Footer>
    </div>
  );
}
