import { NavLink } from 'react-router-dom';
import styles from './RepoPage.module.css';

const RepoPage = ({ repo }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header__name}>
                    <NavLink to='/card'>{repo.display_name}</NavLink>
                </div>
                <div className={styles.date}>{repo.updated_at}</div>
            </div>
            <div className={styles.header__text}>{repo.short_description}</div>
            <div className={styles.description}>{repo.description}</div>
        </div>
    );
};

export default RepoPage;
