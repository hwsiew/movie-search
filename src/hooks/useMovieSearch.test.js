import useMovieSearch from "./useMovieSearch";
import {renderHook} from '@testing-library/react-hooks';
import { 
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
	<QueryClientProvider client={queryClient}>
		{children}
	</QueryClientProvider>
);

it('should get response from API service', async function(){

	let params = {
		query: 'fast & furious',
		page: 1
	};
	
	const { result, waitFor } = renderHook(() => useMovieSearch(params), { wrapper });
	
	await waitFor(() => result.current[1] === 'success',  {timeout: 5000});

	expect(result.current[0].Response).toEqual("True");

});
