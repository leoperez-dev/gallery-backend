import swaggerJsDoc from 'swagger-jsdoc';
import dotEnv from 'dotenv';

dotEnv.config();

export const options: swaggerJsDoc.Options = {
	definition: {
		openapi: "3.1.0",
		info: {
			title: "Example image gallery",
			version: "0.1.0",
			description:
				"This is the backend for a simple image gallery using the imgur API",
			license: {
				name: "MIT",
				url: "https://spdx.org/licenses/MIT.html",
			},
			contact: {
				name: "Leonardo Perez",
				url: "https://github.com/leoperez-dev",
				email: "leoperez.dev@gmail.com",
			},
		},
		servers: [
			{
				url: `${process.env.SERVER_URL}:${process.env.PORT}`,
			},
		],
	},
	apis: ["**/*.ts"],
};
