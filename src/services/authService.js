const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const AUTH_STORAGE_KEY = "nike-sneaker-auth";

const hasApiBaseUrl = () => Boolean(API_BASE_URL);

const parseJsonResponse = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || "Errore nella richiesta di autenticazione");
  }

  return data;
};

export const getStoredAuth = () => {
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const getAccessToken = () => getStoredAuth()?.accessToken || null;

export const setAuthSession = ({ user, accessToken }) => {
  if (!accessToken) return;

  window.localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify({ user, accessToken })
  );
};

export const clearAuthSession = () => {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
};

export const buildAuthHeaders = () => {
  const token = getAccessToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const register = async ({ name, email, password }) => {
  if (!hasApiBaseUrl()) {
    throw new Error("Configura VITE_API_BASE_URL per usare register/login reali.");
  }

  const data = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  }).then(parseJsonResponse);

  setAuthSession(data);
  return data;
};

export const login = async ({ email, password }) => {
  if (!hasApiBaseUrl()) {
    throw new Error("Configura VITE_API_BASE_URL per usare register/login reali.");
  }

  const data = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(parseJsonResponse);

  setAuthSession(data);
  return data;
};

export const logout = async () => {
  const token = getAccessToken();

  if (hasApiBaseUrl() && token) {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: buildAuthHeaders(),
    }).catch(() => null);
  }

  clearAuthSession();
};

export const getMe = async () => {
  if (!hasApiBaseUrl()) return getStoredAuth()?.user || null;

  const token = getAccessToken();
  if (!token) return null;

  return fetch(`${API_BASE_URL}/auth/me`, {
    headers: buildAuthHeaders(),
  }).then(parseJsonResponse);
};
