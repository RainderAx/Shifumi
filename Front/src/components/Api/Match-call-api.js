
import { getToken } from "./Local-token";

const BASE_URL = "http://fauques.freeboxos.fr:3000/matches";

const headers = {
  "Authorization": `Bearer ${getToken()}`,
};

async function request(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export const MatchActions ={
  fetch: function () {
    return request(BASE_URL, { headers });
  },
  delete: function (match) {
    return request(`${BASE_URL}/${match.id}`, { method: "DELETE", headers });
  },
  add: function (match) {
    return request(BASE_URL, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(match),
    });
  },
  edit: function (oldMatch, newMatch) {
    return request(`${BASE_URL}/${oldMatch.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMatch),
    });
  },
};