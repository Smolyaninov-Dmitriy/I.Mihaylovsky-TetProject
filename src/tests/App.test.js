import { render, screen, test, expect } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test app/i);
  expect(linkElement).toBeInTheDocument();
});