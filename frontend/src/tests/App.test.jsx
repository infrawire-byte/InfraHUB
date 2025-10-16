import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App.jsx';

describe('App shell', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
