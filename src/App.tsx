import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, ProductPage } from './pages';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
         </Routes>
      </Router>
   );
};

export default App;
