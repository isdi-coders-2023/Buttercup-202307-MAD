import { ApiCardRepository } from './api.card.repository';

describe('Given TheLordOfTheRings class ', () => {
  describe('When we instantiate it', () => {
    const repo = new ApiCardRepository('');
    test('The method getAll should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getAll should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });

      expect(repo.getAll()).rejects.toThrow();
    });

    test('The method get() should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.get('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method get should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });

      expect(repo.get('')).rejects.toThrow();
    });
  });
});
