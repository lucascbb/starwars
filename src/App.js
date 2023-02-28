import React, { useState } from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import Footer from './Components/Footer';
import ThemeContext from './context/ThemeContext';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [col, setCol] = useState('population');
  const [sName, setsName] = useState('');
  const [sNum, setsNum] = useState(0);
  const [op, setOp] = useState('maior que');
  const [res, setRes] = useState(data);
  const [popu, setPopu] = useState(<option value="population">population</option>);
  const [orb, setOrb] = useState(<option value="orbital_period">orbital_period</option>);
  const [diam, setDiam] = useState(<option value="diameter">diameter</option>);
  const [rot, setRo] = useState(<option value="rotation_period">rotation_period</option>);
  const [suf, setSuf] = useState(<option value="surface_water">surface_water</option>);
  const [validation, setValidation] = useState(false);
  const [disabledBTN, setDisableBTN] = useState(false);
  const [filtro, setFiltro] = useState([]);

  return (
    <ThemeContext.Provider
      value={ { data,
        setData,
        col,
        setCol,
        sName,
        setsName,
        sNum,
        setsNum,
        op,
        setOp,
        res,
        setRes,
        popu,
        setPopu,
        orb,
        setOrb,
        diam,
        setDiam,
        rot,
        setRo,
        suf,
        setSuf,
        validation,
        setValidation,
        disabledBTN,
        setDisableBTN,
        filtro,
        setFiltro,
      } }
    >
      <main>
        <Header />
        <Table />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
