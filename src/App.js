import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './navigation-bar';
import Home from './home/home';
import ErrorPage from './commons/errorhandling/error-page';
import styles from './commons/styles/project-style.css';


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className={styles.back}>
                <Router>
                    <div>
                        <NavigationBar />
                        <Switch>
                            <Route exact path='/' render={() => <Home />} />
                            <Route exact path='/error' render={() => <ErrorPage />} />
                            <Route render={() => <ErrorPage />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
