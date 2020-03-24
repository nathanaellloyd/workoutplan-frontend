import React from "react";
import Card from "./components/Cards/Card";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = ({}) => (
<Router> 
        <Header />
        <Card title="Day 1" />
        <Card title="Day 2" />
        <Card title="Day 3" />
        <Card title="Day 4" />
        <Card title="Day 5" />
        <Card title="Day 6" />
        <Card title="Day 7" />
</Router>
);

export default App;