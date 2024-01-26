import esbuildServe from "esbuild-serve";

esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/main.js"],
        bundle: true,
        outfile: "public/bundle.js",
    },
    { root: "public", port: 8080 }
);