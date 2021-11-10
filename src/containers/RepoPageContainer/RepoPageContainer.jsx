import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepo, setCurrentPage } from '../../store/reducers/repoReducer';
import RepoPage from '../../components/RepoPage/RepoPage';
import styles from './RepoPageContainer.module.css';
import { pagesCreator } from '../../utils/pagesCreator';
import { Redirect } from 'react-router';

const RepoPageContainer = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const repos = useSelector((state) => state.repo.items);
    const isFetching = useSelector((state) => state.repo.isFetching);
    const isFetchError = useSelector((state) => state.repo.isFetchError);
    const currentPage = useSelector((state) => state.repo.currentPage);
    const perPage = useSelector((state) => state.repo.perPage);
    const totalCount = useSelector((state) => state.repo.totalCount);

    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    pagesCreator(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepo(inputValue, perPage, currentPage));
    }, [currentPage]);

    if (isFetchError) {
        return <Redirect to='/error' />;
    }

    const onSearchButtonClick = (e) => {
        dispatch(setCurrentPage(1));
        dispatch(getRepo(inputValue, perPage, currentPage));
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
            <div className={styles.pages}>
                {pages.map((page, index) => (
                    <span
                        key={index}
                        className={
                            currentPage === page
                                ? styles.current__page
                                : styles.page
                        }
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RepoPageContainer;
