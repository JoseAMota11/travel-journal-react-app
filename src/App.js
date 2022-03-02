import './App.css';
import Navbar from "./components/Navbar";
import Data from "./Data";
import Main from "./components/MainContent";
// console.log(Data)

function App() {
  const main = Data.map((data) => {
    return (
      <Main 
        key = {data.id}
        data = {data}
      />
    );
  })
  
  return (
    <div>
      <Navbar />
      <div className='body'>
        {main}
      </div>
    </div>
    );
}

export default App;
