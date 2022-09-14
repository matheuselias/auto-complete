import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AutoComplete from './index';
import suggestions from './mock';

describe('<AutoComplete />', () => {
  it('should render AutoComplete', () => {
    const onChange = jest.fn();
    render(
      <AutoComplete
        suggestions={suggestions}
        onChange={onChange}
        loading={false}
        error={''}
      />,
    );
    expect(screen.getByText(/Type to search a pokemon/i)).toBeInTheDocument();
    userEvent.tab();
    expect(
      screen.getByText(/There's no suggestions to show/i),
    ).toBeInTheDocument();
  });
});
