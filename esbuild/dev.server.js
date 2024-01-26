import esbuildServe from "esbuild-serve";
import inlineImage from "esbuild-plugin-inline-image";

esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/main.js"],
        bundle: true,
        outfile: "public/bundle.js",
        plugins: [ inlineImage() ]
    },
    { root: "public", port: 8080 },
);