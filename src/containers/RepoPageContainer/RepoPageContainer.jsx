import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepo } from '../../store/reducers/repoReducer';
import RepoPage from '../../components/RepoPage/RepoPage';
import styles from './RepoPageContainer.module.css';

const RepoPageContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repo.items);
    const isFetching = useSelector((state) => state.repo.isFetching);
    useEffect(() => {
        dispatch(getRepo());
    }, []);
    const onSearchButtonClick = (e) => {
        dispatch(getRepo(inputValue));
        setInputValue('');
    };
    const onKeyDownPress = (e) => {
        if (e.key === 'Enter') {
            onSearchButtonClick(e);
        }
    };
    return (
        <div>
            <div className={styles.search__container}>
                <input
                    className={styles.search__input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={onKeyDownPress}
                    type='text'
                    placeholder='Input label name'
                />
                <button
                    className={styles.search__button}
                    onClick={onSearchButtonClick}
                >
                    Search
                </button>
            </div>
            {isFetching ? (
                <div className={styles.fetching}></div>
            ) : (
                repos.map((repo) => <RepoPage key={repo.name} repo={repo} />)
            )}
        </div>
    );
};

export default RepoPageContainer;
