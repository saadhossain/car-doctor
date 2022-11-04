import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routers/Routers';

function App() {
  const routes = routers
  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
