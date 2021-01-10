import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';


import Routes from './Routes';


function App() {
  return (
    <div>
      <>
       <Routes />
       <ToastContainer />
      </>
    </div>
  );
}

export default App;
