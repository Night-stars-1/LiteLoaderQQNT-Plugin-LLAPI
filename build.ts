import { analyzeMetafile, context } from "esbuild";

void (async () => {
    const mainCtx = await context({
        entryPoints: ["src/main.ts"],
        write: true,
        outdir: "H:/LiteLoader/plugins/LiteLoaderQQNT-Plugin-LLAPI/src",

        platform: "node",
        format: "cjs",
        tsconfig: "tsconfig.json",

        external: ["electron", "liteloader"],

        bundle: true,
        minify: true, // 代码压缩
        metafile: true,
        color: true,
    });

    console.log(await analyzeMetafile((await mainCtx.rebuild()).metafile));
    await mainCtx.dispose();

    const preloadCtx = await context({
        entryPoints: ["src/preload.ts"],
        write: true,
        outdir: "H:/LiteLoader/plugins/LiteLoaderQQNT-Plugin-LLAPI/src",

        platform: "node",
        format: "cjs",
        tsconfig: "tsconfig.json",

        external: ["electron", "liteloader"],

        bundle: true,
        minify: true,
        metafile: true,
        color: true,
    });

    console.log(await analyzeMetafile((await preloadCtx.rebuild()).metafile));
    await preloadCtx.dispose();

    const rendererCtx = await context({
        entryPoints: ["src/renderer.ts"],
        write: true,
        outdir: "H:/LiteLoader/plugins/LiteLoaderQQNT-Plugin-LLAPI/src",

        platform: "node",
        format: "cjs",
        tsconfig: "tsconfig.json",

        external: ["electron", "liteloader"],

        bundle: true,
        minify: true,
        metafile: true,
        color: true,
    });

    console.log(await analyzeMetafile((await rendererCtx.rebuild()).metafile));
    await rendererCtx.dispose();
})();
