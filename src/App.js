import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Blogs from './components/Blogs';
import Blog from './components/Blog';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blog/:blogId" element={<Blog/>}/>

      </Routes>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;



//1. create routes
//2. create the components and import in app.js
//3. I had issues -compilling errors. and in the end discivered I needed to import browser router and wrap it arround the routes

