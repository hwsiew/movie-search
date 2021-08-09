import { useQuery } from 'react-query';

export default function useMovieSearch ( { query , page } ) {

	let { data, status } = useQuery( [query, page], () => {

		let params = {
			apikey: '3bedb77a', // WARNING! You should never hardcoded your credential on client side, here is for the simplicity sake only.
			s: query,
			page
		};

		let queryStr = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key]) ).join('&');

    return fetch(`https://www.omdbapi.com/?${queryStr}`).then(res => res.json());
  });

	return [data, status];

}