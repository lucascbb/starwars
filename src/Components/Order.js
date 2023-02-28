import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Order() {
  const { res, setRes } = useContext(ThemeContext);
  const [order, setOrder] = useState('population');
  const [ordering, setOrdering] = useState();
  const [orderBTN, setOrderBTN] = useState(true);

  const populaFunc = () => {
    const menosUm = -1;
    function popula(a, b) {
      if (Number(a.population) > Number(b.population)) { return menosUm; }
      if (Number(a.population) < Number(b.population)) { return 1; } return 0;
    } const sort = (res[res.length - 1] || []).sort(popula);
    const semUnknow = sort.filter((ele) => ele.population !== 'unknown');
    const comUnknow = sort.filter((ele2) => ele2.population === 'unknown');
    const ordenado = semUnknow.concat(comUnknow);
    setRes([...res, ordenado]);
  };

  const surfaceFunc = () => {
    const menosUm = -1;
    function surface(a, b) {
      if (Number(a.surface_water) > Number(b.surface_water)) { return menosUm; }
      if (Number(a.surface_water) < Number(b.surface_water)) { return 1; } return 0;
    }
    const sort1 = (res[res.length - 1] || []).sort(surface);
    const semUnknow1 = sort1.filter((ele) => ele.surface_water !== 'unknown');
    const comUnknow1 = sort1.filter((ele2) => ele2.surface_water === 'unknown');
    const ordenado1 = semUnknow1.concat(comUnknow1);
    setRes([...res, ordenado1]);
  };

  const orbitalFunc = () => {
    function orbital(a, b) {
      const menosUm = -1;
      if (Number(a.orbital_period) > Number(b.orbital_period)) { return menosUm; }
      if (Number(a.orbital_period) < Number(b.orbital_period)) { return 1; } return 0;
    }
    const sort2 = (res[res.length - 1] || []).sort(orbital);
    const semUnknow2 = sort2.filter((ele) => ele.orbital_period !== 'unknown');
    const comUnknow2 = sort2.filter((ele2) => ele2.orbital_period === 'unknown');
    const ordenado2 = semUnknow2.concat(comUnknow2);
    setRes([...res, ordenado2]);
  };

  const diameterFunc = () => {
    function diame(a, b) {
      const menosUm = -1;
      if (Number(a.diameter) > Number(b.diameter)) { return menosUm; }
      if (Number(a.diameter) < Number(b.diameter)) { return 1; } return 0;
    }
    const sort3 = (res[res.length - 1] || []).sort(diame);
    const semUnknow3 = sort3.filter((ele) => ele.diameter !== 'unknown');
    const comUnknow3 = sort3.filter((ele2) => ele2.diameter === 'unknown');
    const ordenado3 = semUnknow3.concat(comUnknow3);
    setRes([...res, ordenado3]);
  };

  const rotatioFunc = () => {
    const menosUm = -1;
    function rotati(a, b) {
      if (Number(a.rotation_period) > Number(b.rotation_period)) { return menosUm; }
      if (Number(a.rotation_period) < Number(b.rotation_period)) { return 1; } return 0;
    }
    const sort4 = (res[res.length - 1] || []).sort(rotati);
    const semUnknow4 = sort4.filter((ele) => ele.rotation_period !== 'unknown');
    const comUnknow4 = sort4.filter((ele2) => ele2.rotation_period === 'unknown');
    const ordenado4 = semUnknow4.concat(comUnknow4);
    setRes([...res, ordenado4]);
  };

  const populaFunc2 = () => {
    const menosUm = -1;
    function popula(a, b) {
      if (Number(a.population) < Number(b.population)) { return menosUm; }
      if (Number(a.population) > Number(b.population)) { return 1; } return 0;
    } const sort = (res[res.length - 1] || []).sort(popula);
    const semUnknow = sort.filter((ele) => ele.population !== 'unknown');
    const comUnknow = sort.filter((ele2) => ele2.population === 'unknown');
    const ordenado = semUnknow.concat(comUnknow);
    setRes([...res, ordenado]);
  };

  const surfaceFunc2 = () => {
    const menosUm = -1;
    function surface(a, b) {
      if (Number(a.surface_water) < Number(b.surface_water)) { return menosUm; }
      if (Number(a.surface_water) > Number(b.surface_water)) { return 1; } return 0;
    }
    const sort1 = (res[res.length - 1] || []).sort(surface);
    const semUnknow1 = sort1.filter((ele) => ele.surface_water !== 'unknown');
    const comUnknow1 = sort1.filter((ele2) => ele2.surface_water === 'unknown');
    const ordenado1 = semUnknow1.concat(comUnknow1);
    setRes([...res, ordenado1]);
  };

  const orbitalFunc2 = () => {
    function orbital(a, b) {
      const menosUm = -1;
      if (Number(a.orbital_period) < Number(b.orbital_period)) { return menosUm; }
      if (Number(a.orbital_period) > Number(b.orbital_period)) { return 1; } return 0;
    }
    const sort2 = (res[res.length - 1] || []).sort(orbital);
    const semUnknow2 = sort2.filter((ele) => `${ele}.${order}` !== 'unknown');
    const comUnknow2 = sort2.filter((ele2) => `${ele2}.${order}` === 'unknown');
    const ordenado2 = semUnknow2.concat(comUnknow2);
    setRes([...res, ordenado2]);
  };

  const diameterFunc2 = () => {
    function diame(a, b) {
      const menosUm = -1;
      if (Number(a.diameter) < Number(b.diameter)) { return menosUm; }
      if (Number(a.diameter) > Number(b.diameter)) { return 1; } return 0;
    }
    const sort3 = (res[res.length - 1] || []).sort(diame);
    const semUnknow3 = sort3.filter((ele) => ele.diameter !== 'unknown');
    const comUnknow3 = sort3.filter((ele2) => ele2.diameter === 'unknown');
    const ordenado3 = semUnknow3.concat(comUnknow3);
    setRes([...res, ordenado3]);
  };

  const rotatioFunc2 = () => {
    const menosUm = -1;
    function rotati(a, b) {
      if (Number(a.rotation_period) < Number(b.rotation_period)) { return menosUm; }
      if (Number(a.rotation_period) > Number(b.rotation_period)) { return 1; } return 0;
    }
    const sort4 = (res[res.length - 1] || []).sort(rotati);
    const semUnknow4 = sort4.filter((ele) => ele.rotation_period !== 'unknown');
    const comUnknow4 = sort4.filter((ele2) => ele2.rotation_period === 'unknown');
    const ordenado4 = semUnknow4.concat(comUnknow4);
    setRes([...res, ordenado4]);
  };

  const asc = () => {
    if (order === 'population') { populaFunc2(); }
    if (order === 'surface_water') { surfaceFunc2(); }
    if (order === 'orbital_period') { orbitalFunc2(); }
    if (order === 'diameter') { diameterFunc2(); }
    if (order === 'rotation_period') { rotatioFunc2(); }
  };

  const desc = () => {
    if (order === 'population') { populaFunc(); }
    if (order === 'surface_water') { surfaceFunc(); }
    if (order === 'orbital_period') { orbitalFunc(); }
    if (order === 'diameter') { diameterFunc(); }
    if (order === 'rotation_period') { rotatioFunc(); }
  };

  const orderClick = () => {
    if (ordering === 'DESC') { desc(); } else { asc(); } setOrderBTN(true);
  };
  return (
    <div>
      <label htmlFor="coluna">
        Ordenar
        <select
          data-testid="column-sort"
          value={ order }
          onChange={ ({ target }) => { setOrder(target.value); } }
          onClick={ ({ target }) => { setOrder(target.value); setOrderBTN(false); } }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="crescente">
        Crescente
        <input
          name="order"
          id="crescente"
          type="radio"
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={ ({ target }) => setOrdering(target.value) }
        />
      </label>
      <label htmlFor="decrescente">
        Descrescente
        <input
          name="order"
          id="decrescente"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={ ({ target }) => setOrdering(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ orderClick }
        disabled={ orderBTN }
      >
        Ordenar
      </button>
    </div>
  );
}

export default Order;
