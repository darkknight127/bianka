import { render, screen } from '@testing-library/react';
import App from './App';

test('renders valentine proposal text', () => {
  render(<App />);
  const textElement = screen.getByText(/Bjanka, will you be my/i);
  expect(textElement).toBeInTheDocument();
});
