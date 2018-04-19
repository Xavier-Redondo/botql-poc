const fakeUser = {
  id: '1',
  company: 'Chiquistan',
  firstName: 'melon',
  lastName: 'patata',
  username: 'fistro',
  email: 'joder@joder.com'
};

const login = async (root, args, context, info) => {
  const where = {
    username: args.username
  };
  const user = await context.db.query.user({ where });

  const bots = await context.db.query.bots({
    where: {
      owner: {
        username: args.username
      }
    }
  });

  user.bots = bots;

  return user;
};

module.exports = {
  login
};
