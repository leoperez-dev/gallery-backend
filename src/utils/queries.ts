import { GalleryQueryStringParams, GalleryQueryResponse } from "../types";
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.IMGUR_API_URL ?? '';

const headers: [[string, string]] = [['Authorization', `Client-ID ${process.env.IMGUR_CLIENT_ID}`]];

export async function galleryQuery({ showViral, section, sort, page, window }: GalleryQueryStringParams) {
	const params = { section, sort, page, window };
	const paramString = Object.values(params).filter(Boolean).join('/');
	const url = `${API_URL}/gallery/${paramString}${showViral ? `?${showViral}` : ''}`;
	const response = await fetch(url, { headers });
	const { data } = await response.json() as GalleryQueryResponse;
	return data;
}