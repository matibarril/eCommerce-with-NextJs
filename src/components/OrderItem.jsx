import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import iconClose from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product} ) => {

	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image loader={() => product?.images[0]} src={product?.images[0]} alt={product?.title} width={100} height={100} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className={`${styles.pointer} ${styles['more-clickable-area']}`} src={iconClose} alt="close" onClick={() => handleRemove(product)}  /> 
		</div> 
	);
}

export default OrderItem;