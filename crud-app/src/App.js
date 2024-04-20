import logo from './logo.svg';
import './App.css';

import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import Codeforinterview from './components/Codeforinterview';
import Navbar from './components/Navbar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/" element={<Codeforinterview />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
