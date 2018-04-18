const fakeUser = {
  id: '1',
  company: 'Chiquistan',
  firstName: 'melon',
  lastName: 'patata',
  username: 'fistro',
  email: 'joder@joder.com'
};

const login = async (root, args, context, info) => {
  return fakeUser;
};

module.exports = {
  login
};
