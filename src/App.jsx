import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import StudyCardsPage from './Pages/StudyCardsPage';
import StudyCard from './Pages/StudyCard';

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
          path: "/study-card/:id",
          element: <StudyCard />
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
