import { useHistory } from 'react-router';
import styles from './Error.module.css';

const Error = () => {
    const history = useHistory();
    return (
        <>
            <button onClick={() => history.push('/')}>Go to Main Page</button>
        </>
    );
};

export default Error;
