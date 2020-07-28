import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import DetalheProjeto from './Pages/DetalheProjeto';
import Projetos from './Pages/Projetos';
import Resumo from './Pages/Resumo';
import Sobre from './Pages/Sobre';

function App() {
  return (
    <div className="tela-toda">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/sobre">
            <Sobre />
          </Route>

          <Route exact path="/resumo">
            <Resumo />
          </Route>

          <Route exact path="/contato">
            <Contato />
          </Route>

          <Route exact path="/projetos">
            <Projetos />
          </Route>

          <Route exact path="/projetos/:id">
            <DetalheProjeto />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
