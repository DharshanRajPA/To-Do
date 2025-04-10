import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Todosssss heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Todosssss/i);
  expect(headingElement).toBeInTheDocument();
});

