import React from 'react';
import './App.css';

import Navbar from './component/navbar'
import EmployeeList from './component/employeelist';
import {EmployeeProvider} from './context';
import NewEmployee from './component/newemployee';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeProvider>
          <EmployeeList />
          <NewEmployee />
      </EmployeeProvider>
    </div>
  );
}

export default App;
