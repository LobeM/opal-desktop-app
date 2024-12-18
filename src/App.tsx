import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Toaster } from 'sonner';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
