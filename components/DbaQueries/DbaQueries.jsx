"use client";
import { useState } from "react";
import { handleClipboard } from "@/utils/scripts/clipboard";

const DbaQueries = () => {
  const [sqlResult, setSqlResult] = useState("");

  const generateSQLQueries = () => {
    const sqlQueriesTextarea = document.getElementById("sqlQueries");
    const sqlQueries = sqlQueriesTextarea.value.split(";");

    let result = "";

    for (const sqlQuery of sqlQueries) {
      if (sqlQuery.trim() !== "") {
        result += generateSQLQuery(sqlQuery.trim()) + ";\n";
      }
    }

    setSqlResult(result);
  };

  const generateSQLQuery = (sqlQuery) => {
    const ID = "SEQ_esb_map.NextVal";
    let modifiedQuery = sqlQuery.replace(
      /to_date\('\d+\/\d+\/\d+'\,'DD\/MM\/RRRR'\)/,
      `sysdate`
    );
    modifiedQuery = modifiedQuery.replace(/'\d+'(?=\s*,)/, `${ID}`);
    return modifiedQuery;
  };

  return (
    <section>
      <h2>DBA Conversor</h2>
      <div className="relative w-full max-w-6xl mt-2 mb-2">
        <div className="bg-black text-white p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Example Code:</span>
          </div>
          <div className="overflow-x-auto">
            <pre id="code" className="text-gray-300 whitespace-pre-line">
              <code>
                <span className="block">
                  Insert into ESB_MAP
                  (ID,SOURCE_SYSTEM,SOURCE_ATTR,SOURCE_VALUE,TARGET_SYSTEM,TARGET_ATTR,TARGET_VALUE,GROUP_MAP,CREATED)
                  values
                  ('177111','Portability','portabilityStatus','notifyPortInTimeWindow','AMDOCS','portabilityStatus','POWD','GENERAL',to_date('21/11/2016','DD/MM/RRRR'));
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>
      <textarea
        id="sqlQueries"
        rows={4}
        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        onClick={generateSQLQueries}
        className="mt-2 p-3 bg-blue-500 rounded-sm transition hover:bg-blue-400"
      >
        Generar
      </button>
      {sqlResult && (
        <div id="resultado">
          <div className="relative w-full max-w-6xl mt-2">
            <div className="bg-black text-white p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">INSERT Code:</span>
                <button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                  data-clipboard-target="#code"
                  onClick={() => handleClipboard(sqlResult)}
                >
                  Copy
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre id="code" className="text-gray-300">
                  <code>{sqlResult}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DbaQueries;
