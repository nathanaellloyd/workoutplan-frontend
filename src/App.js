import React from "react";
import Page1Card from "./components/Cards/Page1Card";
import Page2Card from "./components/Cards/Page2Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ({ }) => (
        <Router>
                <Header />
                <Switch>
                        <Route exact path="/">
                                <main className="cards">
                                        <Page1Card title="Day 1" id="1" />
                                        <Page1Card title="Day 2" id="2" />
                                        <Page1Card title="Day 3" id="3" />
                                        <Page1Card title="Day 4" id="4" />
                                        <Page1Card title="Day 5" id="5" />
                                        <Page1Card title="Day 6" id="6" />
                                        <Page1Card title="Day 7" id="7" />
                                </main>
                        </Route>

                        <Route path="/days/:id" render={({ match }) => (
                        <>
                        <Page2Card day={match.params.id} />
                        <Page2Card day={match.params.id} />
                        <Page2Card day={match.params.id} />
                        <Page2Card day={match.params.id} />
                        </>
                        )} />

                        <Error />
                </Switch>
                <Footer />
        </Router>
);

export default App;