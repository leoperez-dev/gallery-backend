import { GalleryQueryParams, GalleryQueryStringParams, GalleryQueryResponse } from "../types";
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.IMGUR_API_URL ?? '';

const headers: [[string, string]] = [['Authorization', `Client-ID ${process.env.IMGUR_CLIENT_ID}`]];

export async function galleryQuery(params: GalleryQueryParams, queryString: GalleryQueryStringParams) {
	const paramString = Object.values(params).filter(Boolean).join('/');
	const url = `${API_URL}/gallery/${paramString}?showViral=${queryString.showViral}`;
	const response = await fetch(url, { headers });
	const { data } = await response.json() as GalleryQueryResponse;
	return data;
}