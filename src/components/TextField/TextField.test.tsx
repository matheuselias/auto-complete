import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from './index';

describe('<TextField', () => {
  it('should render with placeholder', () => {
    render(<TextField placeholder="Ex: Pikachu" />);

    expect(screen.getByPlaceholderText('Ex: Pikachu')).toBeInTheDocument();
  });

  it('should render with spinner', () => {
    render(<TextField loading={true} />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should changes its value when typing', async () => {
    const onInput = jest.fn();

    render(<TextField onInput={onInput} id="TextField" />);

    const input = screen.getByRole('textbox');
    const text = 'text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });

  it('should be accessible by tab', () => {
    render(<TextField id="TextField" />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
