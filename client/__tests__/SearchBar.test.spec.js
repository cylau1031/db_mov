import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from '../SearchBar';

afterEach(cleanup);

describe('The SearchBar Component', () => {
  test('Should render search bar', () => {
    render(<Router><SearchBar /></Router>)
  
    expect(screen.queryByTestId('search-bar')).toBeTruthy();
  })
  test('Should render dropdown results when text is entered', async () => {
    const { container } = render(<Router><SearchBar /></Router>)
    const searchBar = screen.queryByTestId('search-bar');
    const input = searchBar.querySelector('input');
    await fireEvent.change(input, {target: {value: 'magic'}});
    const results = searchBar.querySelector('.results');
    expect(results).toBeTruthy();
  })
})
