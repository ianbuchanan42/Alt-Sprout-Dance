import AppRoutes from './routes';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='app-content'>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
