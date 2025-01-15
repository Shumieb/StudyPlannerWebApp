import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import StudyCardsPage from './Pages/StudyCardsPage';
import StudyCardPage from './Pages/StudyCardPage';
import AddNewStudyCardPage from './Pages/AddNewStudyCardPage';

function App() {

  const Layout = () => {
    return (
      <>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/study-cards",
          element: <StudyCardsPage />
        },
        {
          path: "/new-study-card",
          element: <AddNewStudyCardPage />
        },
        {
          path: "/study-card/:id",
          element: <StudyCardPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
