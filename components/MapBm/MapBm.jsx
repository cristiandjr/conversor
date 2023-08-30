"use client";
import { useState } from "react";
import { handleClipboard } from "@/utils/scripts/clipboard";
import { useForm } from "react-hook-form";

const MapBm = () => {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const mapBm = document.getElementById("mapBm").value;
    //console.log("mapBm original", mapBm);

    //  if (mapBm.includes("getValueWithDefault")) {
    //    console.log(
    //      "Encontrado: getValueWithDefault",
    //      mapBm.includes("getValueWithDefault")
    //    );
    //  } else if (mapBm.includes("getValue")) {
    //    console.log("Encontrado: getValue", mapBm.includes("getValue"));
    //  } else {
    //    console.log("Texto no encontrado.");
    //  }

    const matches = mapBm.match(/"(.*?)"|'(.*?)'/g);
    const values = matches.map((match) => match.replace(/["']/g, ""));
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const anio = fechaActual.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    // results finish
    let resultMapBm = `<amd:getValueWithDefault xmlns:amd="http://www.movistar.com.ar/ws/schema/amdocs">
      <amd:source_system>${values[1]}</amd:source_system>
      <amd:source_attr>${values[2]}</amd:source_attr>
      <amd:target_system>${values[4]}</amd:target_system>
      <amd:source_value>${values[3]}</amd:source_value>
      <amd:group>${values[0]}</amd:group>
      <amd:defaultValue>${
        values[5] === undefined ? "string" : values[5]
      }</amd:defaultValue>
    </amd:getValueWithDefault>`;

    let resultSelect = `select * from ESB_MAP where group_map='${values[0]}' and
      source_system='${values[1]}' and source_attr='${values[2]}' and
      source_value='${values[3]}' and target_system=
      '${values[4]}' and target_attr='INSERTE VALOR CORRECTO DE
      target_attr';`;

    let resultInsert = `insert into ESB_MAP (ID, SOURCE_SYSTEM, SOURCE_ATTR,
      SOURCE_VALUE, TARGET_SYSTEM, TARGET_ATTR, TARGET_VALUE,
      GROUP_MAP, CREATED) values (SEQ_esb_map.NextVal,'${values[1]}'
      ,'${values[2]}','${values[3]}',
      '${values[4]}','INSERTAR VALOR DE TARGET_ATTR','INSERTAR VALOR
      DE TARGET_VALUE','${values[0]}',to_date('${fechaFormateada}
      ','DD/MM/RRRR'));`;

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
                onClick={() => handleClipboard(resultMapBm)}
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" className="text-gray-300 whitespace-pre-line">
                <code>{resultMapBm}</code>
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
                onClick={() => handleClipboard(resultSelect)}
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" className="text-gray-300 whitespace-pre-line">
                <code>{resultSelect}</code>
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
                onClick={() => handleClipboard(resultInsert)}
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" className="text-gray-300 whitespace-pre-line">
                <code>{resultInsert}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <h1 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-900">
        mapBm Conversor
      </h1>
      <div className="grid grid-cols-1 gap-2">
        <form onSubmit={handleSubmit(onSubmit)} id="formulario" method="post">
          <div>
            <div className="relative w-full max-w-6xl mt-2">
              <div className="bg-black text-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Example code getValueWithDefault:</span>
                </div>
                <div className="overflow-x-auto">
                  <pre id="code" className="text-gray-300 whitespace-pre-line">
                    <code>
                      <span className="block">
                        mapBm:getValueWithDefault("AVERIAS", "CRM",
                        "XA_GUARANTEE", 'config_item', "TOA", "0")
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-6xl mt-2">
              <div className="bg-black text-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Example code getValue:</span>
                </div>
                <div className="overflow-x-auto">
                  <pre id="code" className="text-gray-300 whitespace-pre-line">
                    <code>
                      <span className="block">
                        mapBm:getValue('GENERAL','Portability','portabilityStatus',
                        'notifyPortInTimeWindow', 'AMDOCS')
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <textarea
                rows={4}
                name="mapBm"
                {...register("mapBm", {
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  minLength: {
                    value: 15,
                    message: "Minimo como estan los campos de example",
                  },
                })}
                id="mapBm"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              {errors.mapBm && (
                <span className="text-red-600 font-bold">
                  {errors.mapBm.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 p-2 border-2 font-semibold tracking-widest border-black rounded-sm ease-in duration-300 hover:bg-black hover:text-white"
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
