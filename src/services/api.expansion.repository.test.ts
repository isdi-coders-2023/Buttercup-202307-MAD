import { ApiExpansionRepository } from './api.expansion.repository';

describe('Given the Expansion Repository class ', () => {
  describe('When we instantiate it', () => {
    const repoExpansion = new ApiExpansionRepository('');
    test('The method getAll should be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoExpansion.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getAll should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });

      expect(repoExpansion.getAll()).rejects.toThrow();
    });

    test('The method get() should be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoExpansion.get('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method get should be called with error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });

      expect(repoExpansion.get('')).rejects.toThrow();
    });
  });
});
