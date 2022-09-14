import { render, screen } from '@testing-library/react';

import Spinner from './index';

describe('<Spinner />', () => {
  it('should render Spinner', () => {
    render(<Spinner show />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should not render Spinner', () => {
    render(<Spinner />);
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
