import React, {useContext, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import logo from '@logos/logo_yard_sale.svg';
import logo2 from '@logos/gin.jpeg';
import iconmenu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
	//const {state, toggleOrder, toggleMenu} = useContext(AppContext);
	
	const[toggleMenu, setToggleMenu] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext (AppContext);

	const handleToggleMenu = () => {
		setToggleMenu (!toggleMenu);
	}
	
	return (
		<nav className={styles.nav}>
			<Image src={iconmenu} alt="menu" className={styles.menu} /> 
			<div className={styles['navbar-left']}>
				<Link href="/">
					<Image src={logo} alt="logo" className={styles['nav-logo']} />   
				</Link>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>    {/* En los que tienen guión hay que asignar de esta formar   */}
				<ul>
					<li className={styles['navbar-email']} onClick={handleToggleMenu}>
						50Galones@ginpatagonico.com
						</li>
					<li className={styles['navbar-shopping-cart']} 
						onClick={() => setToggleOrders(!toggleOrders)}>
						<Image src={shoppingCart} alt="shopping cart" />
						{ state.cart.length > 0  ? <div> {state.cart.length} </div> : null }
					</li>
				</ul>
			</div>
			{toggleMenu ? <Menu/> : null}
			{toggleOrders ? <MyOrder/> : null}
		</nav>
	);
}

export default Header;