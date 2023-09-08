import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {Add_Ds_1,Add_DS_U} from "./Redux/Action"
function App() {

   let k=useSelector((State)=> State )
   let dispatch=useDispatch();

  return (
    <div>
     
     <h1> {k.ds}</h1>
     
     <button onClick={()=> dispatch(Add_Ds_1())}> ADD one book </button>
     <button onClick={()=> dispatch(Add_DS_U(4))}> ADD one book </button>


    </div>
  );
}

export default App;