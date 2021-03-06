import react from 'react';
import styles from './Content.module.css';

const Content = (props) => {
    return (
        <div className={styles.main}>
            <div className="content__wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default Content;