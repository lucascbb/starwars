import React from 'react';
import { render, screen, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { response, starWars } from './Helpers/Mock';

describe('TABLE', () => {
  test('1- Verificar se ao carregar a aplicação contem as cabecas de chave da tabela', async () => {
    render(<App />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Surface Water')).toBeInTheDocument();
    expect(screen.getByText('Films')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Edited')).toBeInTheDocument();
    expect(screen.getByText('URL')).toBeInTheDocument();

  });

  test('1.1 - Verificar se ao carregar a aplicação contem inputs e buttons', async () => {
    render(<App />);

    const filtrar = screen.getByRole('button', { name: 'Filtrar' });
    expect(filtrar).toBeInTheDocument();

    const removeFiltros = screen.getByRole('button', { name: 'Remove Filtros' });
    expect(removeFiltros).toBeInTheDocument();

    const nameFilter = screen.getByTestId('name-filter');
    expect(nameFilter).toBeInTheDocument();

    const btnFilter = screen.getByTestId('button-filter');
    expect(btnFilter).toBeInTheDocument();

    const btnRemoveFilters = screen.getByTestId('button-remove-filters');
    expect(btnRemoveFilters).toBeInTheDocument();
    
    const columnFilters = screen.getByTestId('column-filter');
    expect(columnFilters).toBeInTheDocument();

    const comparisonFilter = screen.getByTestId('comparison-filter');
    expect(comparisonFilter).toBeInTheDocument();

  });

  test('1.2- Verificar se ao carregar a aplicação contem o retorno das API renderizado', async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText("Tatooine")).toBeInTheDocument(),{timeout: 5000});
    await waitFor(() => expect(screen.getAllByTestId("planet-name")).toHaveLength(10),{timeout: 5000});
  }, 10000);

  test('1.3- Verificar se filtra por nome', async () => {
    render(<App />);

    const filtrar =  screen.getByTestId('name-filter');

    userEvent.type(filtrar, 'oo');
    await waitFor(() => expect(screen.getAllByTestId("planet-name")).toHaveLength(2),{timeout: 5000});
  });

  test('1.4- Verificar se ao carregar a aplicação aparece o Carregando...', async () => {
    render(<App />);

    const loading = screen.getByText('Carregando...');
    expect(loading).toBeInTheDocument();

    const namePlanet = screen.queryByText('Tatooine');
    expect(namePlanet).not.toBeInTheDocument();

  }); 
  test('1.5- Verificar o que acontece caso a API de erro', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    console.log = jest.fn();
    await waitFor (() => expect(console.log).toHaveBeenCalledWith('ERROR API'), { timeout: 5000 });
  });
  test('1.6- Verificar o que acontece caso a API eh chamda', async () => {
    global.fetch = jest.fn(async () => ({json: async () => starWars}));
    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith("https://swapi.dev/api/planets/?page=1");

  });
  test('1.7- Testa o population e maior que', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['population']);
    userEvent.selectOptions(select[1], ['maior que']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '0');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);

    const removeONE = screen.getByRole('button', { name: 'Remover filtro' });
    userEvent.click(removeONE);
  });
  test('1.9- Testa o diameter e menor que', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['diameter']);
    userEvent.selectOptions(select[1], ['menor que']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '10000');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);

    const removeONE = screen.getByRole('button', { name: 'Remover filtro' });
    userEvent.click(removeONE);
  });
  test('1.9- Testa o orbital_period e igual a', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['orbital_period']);
    userEvent.selectOptions(select[1], ['igual a']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '402');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);

    const removeONE = screen.getByRole('button', { name: 'Remover filtro' });
    userEvent.click(removeONE);
  });
  test('2.0 - Testa o rotation_period e maior que', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['rotation_period']);
    userEvent.selectOptions(select[1], ['menor que']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '20');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);

    const filtrar =  screen.getByTestId('name-filter');
    userEvent.type(filtrar, 'Endor');

    const removeONE = screen.getByRole('button', { name: 'Remover filtro' });
    userEvent.click(removeONE);
  });
  test('2.0 - Testa o surface_water e maior que', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['surface_water']);
    userEvent.selectOptions(select[1], ['maior que']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '10');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);
  
    userEvent.selectOptions(select[0], ['population']);
    userEvent.selectOptions(select[1], ['menor que']);
    userEvent.type(numberInput, '1000000');

    userEvent.click(filtroBTN);

    const removeALL = screen.getByTestId('button-remove-filters');
    userEvent.click(removeALL);
  });
  test('2.0 - Testa o surface_water e maior que', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['surface_water']);
    userEvent.selectOptions(select[1], ['maior que']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '10');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);

    const removeONE = screen.getAllByRole('button', { name: 'Remover filtro' });
    userEvent.click(removeONE[0]);
  });
  test('2.0 - Testa o surface_water e maior que', async () => {
    global.fetch = jest.fn(async () => ({json: async () => response}));
    render(<App />);

    const select = screen.getAllByRole('combobox');
    userEvent.selectOptions(select[0], ['diameter']);
    userEvent.selectOptions(select[1], ['maior que']);

    const numberInput = screen.getByTestId('value-filter');
    userEvent.type(numberInput, '8900');

    const filtroBTN= screen.getByRole('button', { name: 'Filtrar' });
    userEvent.click(filtroBTN);

    userEvent.selectOptions(select[0], ['population']);
    userEvent.selectOptions(select[1], ['menor que']);

    userEvent.click(filtroBTN);
    const removeONE = screen.getAllByRole('button', { name: 'Remover filtro' });
    userEvent.click(removeONE[0]);
    userEvent.click(removeONE[0]);
  });
});
