"use client";
import { useState } from "react";

const MapBm = () => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mapBm = document.getElementById("mapBm").value;
    //console.log("mapBm original", mapBm);

    if (mapBm.includes("getValueWithDefault")) {
      console.log(
        "Encontrado: getValueWithDefault",
        mapBm.includes("getValueWithDefault")
      );
    } else if (mapBm.includes("getValue")) {
      console.log("Encontrado: getValue", mapBm.includes("getValue"));
    } else {
      console.log("Texto no encontrado.");
    }

    const matches = mapBm.match(/"(.*?)"|'(.*?)'/g);
    const values = matches.map((match) => match.replace(/["']/g, ""));
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const anio = fechaActual.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const handleClipboard = (content) => {
      console.log('hola')
      navigator.clipboard.writeText(content).then(
        () => {
          /* clipboard successfully set */
          console.log('troden')

        },
        () => {
          /* clipboard write failed */
          console.log('error')

        },
      );
    }

    let copy

    setResult(
      <div className="resultado">
        {/** mapBm */}  
        <div className="relative w-full max-w-6xl mt-2">
          <div className="bg-black text-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">REQUEST Code:</span>
              <button
                className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                data-clipboard-target="#code"
                onClick={() => handleClipboard('prueba 123')}
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" className="text-gray-300">
                <code>
                  &lt;amd:getValueWithDefault
                  xmlns:amd="http://www.movistar.com.ar/ws/schema/amdocs"&gt;{" "}
                  <br />
                  &lt;amd:source_system&gt;{values[1]}
                  &lt;/amd:source_system&gt; <br />
                  &lt;amd:source_attr&gt;{
                    values[2]
                  }&lt;/amd:source_attr&gt; <br />
                  &lt;amd:target_system&gt;{values[4]}
                  &lt;/amd:target_system&gt; <br />
                  &lt;amd:source_value&gt;{
                    values[3]
                  }&lt;/amd:source_value&gt; <br />
                  &lt;amd:group&gt;{values[0]}&lt;/amd:group&gt; <br />
                  &lt;amd:defaultValue&gt;
                  {values[5] === undefined ? "string" : values[5]}
                  &lt;/amd:defaultValue&gt; <br />
                  &lt;/amd:getValueWithDefault&gt; <br />
                </code>
              </pre>
            </div>
          </div>
        </div>
        
        {/** select */}  
        <div className="relative w-full max-w-6xl mt-2">
          <div className="bg-black text-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">SELECT Code:</span>
              <button
                className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                data-clipboard-target="#code"
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" className="text-gray-300">
                <code>
                  select * from ESB_MAP where group_map='{values[0]}' and
                  source_system='{values[1]}' and source_attr='{values[2]}' and
                  source_value='{values[3]}' and target_system='
                  {values[4]}' and target_attr='INSERTE VALOR CORRECTO DE
                  target_attr';
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/** insert */}          
        <div className="relative w-full max-w-6xl mt-2">
          <div className="bg-black text-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">INSERT Code:</span>
              <button
                className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                data-clipboard-target="#code"
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" class="text-gray-300">
                <code>
                  insert into ESB_MAP (ID, SOURCE_SYSTEM, SOURCE_ATTR,
                  SOURCE_VALUE, TARGET_SYSTEM, TARGET_ATTR, TARGET_VALUE,
                  GROUP_MAP, CREATED) values (SEQ_esb_map.NextVal,'{values[1]}
                  ','{values[2]}','{values[3]}','
                  {values[4]}','INSERTAR VALOR DE TARGET_ATTR','INSERTAR VALOR
                  DE TARGET_VALUE','{values[0]}',to_date('{fechaFormateada}
                  ','DD/MM/RRRR'));
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );


  };

  return (
    <section>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          mapBm Conversor
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-2">
        <form onSubmit={handleSubmit} id="formulario" method="post">
          <div>
            <p
              htmlFor="comment"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ingrese mapBm 
              <span className="block font-bold">Example:</span>
              <span className="block">mapBm:getValueWithDefault("AVERIAS", "CRM", "XA_GUARANTEE", 'config_item', "TOA", "0")</span>
              <span className="block">mapBm:getValue('GENERAL','Portability','portabilityStatus', 'notifyPortInTimeWindow', 'AMDOCS')</span>
            </p>
            <div className="mt-2">
              <textarea
                rows={4}
                name="mapBm"
                id="mapBm"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 p-3 bg-blue-500 rounded-sm transition hover:bg-blue-400"
          >
            Generar
          </button>
        </form>

        <div id="resultado">{result}</div>
      </div>
    </section>
  );
};
export default MapBm;
