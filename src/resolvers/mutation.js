const createUser = async (parent, args, context, info) => {
  const user = await context.db.mutation.createUser(
    {
      data: { ...args }
    },
    info
  );

  return user;
};

module.exports = {
  createUser
};
