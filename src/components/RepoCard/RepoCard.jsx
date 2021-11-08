import { useHistory } from 'react-router';
import styles from './RepoCard.module.css';

const RepoCard = () => {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <button onClick={() => history.goBack()} className={styles.button}>
                Back
            </button>
        </div>
    );
};

export default RepoCard;
