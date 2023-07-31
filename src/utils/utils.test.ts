import { isAlbum, mapAlbumImage, mapResponseItem } from "./utils";

describe('utils', () => {
	const testImage = {
		id: '1',
		title: 'title',
		description: 'description',
		link: 'link',
		height: 1,
		width: 1,
		type: 'type',
	};

	const testAlbum = {
		id: '1',
		title: 'title',
		description: 'description',
		link: 'link',
		is_album: true,
		images: [testImage],
		cover: 'cover',
		ups: 1,
		downs: 1,
		score: 1
	};

	const testGalleryImage = {
		id: '1',
		title: 'title',
		description: 'description',
		link: 'link',
		is_album: false,
		height: 1,
		width: 1,
		type: 'type',
		ups: 1,
		downs: 1,
		score: 1
	};

	test('isAlbum true', () => {
		expect(isAlbum(testAlbum)).toBeTruthy();
	});

	test('isAlbum false', () => {
		expect(isAlbum(testGalleryImage)).toBeFalsy();
	});

	test('mapAlbumImage', () => {
		expect(mapAlbumImage({ ...testImage, foo: 'foo', bar: 'bar' } as any)).toEqual(testImage);
	});

	test('mapResponseItem Image', () => {
		expect(mapResponseItem({ ...testGalleryImage, foo: 'foo', bar: 'bar' } as any)).toEqual(testGalleryImage);
	});

	test('mapResponseItem Album', () => {
		expect(mapResponseItem({ ...testAlbum, foo: 'foo', bar: 'bar' } as any)).toEqual(testAlbum);
	});
});