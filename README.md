# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
export default defineConfig({
	// 指定部署後的基路徑
	base: "./",

	//  Vite 提供許多官方插件
	plugins: [
		vue(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
	],

	server: {
		port: 3000, // 配置開發服務器的端口為 3000
    },

	// 配置模組解析。通過 alias 屬性指定路徑別名，之後方便在 Code 中引用模塊路徑時簡化路徑。
	resolve: {
		alias: {
			alias: {
				// 可以確保路徑解析是安全和一致的，特別是在需要在不同操作系統下運行的多平台專案中。
				"@": fileURLToPath(new URL("./src", import.meta.url)),
				// "@": "/src"
			},
		},
	},
	build: {
		// 該配置用於指定文件大小的警告閾值，當打包生成的文件大小超過這個值時，會發出警告提醒開發者注意。
		chunkSizeWarningLimit: 1500,
		// // 意味著小於 4KB 的資源將被轉換為 base64 格式並內嵌到 JavaScript / CSS 中。這樣做的好處是減少了 HTTP 請求的數量，提高了頁面的加載速度。
		assetsInlineLimit: 4096,
		// rollupOptions: {
		// 	input: "src/main.js",
		// 	output: {
		// 		entryFileNames: "bundle.js",
		// 		chunkFileNames: "[name]-[hash].js",
		// 		assetFileNames: "assets/[name]-[hash].[ext]",
		// 	},
		// },
	},
});