import React from 'react';

import TextField from 'components/TextField';
import SuggestionsList from 'components/SuggestionsList';
import './styles.css';

type AutoCompleteProps = {
  onChange: (value: string) => void;
  suggestions: { name: string; id: number }[] | null;
  loading: boolean;
  error?: string | null;
};

const AutoComplete = ({
  onChange,
  suggestions,
  loading,
  error,
}: AutoCompleteProps) => {
  const [query, setQuery] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const onInputFocus = () => {
    setShowSuggestions(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.relatedTarget) {
      setShowSuggestions(false);
    }
  };

  const onInputChange = (value: string) => {
    setQuery(value);

    onChange(value);
  };

  return (
    <div className="auto-complete">
      <label htmlFor="pokemon">Type to search a pokemon</label>
      <TextField
        id="pokemon"
        onInputChange={onInputChange}
        onBlur={onBlur}
        initialValue={query}
        onFocus={onInputFocus}
        placeholder="Ex: Pikachu"
        loading={loading}
      />

      {showSuggestions ? (
        <SuggestionsList
          highlight={query}
          suggestions={query ? suggestions : null}
        />
      ) : null}

      {error ? <span>{error}</span> : null}
    </div>
  );
};

export default AutoComplete;
