import { useState } from 'react';
import {Container } from './styles';

import { ReactComponent as BurguerIcon} from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon} from '../../assets/pizza.svg';
import { ReactComponent as SodaIcon} from '../../assets/soda.svg';
import { ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg';

import menuImg from '../../assets/menu.svg';

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
                    <li>
                        <a href="#" className='active'>
                            <BurguerIcon/>
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}

export default Sidebar;