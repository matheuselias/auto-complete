import HighlitedText from 'components/HighlitedText';
import './styles.css';

type SuggestionsListProps = {
  suggestions: { name: string; id: number }[] | null;
  highlight?: string;
};

const SuggestionsList = ({
  suggestions,
  highlight = '',
}: SuggestionsListProps) => {
  return (
    <div className="suggestion">
      {!!suggestions && suggestions.length ? (
        <ul>
          {suggestions.map(({ name, id }) => (
            <li key={id}>
              <HighlitedText text={name} highlight={highlight} />
            </li>
          ))}
        </ul>
      ) : (
        <span className="no-suggestion">There's no suggestions to show</span>
      )}
    </div>
  );
};

export default SuggestionsList;
