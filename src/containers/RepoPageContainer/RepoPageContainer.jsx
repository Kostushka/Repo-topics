import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRepo } from '../../store/reducers/repoReducer';
import RepoPage from '../../components/RepoPage/RepoPage';
import styles from './RepoPageContainer.module.css';

const RepoPageContainer = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repo.items);
    useEffect(() => {
        dispatch(getRepo());
    }, []);
    return (
        <div className={styles.wrapper}>
            {repos.map((repo) => (
                <RepoPage key={repo.name} repo={repo} />
            ))}
        </div>
    );
};

export default RepoPageContainer;
