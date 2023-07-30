import { galleryQuery } from "./queries";
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.IMGUR_API_URL ?? '';

describe('queries', () => {
	test('galleryQuery', async () => {
		const returnData = [{id: '1'}];
		const jsonMock = jest.fn().mockResolvedValue({ data: returnData });
		const fetchMock = jest.fn().mockResolvedValue({ json: jsonMock});
		global.fetch = fetchMock;
		const response = await galleryQuery({ section: 'top', f2: 'time', f3: 1, f4: 'month' }, { showViral: true });
		expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/gallery/top/time/1/month?showViral=true`);
		expect(response).toBe(returnData);
	});
});