/**
 * Shared utility functions — ported from src/utils/utilsThisApp.js.
 */

export const consoleColor = (color) =>
  `color: ${color}; font-weight: bold; font-size: 0.9rem;`;

export const logApiCall = ({ action, method, url, tableObj, otherLogs }) => {
  const colorMap = {
    GET: "blue",
    POST: "fuchsia",
    PUT: "purple",
    DEL: "crimson",
    PATCH: "tomato",
    LOCAL_STORAGE: "coral",
  };
  const color = colorMap[method] || "teal";
  /* eslint-disable no-console */
  console.groupCollapsed(
    `%cAPI CALL > ${action} ${method ? `[${method}]` : ""}${url ? `: ${url}` : ""}`,
    consoleColor(color),
  );
  if (url) console.trace(`%cURL: ${url}`, "font-weight: bold");
  if (tableObj) {
    console.table(tableObj);
    console.info(JSON.stringify(tableObj));
  }
  if (otherLogs?.length) otherLogs.forEach((l) => console.info(l));
  console.groupEnd();
  /* eslint-enable no-console */
};

export const basicAPI = (url, description, fetchOptions = {}) => {
  logApiCall({
    action: description,
    method: fetchOptions.method || "GET",
    url,
    tableObj: fetchOptions.body || null,
  });

  const headers = { ...(fetchOptions.headers || {}) };
  if (fetchOptions.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(url, { ...fetchOptions, headers })
    .then(
      (response) => {
        if (response.ok) return response;
        throw response;
      },
      (error) => {
        throw error;
      },
    )
    .then((response) => {
      const ct = response.headers?.get("Content-Type");
      if (ct?.includes("application/json")) return response.json();
      return response;
    })
    .catch((e) => {
      if (!e || /JSON/.test(e.message)) {
        throw new Error("Received an invalid response from the server");
      }
      throw e;
    });
};
