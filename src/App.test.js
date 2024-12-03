import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', async () => {
  render(<App />);
  await screen.findByText(/Kickstarter Projects/i);
  const headerElement = screen.getByText(/Kickstarter Projects/i);
  expect(headerElement).toBeInTheDocument();
});

test('Table row count', async () => {
  render(<App />);
  const rows = await screen.findAllByRole('row');

  expect(rows).toHaveLength(6); // including table header row
});
