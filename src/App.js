import React from "react";
import Page1Card from "./components/Cards/Page1Card";
import Page2Card from "./components/Cards/Page2Card";
import Header from "./components/Header";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ({ }) => (
        <Router>
                <Header />
                <Switch>
                        <Route path="/">
                                <main className="cards">
                                        <Page1Card title="Day 1" />
                                        <Page1Card title="Day 2" />
                                        <Page1Card title="Day 3" />
                                        <Page1Card title="Day 4" />
                                        <Page1Card title="Day 5" />
                                        <Page1Card title="Day 6" />
                                        <Page1Card title="Day 7" />
                                </main>
                        </Route>

                        <Route path="/exercise/day1" />
                        
                        <Error />
                </Switch>
        </Router>
);

export default App;