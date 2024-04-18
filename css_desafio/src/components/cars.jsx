import styles from './cars.module.css';

const cars = ({car}) => {

    return(
        <div className={styles.card}>
            <h1>Nome: {car.model}</h1>
            <p>Marca: {car.brand}</p>
            <p>Ano: {car.year}</p>
            <p>Preço: {car.price}</p>
        </div>
    )

}

export default cars;