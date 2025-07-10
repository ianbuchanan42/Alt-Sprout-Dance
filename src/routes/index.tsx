import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Generator from '../pages/Generator';
import Settings from '../pages/Settings';

const user = false;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={user ? <Generator /> : <Home />} />
      <Route path='/generator' element={<Generator />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
