import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

// 開発サーバとプレビューを HTTPS で配信する。
// 証明書はその場で作る自己署名のもの（node_modules/.vite 内）で、リポジトリには入れない。
export default defineConfig({
  plugins: [basicSsl()],
});
