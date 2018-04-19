const createUser = async (parent, args, context, info) => {
  const user = await context.db.mutation.createUser(
    {
      data: { ...args }
    },
    info
  );

  return user;
};

const createBot = async (parent, args, context, info) => {
  const { ownerId, ...myArgs } = args;
  const fistro = {
    data: {
      ...myArgs,
      owner: {
        connect: {
          id: ownerId
        }
      }
    }
  };
  const bot = await context.db.mutation.createBot(fistro, info);

  return bot;
};

module.exports = {
  createUser,
  createBot
};
