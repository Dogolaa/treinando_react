import styles from './Title.module.css';


const Title = () => {
    return (
        <div>
            <h1 className = {styles.my_title}> Olá, Mundo!</h1>
            <h2>Esse é um treino de CSS</h2>
        </div>
    );
}

export default Title;