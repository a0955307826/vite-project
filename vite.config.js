import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
	// 指定部署後的基路徑
	base: "./",

	//  Vite 提供許多官方插件，例如@vitejs/plugin-vue 和 vite-plugin-eslint，前者用於 Vue 組件，後者用於 ESLint 代碼檢查工具。
	plugins: [
		vue(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
	],

	// 配置模組解析。通過 alias 屬性指定路徑別名，之後方便在 Code 中引用模塊路徑時簡化路徑。
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},

	// 配置構建。如通過 chunkSizeWarningLimit 屬性設定 chunk 大小的警告閾值。
	build: {
		// 該配置用於指定文件大小的警告閾值，當打包生成的文件大小超過這個值時，會發出警告提醒開發者注意。
		chunkSizeWarningLimit: 1500,

		// 意味著小於 4KB 的資源將被轉換為 base64 格式並內嵌到 JavaScript / CSS 中。這樣做的好處是減少了 HTTP 請求的數量，提高了頁面的加載速度。
		assetsInlineLimit: 4096,

    // 可以進行各種自定義的 Rollup 配置。
    rollupOptions: {
      output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
            sanitizeFileName(name) {
              const match = DRIVE_LETTER_REGEX.exec(name);
              const driveLetter = match ? match[0] : '';
              return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
            }
      }
    }
	},
});
