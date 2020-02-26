export const LogOut = () => ({
  type: 'LOGOUT',
});

export const LogIn = user => ({
  type: 'LOGIN',
  payload: { user },
});
