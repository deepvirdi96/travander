import react from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Content.module.css';

const Content = (props) => {
    return (
        <div className={styles.main}>
            <Header />
            <div className="content__wrapper">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Content;