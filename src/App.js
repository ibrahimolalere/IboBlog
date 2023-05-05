import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage";
import SignIn from "./components/auth/SignInPage";
import SignUp from "./components/auth/SignUp";
import Blogs from "./components/BlogsPage";
import Blog from "./components/BlogPage";
import Auth from "./components/layout/Auth";
import NavBar from "./components/utils/NavBar";
import Default from "./components/layout/Default";
import EditPlogPage from "./components/EditBlogPage";
import EditBlogPage from "./components/EditBlogPage";
import CreateBlogPage from "./components/CreateBlogPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Default>
                <Home />
              </Default>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/blogs"
            element={
              <Default>
                <Auth>
                  <Blogs />
                </Auth>
              </Default>
            }
          />
          <Route
            path="/blogs/:blogId"
            element={
              <Default>
                <Auth>
                  <Blog />
                </Auth>
              </Default>
            }
          />
          <Route
            path="/blogs/:blogId/edit"
            element={
              <Default>
                <Auth>
                  <EditBlogPage />
                </Auth>
              </Default>
            }
          />
          <Route
            path="/blogs/create"
            element={
              <Default>
                <Auth>
                  <CreateBlogPage />
                </Auth>
              </Default>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//1. create routes
//2. create the components and import in app.js
//3. I had issues -compilling errors. and in the end discivered I needed to import browser router and wrap it arround the routes
