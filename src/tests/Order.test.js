import React from 'react';
import { render, screen, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { response, starWars } from './Helpers/Mock';

describe('ORDER', () => {
  test('1- Verificar o que acontece caso a API de erro', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
    expect(orderBTN).toBeInTheDocument();

    const select = screen.getAllByRole('combobox');
    expect(select[2]).toBeInTheDocument();

    const asc = screen.getByLabelText("Crescente")
    expect(asc).toBeInTheDocument()

    const desc = screen.getByLabelText("Descrescente")
    expect(desc).toBeInTheDocument()

  });
  // test('1.1- Population + ASC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['population']);

  //   const asc = screen.getByLabelText("Crescente")
  //   expect(screen.getByLabelText("Crescente")).toBeInTheDocument()

  //   userEvent.click(asc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.2- Population + DESC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['population']);

  //   const desc = screen.getByLabelText("Descrescente")
  //   expect(desc).toBeInTheDocument()

  //   userEvent.click(desc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.3- Orbital + ASC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['orbital_period']);

  //   const asc = screen.getByLabelText("Crescente")
  //   expect(screen.getByLabelText("Crescente")).toBeInTheDocument()

  //   userEvent.click(asc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.4- Orbital + DESC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['orbital_period']);

  //   const desc = screen.getByLabelText("Descrescente")
  //   expect(desc).toBeInTheDocument()

  //   userEvent.click(desc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.5- Diameter + ASC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['diameter']);

  //   const asc = screen.getByLabelText("Crescente")
  //   expect(screen.getByLabelText("Crescente")).toBeInTheDocument()

  //   userEvent.click(asc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.6- Diameter + DESC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['diameter']);

  //   const desc = screen.getByLabelText("Descrescente")
  //   expect(desc).toBeInTheDocument()

  //   userEvent.click(desc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.7- Rotation + ASC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['rotation_period']);

  //   const asc = screen.getByLabelText("Crescente")
  //   expect(screen.getByLabelText("Crescente")).toBeInTheDocument()

  //   userEvent.click(asc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.8- Rotation + DESC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['rotation_period']);

  //   const desc = screen.getByLabelText("Descrescente")
  //   expect(desc).toBeInTheDocument()

  //   userEvent.click(desc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('1.9- Surface + ASC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['surface_water']);

  //   const asc = screen.getByLabelText("Crescente")
  //   expect(screen.getByLabelText("Crescente")).toBeInTheDocument()

  //   userEvent.click(asc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
  // test('2.0- Surface + DESC', async () => {
  //   global.fetch = jest.fn(async () => ({json: async () => response}));
  //   render(<App />);

  //   const select = screen.getAllByRole('combobox');
  //   userEvent.selectOptions(select[2], ['surface_water']);

  //   const desc = screen.getByLabelText("Descrescente")
  //   expect(desc).toBeInTheDocument()

  //   userEvent.click(desc);
    
  //   const orderBTN = screen.getByRole('button', { name: 'Ordenar' });
  //   expect(orderBTN).toBeInTheDocument();

  //   userEvent.click(orderBTN);
  // });
})