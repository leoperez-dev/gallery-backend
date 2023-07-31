import { Router } from 'express';
import { GalleryImage, GalleryAlbum, GalleryQueryStringParams } from '../types';
import { mapResponseItem } from '../utils/utils';
import { galleryQuery } from '../utils/queries';
import { Request, Response } from 'express';

const router = Router();

export const handler = async (
	req: Request<never, (GalleryImage | GalleryAlbum)[], never, GalleryQueryStringParams>,
	res: Response<(GalleryImage | GalleryAlbum)[]>
) => {
	const data = await galleryQuery(req.query);
	const parsedResponse = data.map(item => mapResponseItem(item));
	res.json(parsedResponse);
};

router.get('/', handler);

export default router;