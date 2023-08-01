import { Router } from 'express';
import { GalleryImage, GalleryAlbum, GalleryQueryStringParams } from '../types';
import { mapResponseItem } from '../utils/utils';
import { galleryQuery } from '../utils/queries';
import { Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Gallery
 *   description: Get the imgur gallery
 * /gallery/:
 *   get:
 *     summary: Get the imgur gallery
 *     tags: [Gallery]
 *     parameters:
 *       - in: query
 *         name: section
 *         required: true
 *         description: The gallery section name
 *         schema:
 *           type: string
 *           enum:
 *             - hot
 *             - top
 *             - user
 *       - in: query
 *         name: sort
 *         required: false
 *         description: The gallery section name
 *         schema:
 *           type: string
 *           default: viral
 *           enum:
 *             - viral
 *             - top
 *             - time
 *             - rising
 *       - in: query
 *         name: page
 *         required: false
 *         description: The gallery section name
 *         schema:
 *           type: integer
 *           default: 0
 *       - in: query
 *         name: window
 *         required: false
 *         description: The gallery section name
 *         schema:
 *           type: string
 *           default: day
 *           enum:
 *             - day
 *             - week
 *             - month
 *             - year
 *             - all
 *       - in: query
 *         name: showViral
 *         required: false
 *         description: The gallery section name
 *         schema:
 *           default: true
 *           type: boolean
 *     responses:
 *       200:
 *         description: The gallery images
 *       500:
 *         description: Some server error
 *
 */
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