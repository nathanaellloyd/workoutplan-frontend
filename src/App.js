import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardWrapper from "./components/DayCardWrapper";
import ExerciseCardWrapper from "./components/ExerciseCardWrapper"


const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <CardWrapper/>
            </Route>

            <Route exact path="/days/:id" render={({ match }) => (
                <ExerciseCardWrapper day={match.params.id} />
            )} />

            <Error />
        </Switch>
        <Footer />
    </Router>
);

export default App;