jest.mock('../../config/database', () => ({
  query: jest.fn(),
}));

const db = require('../../config/database');
const service = require('../../services/exampleService');

describe('exampleService', () => {
  beforeEach(() => {
    db.query.mockReset();
  });

  test('listExamples returns rows', async () => {
    db.query.mockResolvedValueOnce([{ id: 1, name: 'Module', description: 'Demo' }]);
    const result = await service.listExamples();
    expect(result).toHaveLength(1);
  });

  test('getExampleById returns first row', async () => {
    db.query.mockResolvedValueOnce([{ id: 1 }]);
    const row = await service.getExampleById(1);
    expect(row).toEqual({ id: 1 });
  });

  test('createExample persists and returns inserted row', async () => {
    db.query
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce([{ id: 2, name: 'Module 2' }]);
    const row = await service.createExample({ name: 'Module 2', description: '' });
    expect(db.query).toHaveBeenCalledTimes(2);
    expect(row.id).toBe(2);
  });
});
