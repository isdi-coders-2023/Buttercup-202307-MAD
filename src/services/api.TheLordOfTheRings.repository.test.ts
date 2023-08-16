import { ApiCardRepository } from './api.TheLordOfTheRings.repository';

describe('Given TheLordOfTheRings class ', () => {
  describe('When we instantiate it', () => {
    const repo = new ApiCardRepository('');

    test('The method get() should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.get('');
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
