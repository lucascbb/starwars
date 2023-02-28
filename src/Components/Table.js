import React, { useEffect, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Order from './Order';

function Table() {
  const { data, setData, col, setCol, sName, setsName,
    sNum, setsNum, op, setOp, res, setRes, popu, setPopu,
    orb, setOrb, diam, setDiam, rot, setRo, suf, setSuf,
    validation, setValidation, disabledBTN, setDisableBTN,
    filtro, setFiltro } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/?page=1')
      .then((response) => {
        if (!response.ok) { throw new Error('ERROR API'); }
        return response.json();
      })
      .then((dataStarWars) => {
        setData(dataStarWars.results);
        setRes([dataStarWars.results]);
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  }, []);

  const filterUsed = () => {
    if (col === 'population') {
      setPopu('');
    } else if (col === 'orbital_period') {
      setOrb('');
    } else if (col === 'diameter') {
      setDiam('');
    } else if (col === 'rotation_period') {
      setRo('');
    } else { setSuf(''); } setValidation(true);
  };

  const handleClick = () => {
    if (op === 'maior que') {
      setRes([...res, (res[res.length - 1] || []).filter((ele) => ele.name
        .includes(sName)).filter((ele2) => Number(ele2[col]) > sNum)]);
    } else if (op === 'menor que') {
      setRes([...res, (res[res.length - 1] || []).filter((ele) => ele.name
        .includes(sName)).filter((ele2) => Number(ele2[col]) < sNum)]);
    } else {
      setRes([...res, (res[res.length - 1] || []).filter((ele) => ele.name
        .includes(sName)).filter((ele2) => Number(ele2[col]) === Number(sNum))]);
    } filterUsed(); setFiltro([...filtro, `${col} ${op} ${sNum}`]);
    const x = document.getElementsByClassName('btnRemoveFiltro'); const y = x.length;
    if (y >= 1) { x[y - 1].disabled = true; } setDisableBTN(true);
  };
  const removeFilter = () => {
    setsNum(0); setDisableBTN(true); setRes([data]);
    document.getElementsByClassName('nameFiltro')[0].value = '';
    document.getElementsByClassName('colFiltro')[0].value = 'population';
    document.getElementsByClassName('opFiltro')[0].value = 'maior que';
    setPopu(<option value="population">population</option>);
    setOrb(<option value="orbital_period">orbital_period</option>);
    setDiam(<option value="diameter">diameter</option>);
    setRo(<option value="rotation_period">rotation_period</option>);
    setSuf(<option value="surface_water">surface_water</option>);
    document.getElementsByClassName('filtros')[0].innerHTML = '';
  };
  const remove1Filtro = ({ target }) => {
    const x = document.getElementsByClassName('btnRemoveFiltro');
    const filtros = document.getElementsByClassName('filtros')[0];
    const three = 3; const four = 4; const five = 5;
    const filtroRemove = target.parentNode.firstChild;
    const alvo = target.parentNode.firstChild.innerHTML;
    if (x.length >= 2) { x[x.length - 2].disabled = false; } setDisableBTN(true);
    if (alvo.includes('population')) {
      setPopu(<option value="population">population</option>);
    } else if (alvo.includes('orbital_period')) {
      setOrb(<option value="orbital_period">orbital_period</option>);
    } else if (alvo.includes('diameter')) {
      setDiam(<option value="diameter">diameter</option>);
    } else if (alvo.includes('rotation_period')) {
      setRo(<option value="rotation_period">rotation_period</option>);
    } else { setSuf(<option value="surface_water">surface_water</option>); }
    if (filtros.children[0].children[0] === filtroRemove) {
      setRes(res.splice(0, 1));
    } else if (filtros.children[1].children[0] === filtroRemove) {
      setRes(res.splice(0, 2));
    } else if (filtros.children[2].children[0] === filtroRemove) {
      setRes(res.splice(0, three));
    } else if (filtros.children[3].children[0] === filtroRemove) {
      setRes(res.splice(0, four));
    } else { setRes(res.splice(0, five)); }
    target.parentNode.remove();
  };
  return (
    <div>
      <section className="nameFiltroPai">
        <input
          type="text"
          className="nameFiltro"
          data-testid="name-filter"
          onChange={ ({ target }) => { setsName(target.value); } }
        />
      </section>
      <section className="selectFiltroPai">
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
          disabled={ disabledBTN }
        >
          Filtrar
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeFilter }
        >
          Remove Filtros
        </button>
        <label htmlFor="coluna">
          Coluna
          <select
            id="coluna"
            className="colFiltro"
            data-testid="column-filter"
            value={ col }
            onChange={ ({ target }) => { setCol(target.value); } }
            onClick={ ({ target }) => { setCol(target.value); setDisableBTN(false); } }
          >
            {popu}
            {diam}
            {orb}
            {rot}
            {suf}
          </select>
        </label>
        <label htmlFor="operador">
          Operador
          <select
            id="operador"
            data-testid="comparison-filter"
            className="opFiltro"
            onChange={ ({ target }) => { setOp(target.value); } }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          name="filtros"
          type="number"
          data-testid="value-filter"
          value={ sNum }
          onChange={ ({ target }) => setsNum(target.value) }
        />
        <Order />
      </section>
      <section className="applyFiltroPai">
        <div className="filtros">
          { validation ? filtro.map((ele, key) => (
            <div key={ key } data-testid="filter">
              <p>{ ele }</p>
              <button type="button" onClick={ remove1Filtro } className="btnRemoveFiltro">
                Remover filtro
              </button>
            </div>
          )) : null }
        </div>
      </section>
      { res[res.length - 1] === undefined ? (<p>Carregando...</p>) : (null) }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { res[res.length - 1] === undefined ? (null)
            : (((res[res.length - 1] || []).filter((e) => e.name.toLowerCase()
              .includes(sName.toLowerCase()))
              .map((ele, i) => (
                <tr key={ i }>
                  <td data-testid="planet-name">{ele.name}</td>
                  <td>{ele.rotation_period}</td>
                  <td>{ele.orbital_period}</td>
                  <td>{ele.diameter}</td>
                  <td>{ele.climate}</td>
                  <td>{ele.gravity}</td>
                  <td>{ele.terrain}</td>
                  <td>{ele.surface_water}</td>
                  <td>{ele.population}</td>
                  <td>{ele.films[0]}</td>
                  <td>{ele.created}</td>
                  <td>{ele.edited}</td>
                  <td>{ele.url}</td>
                </tr>)))) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
