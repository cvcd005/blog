const isAuthorized = isLoggedIn => {
  if (isLoggedIn) {
    return true;
  }
  return false;
};

export default isAuthorized;
