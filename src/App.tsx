import React from 'react';

import AutoComplete from 'components/AutoComplete';
import useAsync from 'hooks/use-async';
import './App.css';

const MIN_SEARCH_LENGTH = 2;

function App() {
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const getSuggestions = () => {
    return fetch(`${process.env.REACT_APP_URL}/pokemons?name=${query}`).then(
      (response) => response.json(),
    );
  };
  const {
    execute,
    status,
    value: suggestions,
    error,
  } = useAsync<{ name: string; id: number }[] | []>(getSuggestions);

  const onChange = (value: string) => {
    setQuery(value);
  };

  React.useEffect(() => {
    if (!query || query.length < MIN_SEARCH_LENGTH) return;

    const handler = setTimeout(() => {
      execute();
    }, 250);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className="app">
      <AutoComplete
        onChange={onChange}
        suggestions={suggestions}
        loading={status === 'pending'}
        error={error}
      />
    </div>
  );
}

export default App;
