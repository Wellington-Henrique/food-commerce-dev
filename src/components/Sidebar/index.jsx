import { useState } from 'react';
import {Container } from './styles';
import { NavLink } from 'react-router-dom';

import { ReactComponent as BurguerIcon} from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon} from '../../assets/pizza.svg';
import { ReactComponent as SodaIcon} from '../../assets/soda.svg';
import { ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg';

import menuImg from '../../assets/menu.svg';
import MenuLink from '../MenuLink';

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Container isMenuOpen={isMenuOpen}>
            <button type='button' onClick={() => handleToggleMenu()}>
                <img src={menuImg} alt="Abrir e fechar menu"/>
            </button>

            <nav>
                <ul>
                    <MenuLink path='/' Icon={BurguerIcon} title='Burger'/>
                    <MenuLink path='/pizzas' Icon={PizzaIcon} title='Pizzas'/>
                    <MenuLink path='/drinks' Icon={SodaIcon} title='Bebidas'/>
                    <MenuLink path='/ice-creams' Icon={IceCreamIcon} title='Sorvetes'/>
                </ul>
            </nav>
        </Container>
    );
}

export default Sidebar;