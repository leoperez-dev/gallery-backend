import { GalleryImage, GalleryAlbum, Image } from "../types";

export function isAlbum(item: GalleryImage | GalleryAlbum): item is GalleryAlbum {
	return item.is_album;
}

export function mapAlbumImage({ id, title, description, link, height, width, type }: Image) {
	return ({ id, title, description, link, height, width, type })
}

export function mapResponseItem(item: GalleryImage | GalleryAlbum): GalleryImage | GalleryAlbum {
	const commonFields = {
		id: item.id,
		title: item.title,
		description: item.description,
		link: item.link,
		is_album: item.is_album
	};

	if (isAlbum(item)) {
		return (
			{
				...commonFields,
				images: item.images.map(mapAlbumImage),
				cover: item.cover
			}
		);
	}
	return ({
		...commonFields,
		height: item.height,
		width: item.width,
		type: item.type
	});
}