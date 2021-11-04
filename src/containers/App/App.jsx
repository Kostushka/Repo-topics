import { BrowserRouter, Route } from 'react-router-dom';
import RepoPageContainer from '../RepoPageContainer';

import styles from './App.module.css';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <Route path='/' component={RepoPageContainer} />
            </div>
        </BrowserRouter>
    );
}

export default App;
