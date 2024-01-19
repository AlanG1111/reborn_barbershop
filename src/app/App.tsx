import { useContext } from 'react';

import { LoaderContext } from './context/loader';
import { Loader } from './components/common/Loader';
import { Routes } from './routes';

import './App.scss';

function App() {
    const { isLoading } = useContext(LoaderContext);

    return (
        <>
            <main className="main">
                {isLoading && <Loader />}
                <Routes />
            </main>
        </>
    );
}

export default App;
