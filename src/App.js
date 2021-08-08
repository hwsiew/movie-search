import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import { useMovieSearch } from './hooks';

/**
 * Logo Component
 */
const Logo = function (){
  return (
    <div className="flex flex-col text-heading font-bold leading-4 inline-block" >
      <span className="text-primary">hey</span>
      <span className="text-secondary">cinema</span>
    </div>
  );
}

/**
 * App Component
 */
function App() {

  // to randomly generate the initial page
  let keywrods = ['fast', 'ghost', 'police', 'impossible', 'fire', 'lie', 'high', 'gun', 'flight', 'sky'];
  // movie title to search
  let [ query, setQuery ] = useState(keywrods[Math.floor((Math.random() * 10))]);
  // current page
  let [ page, setPage ] = useState(1);
  // query omdbapi
  let [ data, status ] = useMovieSearch({query, page}); 

  /**
   * Callback when search is trigger by clicking button or Enter
   * @param {Event} e 
   * @param {string} query 
   */
  const handleSearch = (e, query) => {
    setPage(1); // reset page to 1
    setQuery(query);
  };

  return (
    <div className="h-full w-full">
      <AppBar elevation={2} className="rounded-bl-md rounded-br-md p-3 box-border w-full">
        <Logo />
        <div className="flex-grow"></div>
      </AppBar>
      <div className='m-6'>
        <div className="flex float-right mb-4">
          <SearchBar elevation={2} className="rounded-md p-2" onSearch={handleSearch} placeholder="search movies" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 clear-right">

          { status === 'loading' && 
            <div> loading... </div>
          }

          { status === 'success' && 
            ( data.Response === 'True' ?
              data.Search.map(movie => 
                <Card 
                  key={movie.imdbID}
                  title={movie.Title} 
                  subtitle={movie.Year} 
                  image={movie.Poster}></Card>
              ) : 
              <div> {data.Error} </div>
            )
          }

          { status === 'error' && 
            <div className="text-red-400">Failed to fetch data!</div> 
          }
          
        </div>

        {
          status === 'success' && data.Response === 'True' &&
          <Pagination 
            total={Math.ceil(data.totalResults/10)} 
            display={10} 
            active={page} 
            onClick={(e, page) => setPage(page)}
          />
        }
      </div>
    </div>
  );
}

export default App;
