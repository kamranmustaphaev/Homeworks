import Icon from "./components/Icons/Icon";
import Header from './components/Header/Header';
import './App.css'
import Actual from "./components/Actual/Actual";
import CarsContainer from "./components/CarsContiner";
import Footer from "./components/Footer";
function App() {
  return (
    <>
   <div>
    <Icon />
   </div>
   <div>
    <Header />
   </div>
   <div>
    <Actual/>
    <CarsContainer/>
    <Footer/>
   </div>
   </>
  );
}

export default App;
