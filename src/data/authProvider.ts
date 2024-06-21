const authProvider = {
  login: ({ username, password }: { username: string; password: string }) => {
    if (username !== "john" || password !== "123") {
      return Promise.reject();
    }
    localStorage.setItem("username", username);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () => {
    console.log("getIdentity");
    return Promise.resolve({
      id: "user",
      fullName: "John Doe",
    });
  },
  getPermissions: () =>
    Promise.resolve({ posts: "editor", comments: "moderator", users: "admin" }),
};

export default authProvider;
