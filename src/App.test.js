import { render, screen } from '@testing-library/react';
import App from './App';
import { 
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();

it('renders appbar with logo', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  const logoElement1 = screen.getByText(/hey/i);
  const logoElement2 = screen.getByText(/cinema/i);
  expect(logoElement1).toBeInTheDocument();
  expect(logoElement2).toBeInTheDocument();
});
