import { render, screen } from '@testing-library/react';

import SuggestionsList from './index';
import suggestions from './mock';

describe('<SuggestionsList />', () => {
  it('should render SuggestionsList with no suggestions', () => {
    render(<SuggestionsList suggestions={null} />);

    expect(
      screen.getByText(/There's no suggestions to show/i),
    ).toBeInTheDocument();
  });

  it('should render SuggestionsList with suggestions', () => {
    render(<SuggestionsList suggestions={suggestions} />);

    expect(screen.getAllByRole('listitem').length).toBe(2);
  });
});
