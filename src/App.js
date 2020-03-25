import React from "react";
import Page1Card from "./components/Cards/Page1Card";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = ({ }) => (
        <Router>
                <Header />
                <main className="cards">
                        <Page1Card title="Day 1" />
                        <Page1Card title="Day 2" />
                        <Page1Card title="Day 3" />
                        <Page1Card title="Day 4" />
                        <Page1Card title="Day 5" />
                        <Page1Card title="Day 6" />
                        <Page1Card title="Day 7" />
                </main>
        </Router>
);

export default App;