import { DefaultBodyType, http, HttpResponse } from "msw";
import userList from "@/data/userList.json";

export const handlers = [
  http.head("/users/:id", () => {
    return new Response(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),

  http.get("/users", () => {
    return HttpResponse.json(userList);
  }),

  http.get("/users/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(
      userList.find((user) => user.id.toString() === id)
    );
    // return new HttpResponse(null, { status: 404 });
  }),

  http.post("/users", async ({ request }) => {
    const info = await request.json();
    const newUser = {
      id: userList[userList.length - 1].id + 1,
      ...(info as object),
    };
    (userList as DefaultBodyType[]).push(newUser);
    return HttpResponse.json(newUser, { status: 200 });
  }),

  http.put("/users/:id", async ({ request, params }) => {
    const { id } = params;
    const newUserInfo = await request.json();
    const newUser = { id, ...(newUserInfo as object) };
    const index = userList.findIndex((user) => user.id.toString() === id);
    (userList as DefaultBodyType[])[index] = newUser;
    return HttpResponse.json({ status: 401 });
  }),

  http.delete("/users/:id", ({ params }) => {
    const { id } = params;
    const index = userList.findIndex((user) => user.id.toString() === id);
    const deletedUser = userList.splice(index, 1);
    return HttpResponse.json(deletedUser, { status: 200 });
  }),
];
