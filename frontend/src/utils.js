const API_BASE = process.env.REACT_APP_API_BASE;

export async function get(path, params, options) {
  params = params || {};
  let relativePath = path;
  if (relativePath.indexOf("/") !== 0) {
    relativePath = `/${relativePath}`;
  }

  return await getRequest(`${API_BASE}${relativePath}`, params, options);
}

export async function getRequest(url, params, options) {
  // params = params || {};
  // params = snakecaseKeys(params, { deep: true });

  let headers = options?.headers || {};
  headers = {
    "Content-Type": "application/json",
    ...headers,
  };
  // const queryString = querystring.stringify(params);
  // const res = await fetch(`${url}?${queryString}`, { headers });
  const res = await fetch(`${url}`, { headers });

  // const data = await res.json();
  // return camelcaseKeys(data, { deep: true });

  return await res.json();
}

export function getRatingColor(rating) {
  if (rating > 1.1) return "bg-green-200";
  if (rating > 0.9) return "bg-yellow-200";
  return "bg-red-200";
}
