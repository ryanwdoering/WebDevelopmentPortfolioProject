// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
import favicon from './images/android-chrome-192x192.png'

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
import Home from './pages/home';
import Topics from'./pages/Topics';
import JobsPage from './pages/JobsPage';
import StaffPage from './pages/StaffPage';
import OrdersPage from './pages/OrdersPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddJobPageForm from './pages/AddJobPageForm';
import EditJobPageForm from './pages/EditJobPageForm';

// If your schema requires SHORT data input, then use the TABLE design.


// Define the function that renders the content in Routes, using State.
function App() {

  const [job, setJobToEdit] = useState([])

  return (
    <>
      <BrowserRouter>
        <header>
                <img src={favicon} alt=""></img>
                <h1>Ryan Doering</h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Topics" element={<Topics/>}/>
                    <Route path="/JobsPage" element={<JobsPage setJob={setJobToEdit}/>}/>
                    <Route path="/StaffPage" element={<StaffPage/>}/>
                    <Route path="/OrdersPage" element={<OrdersPage/>}/>

        
                     <Route path="/create" element={<AddJobPageForm />} />   
                     <Route path="/update" element={<EditJobPageForm jobToEdit={job} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Ryan Doering </p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;