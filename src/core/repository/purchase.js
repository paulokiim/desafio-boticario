const models = require('../model');

const { Purchase } = models;

const create = (params) => {
  return Purchase.create(params);
};

const get = (params) => {
  return Purchase.findOne({ where: params });
};

const update = (params, where) => {
  return Purchase.update(params, { returning: true, where });
};

module.exports = {
  create,
  get,
  update,
};
