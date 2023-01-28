import Sidebar from '../../components/Sidebar';
import { Container } from './styles';

import logoImg from '../../assets/logo.svg';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>
        <img src={logoImg} alt="" />
        <Outlet/>
      </section>
    </Container>
  )
}
