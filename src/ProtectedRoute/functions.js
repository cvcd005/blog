const canActivate = (isLoggedIn, reverse) => {
  if (reverse) {
    if (isLoggedIn) {
      return false;
    }
    return true;
  }
  if (isLoggedIn) {
    return true;
  }
  return false;
};

export default canActivate;
