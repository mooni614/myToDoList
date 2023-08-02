
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Header from './components/Header';
import './App.css';
import {Provider} from './Context';
import List from './components/List';
import Create from './components/Create';



function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      background: grey;
    }
  `;
  return (
    <Provider>
        <GlobalStyle />
        
        <Template>
          <Header />
        <List />
        <Create />
        </Template>
    </Provider>
  );
}

export default App;
