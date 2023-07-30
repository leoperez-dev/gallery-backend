import { handler } from './gallery';

const returnValue = [{ id: '1' }];

jest.mock('../utils/queries', () => {
	return {
		galleryQuery: jest.fn().mockResolvedValue(returnValue)
	}
});

describe('Route gallery', () => {
	const json = jest.fn();

	test('GET', async () => {
		await handler({ params: { section: 'hot' }, query: { showViral: true } } as any, { json } as any);
		expect(json).toHaveBeenCalledWith(returnValue);
	});
});

