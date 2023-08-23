"use client"
import { useState } from 'react';

const DbaQueries = () => {
  const [sqlResult, setSqlResult] = useState('');

  const generateSQLQueries = () => {
    const sqlQueriesTextarea = document.getElementById('sqlQueries');
    const sqlQueries = sqlQueriesTextarea.value.split(';');

    let result = '';

    for (const sqlQuery of sqlQueries) {
      if (sqlQuery.trim() !== '') {
        result += generateSQLQuery(sqlQuery.trim()) + ';\n';
      }
    }

    setSqlResult(result);
  };

  const generateSQLQuery = (sqlQuery) => {
    const currentDate = new Date().toLocaleDateString('en-GB');
    const ID = 'SEQ_esb_map.NextVal';

    let modifiedQuery = sqlQuery.replace(/to_date\('\d+\/\d+\/\d+'\,'DD\/MM\/RRRR'\)/, `sysdate`);

    modifiedQuery = modifiedQuery.replace(/'\d+'(?=\s*,)/, `${ID}`);

    return modifiedQuery;
  };

  return (
    <section>
      <h2>DBA Conversor</h2>
      <textarea id="sqlQueries" rows="10" cols="100"></textarea>
      <br />
      <button onClick={generateSQLQueries}>Generar</button>
      <div id="resultado">
        <textarea rows="10" cols="100" defaultValue={sqlResult}></textarea>
      </div>
    </section>
  );
}

export default DbaQueries;