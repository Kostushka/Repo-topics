import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import RepoCard from '../../components/RepoCard/RepoCard';
import RepoPageContainer from '../RepoPageContainer';

import styles from './App.module.css';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <Switch>
                    <Route path='/' exact component={RepoPageContainer} />
                    <Route path='/card' component={RepoCard} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
