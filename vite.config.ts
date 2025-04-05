import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Configure React plugin with fallback options
  const reactPlugin = () => {
    try {
      return react();
    } catch (error) {
      console.warn("Failed to initialize SWC plugin, falling back to basic configuration:", error);
      return react({ 
        jsxImportSource: 'react',
        plugins: [] 
      });
    }
  };

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      reactPlugin(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Configure safe minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        }
      },
      sourcemap: false,
      cssCodeSplit: false,
      // Add rollup options to better handle environment differences
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          warn(warning);
        },
      }
    },
    optimizeDeps: {
      // Ensure dependencies are properly processed
      include: ['react', 'react-dom'],
      esbuildOptions: {
        target: 'es2020',
      }
    },
    // Add better error handling
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
  };
});
