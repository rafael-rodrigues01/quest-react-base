import './App.css';
import { UppercaseAndColoredText, capitalize } from './components';
import Button from './components/button'

function App() {
  return (
    <div className="App">
      <h2>Desafio React base 1</h2>
      <UppercaseAndColoredText
        color='rgb(100, 20, 510, 2)'
        label={capitalize('posso colocar qualquer coisa aqui que vai ficar maiúsculo para o usuário')}
      >
      </UppercaseAndColoredText>

      <h2>Desafio React base 2</h2>

      <Button
        label={'This is a button'}
      >

      </Button>

      <Button />
      
    </div>
  );
}

export default App;
