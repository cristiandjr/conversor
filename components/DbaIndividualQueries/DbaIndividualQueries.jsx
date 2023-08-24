const DbaIndividualQueries = () => {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          DBA Individual Queries
        </span>
      </h1>
      <div className="grid grid-cols-2">
        <div className="flex gap-2">
          {/** columna izq*/}
          <div className="space-y-2">
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ej:"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
          {/** columna der */}
          <div className="space-y-2">
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejem"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
            <div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="un ejemplo"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
        <div>mundo</div>
      </div>
    </section>
  );
};

export default DbaIndividualQueries;
