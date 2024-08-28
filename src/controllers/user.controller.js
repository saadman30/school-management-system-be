import prisma from "../connection.js";

const getAllsUser = function (req, res) {
  prisma.user.findMany().then((users) => {
    res.json(users);
  });
};

const createUser = function (req, res) {
  const { name, email, password } = req.body;
  prisma.user
    .create({
      data: {
        name,
        email,
        password,
      },
    })
    .then((user) => {
      res.json(user);
    });
};

export { getAllsUser, createUser };