import logo from './logo.svg';
import './App.css';

import Header from './component/Header';
import Subheader from './component/Subheader';
import Counter from './component/Counter';
// what is work of virtual dom in react ?
// what is component in react ?`
//what is functional component?
// what is babel?
// what is jsx ?
// how to get js values inside html tags?
// how to create your own custom component ?
// what is react fragment?
// why do you write import react from react?
// what is use of export default?
// Notes : App.js is parent for rendering all your custom component;

// export default allows only one kind of funtion to be export by this method .
// it bascially allows us to keep only singlle logic in a single file

// React functional hooks -> functional comp.
// UseState()

function App() {
  
  return (
    // react fragment
    <>

      
      <Header />
      {/* <Subheader/> */}
      {/* <Counter/> */}
    </>
  );
}

export default App;



{/* <div id="root"> 
<div class="app">
  <div>
    this is custom component
  </div>
  <div className='header'>
    header
  </div>
</div>

</div> */}

// index.js -> app.js -> we are redering our cutom component