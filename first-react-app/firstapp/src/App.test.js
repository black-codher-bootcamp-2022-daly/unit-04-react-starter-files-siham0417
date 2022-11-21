import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders the header', () => {
  render(<Header name="Tobia" color="gigi" fruit="papay"/>);
  const name = screen.getByText(/seham/i);
  const color = screen.getByText(/pnk/i);
  const fruit = screen.getByText(/mango/i);
  expect(name).toBeInTheDocument();
  expect(color).toBeInTheDocument();
  expect(fruit).toBeInTheDocument();
});


test("renders the navbar", )