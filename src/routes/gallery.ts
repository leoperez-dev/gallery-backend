import { Router } from 'express';
import { GalleryQueryParams, GalleryImage, GalleryAlbum, GalleryQueryStringParams } from '../types';
import { mapResponseItem } from '../utils/utils';
import { galleryQuery } from '../utils/queries';
import { Request, Response } from 'express';

const router = Router();

export const handler = async (
	req: Request<GalleryQueryParams, (GalleryImage | GalleryAlbum)[], never, GalleryQueryStringParams>,
	res: Response<(GalleryImage | GalleryAlbum)[]>
) => {
	const data = await galleryQuery(req.params, req.query);
	const parsedResponse = data.map(item => mapResponseItem(item));
	res.json(data);
};

router.get('/:section/:f2?/:f3?/:f4?', handler);

export default router;