import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/api": {
				target: "https://mployee-me-project-ult8.vercel.app/",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
