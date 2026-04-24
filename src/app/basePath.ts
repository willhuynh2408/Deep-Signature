const normalizeBasePath = (value: string | undefined) => {
  if (!value || value === "/") return "/";

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

export const BASE_PATH = normalizeBasePath(import.meta.env.BASE_URL);

export const basename = BASE_PATH === "/" ? undefined : BASE_PATH;

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return BASE_PATH === "/" ? normalizedPath : `${BASE_PATH}${normalizedPath}`;
};

