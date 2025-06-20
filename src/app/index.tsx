import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import { Store } from './store';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <Routes />
      </Provider>
    </QueryClientProvider>
  );
}
