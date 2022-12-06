import './App.css';
import CampsitesDeirectoryPage from '../src/pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
     <CampsitesDeirectoryPage />
     <Footer/>
    </div>
  );
}

export default App;
