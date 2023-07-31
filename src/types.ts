export interface BaseItem {
	id: string;
	title: string;
	description: string;
	link: string;
}

export interface GalleryItem extends BaseItem {
	is_album: boolean;
	ups: number;
	downs: number;
	score: number;
}

export interface Image extends BaseItem {
	height: number;
	width: number;
	type: string;
}

export interface GalleryAlbum extends GalleryItem {
	cover: string;
	images: Image[];
}

export type GalleryImage = GalleryItem & Image;
export type GallerySectionFilter = 'hot' | 'top' | 'user';
export type GallerySortFilter = 'viral' | 'top' | 'time' | 'rising';
export type GalleryWindowFilter = 'day' | 'week' | 'month' | 'year' | 'all';

export interface GalleryQueryStringParams {
	section: GallerySectionFilter;
	sort?: GallerySortFilter;
	page?: number;
	window?: GalleryWindowFilter;
	showViral?: boolean;
}

export type GalleryQueryResponse = {
	data: (GalleryImage | GalleryAlbum)[];
	success: boolean;
	status: number;
};