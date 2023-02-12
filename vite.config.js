import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src")
            }
            // {
            //     find: "@pages",
            //     replacement: path.resolve(__dirname, "src/pages"),
            // },
            // {
            //     find: "@components",
            //     replacement: path.resolve(__dirname, "src/components"),
            // },
            // {
            //     find: "@hooks",
            //     replacement: path.resolve(__dirname, "src/hooks"),
            // },
            // {
            //     find: "@stores",
            //     replacement: path.resolve(__dirname, "src/stores"),
            // },
            // {
            //     find: "@constants",
            //     replacement: path.resolve(__dirname, "src/constants"),
            // },
        ]
    }
})
