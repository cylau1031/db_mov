import '@testing-library/jest-dom';
import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

afterEach(cleanup);

describe('The Header Component', () => {
  test('Should render the logo icon and site name', () => {
    render(<Router><Header /></Router>)
  
    expect(screen.queryByTestId('header-icon')).toBeTruthy()
    expect(screen.queryByTestId('header-name')).toBeTruthy()
    expect(screen.queryByTestId('header-name').textContent).toBe('All The Movies')
  })
  test('Should link icon and site name to home page', () => {
    render(<Router><Header /></Router>)
    expect(screen.queryByTestId('header-container').children[0].getAttribute('href')).toBe('/');
  }) 
})
