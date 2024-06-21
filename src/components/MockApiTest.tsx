import { fetchUtils } from "react-admin";

const MockApiTest = () => {
  const getList = async () => {
    await fetchUtils.fetchJson(`/users`);
  };
  const getOne = async () => {
    await fetchUtils.fetchJson(`/users/1`);
  };
  const create = async () => {
    return fetchUtils.fetchJson(`/users`, {
      method: "POST",
      body: JSON.stringify({
        name: "created Name",
        username: "created UserName",
        email: "created@gmail.com",
        address: {
          street: "created Street",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      }),
    });
  };
  const update = async () => {
    return fetchUtils.fetchJson(`/users/1`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: "new Name",
        username: "new UserName",
        email: "new UserEmail",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      }),
    });
  };
  return (
    <>
      <button onClick={getList}>getList</button>
      <br />
      <button onClick={getOne}>getOne</button>
      <br />
      <button onClick={create}>create</button>
      <br />
      <button onClick={update}>update</button>
    </>
  );
};

export default MockApiTest;
