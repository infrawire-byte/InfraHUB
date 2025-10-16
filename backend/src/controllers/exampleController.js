const exampleService = require('../services/exampleService');

async function list(req, res, next) {
  try {
    const data = await exampleService.listExamples();
    return res.json({ data });
  } catch (error) {
    return next(error);
  }
}

async function detail(req, res, next) {
  try {
    const data = await exampleService.getExampleById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Not found' });
    }
    return res.json({ data });
  } catch (error) {
    return next(error);
  }
}

async function create(req, res, next) {
  try {
    const data = await exampleService.createExample(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  list,
  detail,
  create,
};
