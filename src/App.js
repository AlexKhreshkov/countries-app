import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CountryDetail from './pages/CountryDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/country/:name' element={<CountryDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
