import { FooterHome } from '../../components/FooterHome.tsx';
import { Header } from '../../components/Header';
import { SeriesNavigator } from './components/SeriesNavigator';

export function Home() {
  return (
    <>
      <Header />
      <SeriesNavigator />
      <FooterHome />
    </>
  );
}
