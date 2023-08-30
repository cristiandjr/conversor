"use client";
import { useEffect, useState } from "react";
import { handleClipboard } from "@/utils/scripts/clipboard";

const DbaIndividualQueries = () => {
  const [inputValues, setInputValues] = useState({
    id: "SEQ_esb_map.NextVal",
    sourceSystem: "",
    sourceAttr: "",
    sourceValue: "",
    targetSystem: "",
    targetAttr: "",
    targetValue: "",
    groupMap: "",
    created: "",
    defaultValue: "string"
  });

  const [generatedMapBm, setGeneratedMapBm] = useState("");
  const [generatedMapBmHistory, setGeneratedMapBmHistory] = useState([]);

  const [generatedInsert, setGeneratedInsert] = useState("");
  const [generatedInsertHistory, setGeneratedInsertHistory] = useState([]);

  // obtener fecha actual
  const fechaActual = new Date();
  const dia = String(fechaActual.getDate()).padStart(2, "0");
  const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
  const anio = fechaActual.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${anio}`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    const mapBm = generateMapBm(inputValues);
    const insert = generateInsert(inputValues);
    setGeneratedMapBm(mapBm);
    setGeneratedInsert(insert);
    setGeneratedMapBmHistory((prevHistory) => [...prevHistory, mapBm]);
    setGeneratedInsertHistory((prevHistory) => [...prevHistory, insert]);
  };

  const generateMapBm = (values) => {
    const mapBmContent = `
    <amd:getValueWithDefault xmlns:amd="http://www.movistar.com.ar/ws/schema/amdocs">
      <amd:source_system>${values.sourceSystem}</amd:source_system>
      <amd:source_attr>${values.sourceAttr}</amd:source_attr>
      <amd:target_system>${values.targetSystem}</amd:target_system>
      <amd:source_value>${values.sourceValue}</amd:source_value>
      <amd:group>${values.groupMap}</amd:group>
      <amd:defaultValue>${values.defaultValue}</amd:defaultValue>
    </amd:getValueWithDefault>
    `;
    return mapBmContent;
  };

  const generateInsert = (values) => {
    const insertContent = `
      Insert into ESB_MAP 
      (ID,SOURCE_SYSTEM,SOURCE_ATTR,SOURCE_VALUE,TARGET_SYSTEM,TARGET_ATTR,TARGET_VALUE,GROUP_MAP,CREATED) 
      values
      (${values.id},'${values.sourceSystem}','${values.sourceAttr}','${values.sourceValue}','${values.targetSystem}','${values.targetAttr}','${values.targetValue}','${values.groupMap}',sysdate);
    `;
    return insertContent;
  };

  return (
    <section>
      <h1 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-900">
        DBA Individual Queries
      </h1>
      {/** columna */}
      <div className="w-full flex flex-wrap">
        <div className="w-1/3 p-1">
          <label
            htmlFor="id"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ID
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="id"
              id="id"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="SEQ_esb_map.NextVal"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="sourceSystem"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            SOURCE_SYSTEM
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="sourceSystem"
              id="sourceSystem"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="sourceAttr"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            SOURCE_ATTR
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="sourceAttr"
              id="sourceAttr"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="sourceValue"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            SOURCE_VALUE
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="sourceValue"
              id="sourceValue"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="targetSystem"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            TARGET_SYSTEM
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="targetSystem"
              id="targetSystem"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="targetAttr"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            TARGET_ATTR
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="targetAttr"
              id="targetAttr"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="targetValue"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            TARGET_VALUE
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="targetValue"
              id="targetValue"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="groupMap"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            GROUP_MAP
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="groupMap"
              id="groupMap"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="defaultValue"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            DEFAULT_VALUE <span className="text-xs">(solo para mapBm)</span> 
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="defaultValue"
              id="defaultValue"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              placeholder="Ej: valor/vació o queda por default string"
            />
          </div>
        </div>
        <div className="w-1/3 p-1">
          <label
            htmlFor="created"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            CREATED
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="created"
              id="created"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={`Ej: ${fechaFormateada} o queda por default sysdate`}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 p-2 border-2 font-semibold tracking-widest border-black rounded-sm ease-in duration-300 hover:bg-black hover:text-white"
        onClick={handleGenerate}
      >
        Generar
      </button>

      {/* results */}
      <div className="mt-5 w-full">
        {generatedMapBmHistory.map((mapBm, index) => (
          <div className="relative w-full max-w-6xl mt-2" key={index}>
            <div className="bg-black text-white p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">MAPBM Code:</span>
                <button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                  data-clipboard-target="#code"
                  onClick={() => handleClipboard(mapBm)}
                >
                  Copy
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre id="code" className="text-gray-300">
                  <code>{mapBm}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 w-full">
        {generatedInsertHistory.map((insert, index) => (
          <div className="relative w-full max-w-6xl mt-2" key={index}>
            <div className="bg-black text-white p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">INSERT Code:</span>
                <button
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                  data-clipboard-target="#code"
                  onClick={() => handleClipboard(insert)}
                >
                  Copy
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre id="code" className="text-gray-300">
                  <code>{insert}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DbaIndividualQueries;
