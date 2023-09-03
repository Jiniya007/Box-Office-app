import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import { GlobalTheme } from './theme.jsx'
import { QueryClientProvider} from '@tanstack/react-query';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Show from './Pages/Show';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home/>} />
              <Route path="/starred" element={<Starred/>} />
            </Route>

            <Route path="/show/:showId" element={<Show/>} />

            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
    </>
  );
}

export default App;