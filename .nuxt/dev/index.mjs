import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, getResponseStatus, setHeaders, sendRedirect, proxyRequest, createError, getRequestHost, getRequestProtocol, getQuery as getQuery$1, setHeader, getCookie, getHeader, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getRouterParam, sendError, getResponseStatusText, H3Error } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve as resolve$1, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import _RemarkEmoji from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/remark-emoji@5.0.1/node_modules/remark-emoji/index.js';
import _RemarkReadingTime from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/remark-reading-time@2.0.1/node_modules/remark-reading-time/index.js';
import { visit } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js';
import { toString } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/hast-util-to-string@3.0.1/node_modules/hast-util-to-string/index.js';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { html as html$2 } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/satori-html@0.3.2/node_modules/satori-html/dist/index.js';
import { withQuery, joinURL, withTrailingSlash, parseURL, withoutBase, getQuery, joinRelativeURL, hasProtocol, withHttps, withoutProtocol, withoutTrailingSlash, withLeadingSlash, withBase, withoutLeadingSlash, isRelative, parsePath, parseQuery, stringifyQuery, encodePath, stringifyParsedURL } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import sizeOf from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/image-size@2.0.1/node_modules/image-size/dist/index.mjs';
import consola, { consola as consola$1, createConsola } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/consola@3.4.0/node_modules/consola/dist/index.mjs';
import { Launcher } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/chrome-launcher@1.1.2/node_modules/chrome-launcher/dist/index.js';
import playwrightCore from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/playwright-core@1.51.0/node_modules/playwright-core/index.mjs';
import { createWasmOnigEngine } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/engine-oniguruma.mjs';
import { XMLBuilder } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/fast-xml-parser@5.0.9/node_modules/fast-xml-parser/src/fxp.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unhead@2.0.0-rc.13/node_modules/unhead/dist/server.mjs';
import { isVNode, toValue, isRef } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/vue@3.5.13_typescript@5.8.2/node_modules/vue/index.mjs';
import { walkResolver } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unhead@2.0.0-rc.13/node_modules/unhead/dist/utils.mjs';
import { renderToString } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/vue@3.5.13_typescript@5.8.2/node_modules/vue/server-renderer/index.mjs';
import { stringify, parse as parse$1, uneval } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import { createHooks } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { $fetch as $fetch$1, createFetch, Headers as Headers$1 } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import { klona } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { createStorage, prefixStorage, normalizeKey } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { getContext } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import { digest, hash as hash$1 } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import { ErrorParser } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/youch-core@0.3.2/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/youch@4.1.0-beta.6/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/source-map@0.7.4/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import devalue from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@nuxt+devalue@2.0.2/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { defineWebPage } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@unhead+schema-org@2.0.0-rc.13/node_modules/@unhead/schema-org/dist/vue.mjs';
import { minify } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/terser@5.39.0/node_modules/terser/main.js';
import { getTimezoneOffset } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/index.js';
import { basename, resolve as resolve$2, isAbsolute } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@iconify+utils@2.3.0/node_modules/@iconify/utils/lib/index.mjs';
import { collections } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/.nuxt/nuxt-icon-server-bundle.mjs';
import { hash as hash$2 } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/index.mjs';
import { extname } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import { unified } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unified@11.0.5/node_modules/unified/index.js';
import { toString as toString$1 } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/index.js';
import { stringifyPosition } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js';
import { push, splice } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js';
import { resolveAll } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js';
import slugify from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import remarkParse from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/remark-rehype@11.1.1/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/remark-mdc@3.5.3/node_modules/remark-mdc/dist/index.mjs';
import remarkGFM from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/rehype-sort-attribute-values@5.0.1/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/rehype-sort-attributes@5.0.1/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js';
import { detab } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import Slugger from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import Fuse from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs';
import { diffLines } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/diff@7.0.0/node_modules/diff/lib/index.mjs';
import MagicString from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/magic-string@0.30.17/node_modules/magic-string/dist/magic-string.es.mjs';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/ipx@2.1.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0/node_modules/ipx/dist/index.mjs';
import lruCacheDriver from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0/node_modules/unstorage/drivers/lru-cache.mjs';
import { createGenerator } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@unocss+core@66.0.0/node_modules/@unocss/core/dist/index.mjs';
import presetWind from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@unocss+preset-wind3@66.0.0/node_modules/@unocss/preset-wind3/dist/index.mjs';
import { createUnhead } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/unhead@2.0.0-rc.13/node_modules/unhead/dist/index.mjs';
import { Resvg } from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@resvg+resvg-js@2.6.2/node_modules/@resvg/resvg-js/index.js';
import _satori from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/satori@0.12.1/node_modules/satori/dist/index.js';
import empty$1 from 'file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/mocked-exports@0.1.1/node_modules/mocked-exports/lib/empty.mjs';

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve$1(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _bZNJS_nxR5sTD3LmVHS833W1TUhQucLqD1oisf_8NsE = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const rootDir = "/Users/macos/Documents/LongvanV2/AI-Blog";

const appHead = {"link":[{"rel":"icon","href":"https://www.zhilu.cyou/api/icon.png"},{"rel":"alternate","type":"application/atom+xml","href":"/atom.xml"},{"rel":"preconnect","href":"https://twikoo.zhilu.cyou/"},{"rel":"preconnect","href":"https://fonts.googleapis.cn"},{"rel":"preconnect","href":"https://fonts.gstatic.cn"},{"rel":"stylesheet","href":"https://fonts.googleapis.cn/css2?family=Fira+Code:wght@300..700&family=Noto+Serif+SC:wght@200..900&display=swap","media":"none","onload":"this.media=\"all\""}],"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"author","content":"ZTBee <hi@zhilu.cyou>"},{"name":"generator","content":"blog-v3","data-github-repo":"https://github.com/L33Z22L11/blog-v3"},{"property":"og:type","content":"website"}],"style":[],"script":[{"src":"https://zhi.zhilu.cyou/zhi.js","data-website-id":"a1997c81-a42b-46f6-8d1d-8fbd67a8ef41","defer":true},{"src":"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":"{\"token\": \"97a4fe32ed8240ac8284e9bffaf03962\"}","defer":true}],"noscript":[],"htmlAttrs":{"lang":"en"},"templateParams":{"separator":"|"},"titleTemplate":"%s %separator ZTBee"};

const appRootTag = "div";

const appRootAttrs = {"id":"z-root"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _lWOgo1xSJhEtHlQ0lV5FmdGnKRGeJ9aj2SmaB3ng = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const defineAppConfig = (config) => config;

const redirectList = {
	"/201103/essay1-where": "/2010s/essay1-where",
	"/201408/have-a-strange-dream": "/2010s/have-a-strange-dream",
	"/201505/phone-2015": "/2010s/phone-2015",
	"/201606/school-stress": "/2010s/school-stress",
	"/201805/windows-launch-anim": "/2010s/windows-launch-anim",
	"/201907/score-query-leak": "/2010s/score-query-leak",
	"/201908/zhilu-site-biography": "/2010s/zhilu-site-biography",
	"/202002/essay3": "/2020/essay3",
	"/202002/essay4": "/2020/essay4",
	"/202002/father-birthday": "/2020/father-birthday",
	"/202006/school-diary": "/2020/school-diary",
	"/202010/life-is-dramatic": "/2020/life-is-dramatic",
	"/202105/virus-fakefolder": "/2021/virus-fakefolder",
	"/202110/exam-clock-develop": "/2021/exam-clock-develop",
	"/202110/noob-in-ctf": "/2021/noob-in-ctf",
	"/202111/message-heard": "/2021/message-heard",
	"/202201/school-thief": "/2022/school-thief",
	"/202209/ctf-nwpu": "/2022/ctf-nwpu",
	"/202210/thoughts-in-classroom": "/2022/thoughts-in-classroom",
	"/202211/linux-interview-2020": "/2022/linux-interview-2020",
	"/202212/linux-interview-2021": "/2022/linux-interview-2021",
	"/202301/linux-interview-2022": "/2022/linux-interview-2022",
	"/2023/linux-interview-2022": "/2022/linux-interview-2022",
	"/202302/c-strbuf": "/2023/c-strbuf",
	"/202303/linuxqq-crash": "/2023/linuxqq-crash",
	"/202304/vscode-simple-config": "/2023/vscode-simple-config",
	"/202305/archinstall-guide": "/2023/archinstall-guide",
	"/202306/archlinux-configure": "/2023/archlinux-configure",
	"/202307/archlinux-beautify": "/2023/archlinux-beautify",
	"/202308/light-backpack": "/2023/light-backpack",
	"/202309/windows-setup-guide": "/2023/windows-setup-guide",
	"/202310/tailscale-incomplete-guide": "/2023/tailscale-incomplete-guide",
	"/202311/termux-guide": "/2023/termux-guide",
	"/202311/xv6-lab-setup": "/2023/xv6-lab-setup",
	"/202312/ssh-key-login": "/2023/ssh-key-login",
	"/202401/milink-util": "/2024/milink-util",
	"/202401/moonlight-streaming-guide": "/2024/moonlight-streaming-guide",
	"/202402/apps-websites-preference-2023": "/2024/apps-websites-preference-2023",
	"/202402/carrier-overbilling": "/2024/carrier-overbilling",
	"/202402/link-util": "/2024/link-util",
	"/202402/virus-trueupdate": "/2024/virus-trueupdate",
	"/202403/balancing-today-tomorrow": "/2024/balancing-today-tomorrow",
	"/202403/boot-management": "/2024/boot-management",
	"/202403/helping-day": "/2024/helping-day",
	"/202404/archlinux-boot-repair": "/2024/archlinux-boot-repair",
	"/202404/magic-code": "/2024/magic-code"
};

const blogConfig = {
  title: "ZTBee",
  subtitle: "The path is unclear, yet the journey continues",
  // A long description is beneficial for SEO
  description: `ZTBee's personal blog, sharing technology and life. "Keep tinkering, keep exploring." ZTBee is an open-source enthusiast who has met many like-minded friends. This blog records his experiences in life and technical learning, filled with inspiration and thoughts. The website has a clean and beautiful interface, rich and practical content, and active user interaction. It covers programming, life, learning, and other fields, providing an excellent reading experience for visitors.`,
  author: {
    name: "ZTBee",
    avatar: "https://www.zhilu.cyou/api/avatar.png",
    email: "hi@zhilu.cyou",
    homepage: "https://www.zhilu.cyou/"
  },
  copyright: {
    abbr: "CC BY-NC-SA 4.0",
    name: "Attribution-NonCommercial-ShareAlike 4.0 International",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
  },
  favicon: "https://www.zhilu.cyou/api/icon.png",
  language: "en",
  qqGroup: "169994096",
  timeEstablished: "2019-07-19",
  timezone: "Asia/Shanghai",
  url: "https://blog.zhilu.cyou/",
  feed: {
    limit: 50
  },
  // Hidden URL prefixes
  hideContentPrefixes: ["/posts"],
  imageDomains: [
    // Enable Nuxt Image for this domain automatically
    // 'www.zhilu.cyou',
    // '7.isyangs.cn',
  ],
  // Paths excluded from search engine indexing
  robotsNotIndex: ["/preview", "/previews/*"],
  scripts: [
    // Self-hosted Umami analytics
    { "src": "https://zhi.zhilu.cyou/zhi.js", "data-website-id": "a1997c81-a42b-46f6-8d1d-8fbd67a8ef41", "defer": true },
    // Cloudflare Insights analytics
    { "src": "https://static.cloudflareinsights.com/beacon.min.js", "data-cf-beacon": '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', "defer": true }
  ],
  // Configuration for Shiki & Plain Shiki for syntax highlighting
  // Also used for Iconify Catppuccin icons corresponding to code block languages
  shiki: {
    bundledLangs: ["bat", "log", "sh", "powershell"],
    langs: ["bat", "c", "cpp", "css", "diff", "html", "ini", "java", "js", "json", "log", "makefile", "matlab", "md", "mdc", "powershell", "python", "sh", "sql", "ssh-config", "toml", "ts", "tsx", "vb", "vue", "xml", "yaml"],
    themes: ["catppuccin-latte", "one-dark-pro"],
    defaultTheme: "catppuccin-latte",
    darkTheme: "one-dark-pro"
  },
  // Configuration for Twikoo comment system
  twikoo: {
    js: "https://gcore.jsdelivr.net/npm/twikoo@1.6.40/dist/twikoo.all.min.js",
    // Self-hosted Twikoo service
    envId: "https://twikoo.zhilu.cyou/",
    preload: "https://twikoo.zhilu.cyou/"
  }
};
const myFeed = {
  author: blogConfig.author.name,
  sitenick: "Chill Zone",
  title: blogConfig.title,
  desc: blogConfig.subtitle,
  link: blogConfig.url,
  feed: new URL("/atom.xml", blogConfig.url).toString(),
  avatar: blogConfig.author.avatar,
  date: blogConfig.timeEstablished};
const redirectRouteRules = Object.entries(redirectList).reduce((acc, [from, to]) => {
  acc[from] = { redirect: { to, statusCode: 301 } };
  return acc;
}, {});
({
  ...redirectRouteRules});

const appConfig0 = defineAppConfig({
  ...blogConfig,
  article: {
    categories: {
      \u7ECF\u9A8C\u5206\u4EAB: { icon: "ph:mouse-bold", color: "#3af" },
      \u751F\u6D3B: { icon: "ph:shooting-star-bold", color: "#3ba" },
      \u4EE3\u7801: { icon: "ph:code-bold", color: "#77f" },
      \u672A\u5206\u7C7B: { icon: "ph:folder-dotted-bold" }
    },
    defaultCategoryIcon: "ph:folder-bold",
    /** 分类排序方式，键为排序字段，值为显示名称 */
    order: {
      date: "\u521B\u5EFA\u65E5\u671F",
      updated: "\u66F4\u65B0\u65E5\u671F"
      // title: '标题',
    },
    // 需要同时修改上方分类图标对应的键名
    uncategorizedLabel: "\u672A\u5206\u7C7B"
  },
  content: {
    /** 代码块自动折叠触发行数 */
    codeblockCollapsibleRows: 16,
    /** 文章开头摘要 */
    excerpt: {
      animation: true,
      caret: "_"
    }
  },
  footer: {
    /** 页脚版权信息 */
    copyright: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${blogConfig.author.name}`,
    /** 侧边栏底部图标导航 */
    iconNav: [
      { icon: "ph:house-bold", text: "\u4E2A\u4EBA\u4E3B\u9875", url: blogConfig.author.homepage },
      { icon: "ri:qq-line", text: "\u4EA4\u6D41\u7FA4: 169994096", url: "https://jq.qq.com/?_wv=1027&k=lQfNSeEd" },
      { icon: "ph:github-logo-bold", text: "GitHub: L33Z22L11", url: "https://github.com/L33Z22L11" },
      { icon: "ph:rss-simple-bold", text: "Atom\u8BA2\u9605", url: "/atom.xml" },
      { icon: "ph:subway-bold", text: "\u5F00\u5F80", url: "https://www.travellings.cn/go-by-clouds.html" }
    ],
    /** 页脚站点地图 */
    nav: [
      {
        title: "\u63A2\u7D22",
        items: [
          { icon: "ph:rss-simple-bold", text: "Atom\u8BA2\u9605", url: "/atom.xml" },
          { icon: "ph:subway-bold", text: "\u5F00\u5F80", url: "https://www.travellings.cn/go-by-clouds.html" },
          { icon: "ph:flying-saucer-bold", text: "\u5F02\u6B21\u5143\u65C5\u884C", url: "https://travel.moe/go.html?travel=on" }
        ]
      },
      {
        title: "\u793E\u4EA4",
        items: [
          { icon: "ph:github-logo-bold", text: "L33Z22L11", url: "https://github.com/L33Z22L11" },
          { icon: "ri:qq-line", text: "\u7FA4: 169994096", url: "https://jq.qq.com/?_wv=1027&k=lQfNSeEd" },
          { icon: "ph:envelope-simple-bold", text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` }
        ]
      },
      {
        title: "\u4FE1\u606F",
        items: [
          { icon: "simple-icons:nuxtdotjs", text: "Nuxt\u535A\u5BA2\u5DF2\u5F00\u6E90", url: "https://github.com/L33Z22L11/blog-v3" },
          { icon: "ph:swatches-bold", text: "\u4E3B\u9898\u7075\u611F\u6E90\u81EAStellar", url: "/theme" },
          { icon: "ph:certificate-bold", text: "\u840CICP\u590720246888\u53F7", url: "https://icp.gov.moe/?keyword=20246888" }
        ]
      }
    ],
    /** 页脚版权信息底部的其他信息 */
    message: ""
  },
  /** 左侧栏顶部 Logo */
  header: {
    logo: "https://weavatar.com/avatar/47c0f2e82b76d9b10eb3023df9e02e4e3fdbeaf5b74b842063f207971e7fbe7b?s=160",
    /** 展示标题文本，否则展示纯 Logo */
    showTitle: true,
    subtitle: blogConfig.subtitle,
    emojiTail: ["\u{1F4C4}", "\u{1F98C}", "\u{1F64C}", "\u{1F41F}", "\u{1F3D6}\uFE0F"]
  },
  pagination: {
    perPage: 10,
    /** 默认排序方式，需要是 this.article.order 中的键名 */
    sortOrder: "date",
    /** 允许（普通/预览/归档）文章列表正序，开启后排序方式左侧图标可切换顺序 */
    allowAscending: false
  },
  /** 左侧栏导航 */
  nav: [
    {
      title: "",
      items: [
        { icon: "ph:files-bold", text: "\u6587\u7AE0", url: "/" },
        { icon: "ph:link-bold", text: "\u53CB\u94FE", url: "/link" },
        { icon: "ph:archive-bold", text: "\u5F52\u6863", url: "/archive" }
      ]
    }
  ],
  /** 风格化 blog-stats widget */
  seasonal: {
    // widgetBackground: 'https://wsrv.nl/?url=i2.hdslb.com/bfs/archive/46165212e09842103752c453d7987a470059760b.jpg@320w',
    // emoji: '🧧',
  },
  stats: {
    /** 归档页面每年标题对应的年龄 */
    birthYear: 2003,
    /** blog-stats widget 的预置文本 */
    wordCount: "\u7EA610\u4E07"
  },
  themes: {
    light: {
      icon: "ph:sun-bold",
      tip: "\u6D45\u8272\u6A21\u5F0F"
    },
    system: {
      icon: "ph:monitor-bold",
      tip: "\u8DDF\u968F\u7CFB\u7EDF"
    },
    dark: {
      icon: "ph:moon-bold",
      tip: "\u6DF1\u8272\u6A21\u5F0F"
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons",
      "zi"
    ],
    "fetchTimeout": 1500,
    "customCollections": [
      "zi"
    ]
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/201103/essay1-where": {
        "redirect": {
          "to": "/2010s/essay1-where",
          "statusCode": 301
        }
      },
      "/201408/have-a-strange-dream": {
        "redirect": {
          "to": "/2010s/have-a-strange-dream",
          "statusCode": 301
        }
      },
      "/201505/phone-2015": {
        "redirect": {
          "to": "/2010s/phone-2015",
          "statusCode": 301
        }
      },
      "/201606/school-stress": {
        "redirect": {
          "to": "/2010s/school-stress",
          "statusCode": 301
        }
      },
      "/201805/windows-launch-anim": {
        "redirect": {
          "to": "/2010s/windows-launch-anim",
          "statusCode": 301
        }
      },
      "/201907/score-query-leak": {
        "redirect": {
          "to": "/2010s/score-query-leak",
          "statusCode": 301
        }
      },
      "/201908/zhilu-site-biography": {
        "redirect": {
          "to": "/2010s/zhilu-site-biography",
          "statusCode": 301
        }
      },
      "/202002/essay3": {
        "redirect": {
          "to": "/2020/essay3",
          "statusCode": 301
        }
      },
      "/202002/essay4": {
        "redirect": {
          "to": "/2020/essay4",
          "statusCode": 301
        }
      },
      "/202002/father-birthday": {
        "redirect": {
          "to": "/2020/father-birthday",
          "statusCode": 301
        }
      },
      "/202006/school-diary": {
        "redirect": {
          "to": "/2020/school-diary",
          "statusCode": 301
        }
      },
      "/202010/life-is-dramatic": {
        "redirect": {
          "to": "/2020/life-is-dramatic",
          "statusCode": 301
        }
      },
      "/202105/virus-fakefolder": {
        "redirect": {
          "to": "/2021/virus-fakefolder",
          "statusCode": 301
        }
      },
      "/202110/exam-clock-develop": {
        "redirect": {
          "to": "/2021/exam-clock-develop",
          "statusCode": 301
        }
      },
      "/202110/noob-in-ctf": {
        "redirect": {
          "to": "/2021/noob-in-ctf",
          "statusCode": 301
        }
      },
      "/202111/message-heard": {
        "redirect": {
          "to": "/2021/message-heard",
          "statusCode": 301
        }
      },
      "/202201/school-thief": {
        "redirect": {
          "to": "/2022/school-thief",
          "statusCode": 301
        }
      },
      "/202209/ctf-nwpu": {
        "redirect": {
          "to": "/2022/ctf-nwpu",
          "statusCode": 301
        }
      },
      "/202210/thoughts-in-classroom": {
        "redirect": {
          "to": "/2022/thoughts-in-classroom",
          "statusCode": 301
        }
      },
      "/202211/linux-interview-2020": {
        "redirect": {
          "to": "/2022/linux-interview-2020",
          "statusCode": 301
        }
      },
      "/202212/linux-interview-2021": {
        "redirect": {
          "to": "/2022/linux-interview-2021",
          "statusCode": 301
        }
      },
      "/202301/linux-interview-2022": {
        "redirect": {
          "to": "/2022/linux-interview-2022",
          "statusCode": 301
        }
      },
      "/2023/linux-interview-2022": {
        "redirect": {
          "to": "/2022/linux-interview-2022",
          "statusCode": 301
        }
      },
      "/202302/c-strbuf": {
        "redirect": {
          "to": "/2023/c-strbuf",
          "statusCode": 301
        }
      },
      "/202303/linuxqq-crash": {
        "redirect": {
          "to": "/2023/linuxqq-crash",
          "statusCode": 301
        }
      },
      "/202304/vscode-simple-config": {
        "redirect": {
          "to": "/2023/vscode-simple-config",
          "statusCode": 301
        }
      },
      "/202305/archinstall-guide": {
        "redirect": {
          "to": "/2023/archinstall-guide",
          "statusCode": 301
        }
      },
      "/202306/archlinux-configure": {
        "redirect": {
          "to": "/2023/archlinux-configure",
          "statusCode": 301
        }
      },
      "/202307/archlinux-beautify": {
        "redirect": {
          "to": "/2023/archlinux-beautify",
          "statusCode": 301
        }
      },
      "/202308/light-backpack": {
        "redirect": {
          "to": "/2023/light-backpack",
          "statusCode": 301
        }
      },
      "/202309/windows-setup-guide": {
        "redirect": {
          "to": "/2023/windows-setup-guide",
          "statusCode": 301
        }
      },
      "/202310/tailscale-incomplete-guide": {
        "redirect": {
          "to": "/2023/tailscale-incomplete-guide",
          "statusCode": 301
        }
      },
      "/202311/termux-guide": {
        "redirect": {
          "to": "/2023/termux-guide",
          "statusCode": 301
        }
      },
      "/202311/xv6-lab-setup": {
        "redirect": {
          "to": "/2023/xv6-lab-setup",
          "statusCode": 301
        }
      },
      "/202312/ssh-key-login": {
        "redirect": {
          "to": "/2023/ssh-key-login",
          "statusCode": 301
        }
      },
      "/202401/milink-util": {
        "redirect": {
          "to": "/2024/milink-util",
          "statusCode": 301
        }
      },
      "/202401/moonlight-streaming-guide": {
        "redirect": {
          "to": "/2024/moonlight-streaming-guide",
          "statusCode": 301
        }
      },
      "/202402/apps-websites-preference-2023": {
        "redirect": {
          "to": "/2024/apps-websites-preference-2023",
          "statusCode": 301
        }
      },
      "/202402/carrier-overbilling": {
        "redirect": {
          "to": "/2024/carrier-overbilling",
          "statusCode": 301
        }
      },
      "/202402/link-util": {
        "redirect": {
          "to": "/2024/link-util",
          "statusCode": 301
        }
      },
      "/202402/virus-trueupdate": {
        "redirect": {
          "to": "/2024/virus-trueupdate",
          "statusCode": 301
        }
      },
      "/202403/balancing-today-tomorrow": {
        "redirect": {
          "to": "/2024/balancing-today-tomorrow",
          "statusCode": 301
        }
      },
      "/202403/boot-management": {
        "redirect": {
          "to": "/2024/boot-management",
          "statusCode": 301
        }
      },
      "/202403/helping-day": {
        "redirect": {
          "to": "/2024/helping-day",
          "statusCode": 301
        }
      },
      "/202404/archlinux-boot-repair": {
        "redirect": {
          "to": "/2024/archlinux-boot-repair",
          "statusCode": 301
        }
      },
      "/202404/magic-code": {
        "redirect": {
          "to": "/2024/magic-code",
          "statusCode": 301
        }
      },
      "/api/stats": {
        "prerender": true,
        "headers": {
          "Content-Type": "application/json"
        }
      },
      "/atom.xml": {
        "prerender": true,
        "headers": {
          "Content-Type": "application/xml"
        }
      },
      "/zhilu.opml": {
        "prerender": true,
        "headers": {
          "Content-Type": "application/xml"
        }
      },
      "/__sitemap__/style.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {},
      "/_nuxt": {
        "robots": "noindex",
        "headers": {
          "X-Robots-Tag": "noindex"
        }
      },
      "/_nuxt/**": {
        "robots": "noindex",
        "headers": {
          "X-Robots-Tag": "noindex"
        }
      },
      "/api/_content/search": {
        "prerender": true,
        "headers": {
          "Content-Type": "text/plain; charset=utf-8"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "buildTime": "2025-03-17T18:06:20.772Z",
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": "",
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "langs": [
          "bat",
          "c",
          "cpp",
          "css",
          "diff",
          "html",
          "ini",
          "java",
          "js",
          "json",
          "log",
          "makefile",
          "matlab",
          "md",
          "mdc",
          "powershell",
          "python",
          "sh",
          "sql",
          "ssh-config",
          "toml",
          "ts",
          "tsx",
          "vb",
          "vue",
          "xml",
          "yaml"
        ],
        "theme": {
          "default": "catppuccin-latte",
          "dark": "one-dark-pro"
        },
        "highlighter": "shiki",
        "shikiEngine": "oniguruma"
      },
      "wsUrl": "ws://localhost:4000/",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "search": {
        "indexed": true,
        "ignoredTags": [
          "script",
          "style",
          "pre"
        ],
        "filterQuery": {
          "_draft": false,
          "_partial": false
        },
        "options": {
          "fields": [
            "title",
            "content",
            "titles"
          ],
          "storeFields": [
            "title",
            "content",
            "titles"
          ],
          "searchOptions": {
            "prefix": true,
            "fuzzy": 0.2,
            "boost": {
              "title": 4,
              "content": 2,
              "titles": 1
            }
          }
        }
      },
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    },
    "nuxt-schema-org": {
      "reactive": true,
      "minify": false,
      "scriptAttributes": {
        "data-nuxt-schema-org": true
      },
      "identity": "",
      "version": "5.0.4"
    },
    "nuxt-link-checker": {
      "version": "4.2.0",
      "hasSitemapModule": true,
      "rootDir": "/Users/macos/Documents/LongvanV2/AI-Blog",
      "excludeLinks": [],
      "skipInspections": [],
      "fetchTimeout": 10000,
      "showLiveInspections": false,
      "fetchRemoteUrls": false
    },
    "seo-utils": {
      "canonicalQueryWhitelist": [
        "page",
        "sort",
        "filter",
        "search",
        "q",
        "category",
        "tag"
      ],
      "canonicalLowercase": true
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "IFk5w8Cbbc",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "langs": [
        "bat",
        "c",
        "cpp",
        "css",
        "diff",
        "html",
        "ini",
        "java",
        "js",
        "json",
        "log",
        "makefile",
        "matlab",
        "md",
        "mdc",
        "powershell",
        "python",
        "sh",
        "sql",
        "ssh-config",
        "toml",
        "ts",
        "tsx",
        "vb",
        "vue",
        "xml",
        "yaml"
      ],
      "theme": {
        "default": "catppuccin-latte",
        "dark": "one-dark-pro"
      },
      "highlighter": "shiki",
      "shikiEngine": "oniguruma"
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {
        "remark-reading-time": {}
      },
      "toc": {
        "depth": 4,
        "searchDepth": 4
      },
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "contentHead": true,
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": {
        "indexed": true,
        "ignoredTags": [
          "script",
          "style",
          "pre"
        ],
        "filterQuery": {
          "_draft": false,
          "_partial": false
        },
        "options": {
          "fields": [
            "title",
            "content",
            "titles"
          ],
          "storeFields": [
            "title",
            "content",
            "titles"
          ],
          "searchOptions": {
            "prefix": true,
            "fuzzy": 0.2,
            "boost": {
              "title": 4,
              "content": 2,
              "titles": 1
            }
          }
        }
      }
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": false,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 0,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "7.2.9",
    "sitemaps": {
      "sitemap.xml": {
        "sitemapName": "sitemap.xml",
        "route": "sitemap.xml",
        "defaults": {},
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true
      }
    }
  },
  "nuxt-schema-org": {
    "reactive": true,
    "minify": false,
    "scriptAttributes": {
      "data-nuxt-schema-org": true
    },
    "identity": "",
    "version": "5.0.4"
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "AI-Blog",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "zhilu-blog"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "name": "ZTBee",
        "url": "https://blog.zhilu.cyou/"
      }
    ],
    "version": "3.1.5",
    "debug": false,
    "multiTenancy": []
  },
  "nuxt-robots": {
    "version": "5.2.8",
    "isNuxtContentV2": true,
    "debug": false,
    "credits": true,
    "groups": [
      {
        "userAgent": [
          "*"
        ],
        "disallow": [
          "/preview",
          "/previews/*"
        ],
        "allow": [],
        "_indexable": true,
        "_rules": [
          {
            "pattern": "/preview",
            "allow": false
          },
          {
            "pattern": "/previews/*",
            "allow": false
          }
        ]
      }
    ],
    "sitemap": [
      "/sitemap.xml"
    ],
    "header": true,
    "robotsEnabledValue": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "robotsDisabledValue": "noindex, nofollow",
    "cacheControl": "max-age=14400, must-revalidate"
  },
  "nuxt-og-image": {
    "version": "5.0.3",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "NuxtSeo",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": true,
    "baseCacheKey": "/cache/nuxt-og-image/5.0.3",
    "fonts": [
      {
        "cacheKey": "Inter:undefined:400",
        "style": "normal",
        "weight": 400,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-400.ttf.base64"
      },
      {
        "cacheKey": "Inter:undefined:700",
        "style": "normal",
        "weight": 700,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": true,
    "colorPreference": "light",
    "strictNuxtContentPaths": "",
    "isNuxtContentDocumentDriven": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/macos/Documents/LongvanV2/AI-Blog/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function defineNitroPlugin(def) {
  return def;
}

const serverAssets = [{"baseName":"nuxt-og-image:fonts","dir":"/Users/macos/Documents/LongvanV2/AI-Blog/.nuxt/cache/nuxt-og-image@5.0.3/_fonts"},{"baseName":"server","dir":"/Users/macos/Documents/LongvanV2/AI-Blog/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/macos/Documents/LongvanV2/AI-Blog","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/macos/Documents/LongvanV2/AI-Blog/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/macos/Documents/LongvanV2/AI-Blog/content"}));
storage$1.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/macos/Documents/LongvanV2/AI-Blog/.nuxt/content-cache"}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/macos/Documents/LongvanV2/AI-Blog/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/macos/Documents/LongvanV2/AI-Blog/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/macos/Documents/LongvanV2/AI-Blog/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
class Hasher {
  buff = "";
  #context = /* @__PURE__ */ new Map();
  write(str) {
    this.buff += str;
  }
  dispatch(value) {
    const type = value === null ? "null" : typeof value;
    return this[type](value);
  }
  object(object) {
    if (object && typeof object.toJSON === "function") {
      return this.object(object.toJSON());
    }
    const objString = Object.prototype.toString.call(object);
    let objType = "";
    const objectLength = objString.length;
    objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
    objType = objType.toLowerCase();
    let objectNumber = null;
    if ((objectNumber = this.#context.get(object)) === void 0) {
      this.#context.set(object, this.#context.size);
    } else {
      return this.dispatch("[CIRCULAR:" + objectNumber + "]");
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
      this.write("buffer:");
      return this.write(object.toString("utf8"));
    }
    if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
      if (this[objType]) {
        this[objType](object);
      } else {
        this.unknown(object, objType);
      }
    } else {
      const keys = Object.keys(object).sort();
      const extraKeys = [];
      this.write("object:" + (keys.length + extraKeys.length) + ":");
      const dispatchForKey = (key) => {
        this.dispatch(key);
        this.write(":");
        this.dispatch(object[key]);
        this.write(",");
      };
      for (const key of keys) {
        dispatchForKey(key);
      }
      for (const key of extraKeys) {
        dispatchForKey(key);
      }
    }
  }
  array(arr, unordered) {
    unordered = unordered === void 0 ? false : unordered;
    this.write("array:" + arr.length + ":");
    if (!unordered || arr.length <= 1) {
      for (const entry of arr) {
        this.dispatch(entry);
      }
      return;
    }
    const contextAdditions = /* @__PURE__ */ new Map();
    const entries = arr.map((entry) => {
      const hasher = new Hasher();
      hasher.dispatch(entry);
      for (const [key, value] of hasher.#context) {
        contextAdditions.set(key, value);
      }
      return hasher.toString();
    });
    this.#context = contextAdditions;
    entries.sort();
    return this.array(entries, false);
  }
  date(date) {
    return this.write("date:" + date.toJSON());
  }
  symbol(sym) {
    return this.write("symbol:" + sym.toString());
  }
  unknown(value, type) {
    this.write(type);
    if (!value) {
      return;
    }
    this.write(":");
    if (value && typeof value.entries === "function") {
      return this.array(
        [...value.entries()],
        true
        /* ordered */
      );
    }
  }
  error(err) {
    return this.write("error:" + err.toString());
  }
  boolean(bool) {
    return this.write("bool:" + bool);
  }
  string(string) {
    this.write("string:" + string.length + ":");
    this.write(string);
  }
  function(fn) {
    this.write("fn:");
    if (isNativeFunction(fn)) {
      this.dispatch("[native]");
    } else {
      this.dispatch(fn.toString());
    }
  }
  number(number) {
    return this.write("number:" + number);
  }
  null() {
    return this.write("Null");
  }
  undefined() {
    return this.write("Undefined");
  }
  regexp(regex) {
    return this.write("regex:" + regex.toString());
  }
  arraybuffer(arr) {
    this.write("arraybuffer:");
    return this.dispatch(new Uint8Array(arr));
  }
  url(url) {
    return this.write("url:" + url.toString());
  }
  map(map) {
    this.write("map:");
    const arr = [...map];
    return this.array(arr, false);
  }
  set(set) {
    this.write("set:");
    const arr = [...set];
    return this.array(arr, false);
  }
  bigint(number) {
    return this.write("bigint:" + number.toString());
  }
}
for (const type of [
  "uint8array",
  "uint8clampedarray",
  "unt8array",
  "uint16array",
  "unt16array",
  "uint32array",
  "unt32array",
  "float32array",
  "float64array"
]) {
  Hasher.prototype[type] = function(arr) {
    this.write(type + ":");
    return this.array([...arr], false);
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[((\\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html$1(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image$2(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html: html$1,
  list,
  image: image$2,
  strong,
  inlineCode,
  containerComponent
};

const defaults$1 = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => Number.parseInt(i));
    }
  }
  return props;
};

function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}

let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await Promise.resolve().then(function () { return mdcImports; }).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await Promise.resolve().then(function () { return mdcConfigs; }).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs$1 = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    console.warn("[@nuxtjs/mdc] `highlighter` passed to `parseMarkdown` is should be a function, but got " + JSON.stringify(inlineOptions.highlight.highlighter) + ", ignored.");
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu$1(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults$1);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  return async function parse(md, { fileOptions } = {}) {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ ...fileOptions, value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      processedFile?.data || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu$1(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, markdownParserOptions = {}, parseOptions = {}) => {
  const parser = await createMarkdownParser(markdownParserOptions);
  return parser(md, parseOptions);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    let idx;
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      idx = stack.push(entry);
    return () => {
      if (typeof idx !== "undefined") {
        stack.splice(idx - 1, 1);
      }
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$3 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function useSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$3.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function getSiteIndexable(e) {
  const { env, indexable } = useSiteConfig(e);
  if (typeof indexable !== "undefined")
    return String(indexable) === "true";
  return env === "production";
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  port = process.env.NITRO_PORT || process.env.PORT || "3000";
  let protocol = cert && key || false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (e) {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}
function withSiteUrl(e, path, options = {}) {
  const siteConfig = e.context.siteConfig?.get();
  let siteUrl = e.context.siteConfigNitroOrigin;
  if ((options.canonical !== false || false) && siteConfig.url)
    siteUrl = siteConfig.url;
  return resolveSitePath(path, {
    absolute: true,
    siteUrl,
    trailingSlash: siteConfig.trailingSlash,
    base: e.context.nitro.baseURL,
    withBase: options.withBase
  });
}

function matches(pattern, path) {
  const pathLength = path.length;
  const patternLength = pattern.length;
  const matchingLengths = Array.from({ length: pathLength + 1 }).fill(0);
  let numMatchingLengths = 1;
  let p = 0;
  while (p < patternLength) {
    if (pattern[p] === "$" && p + 1 === patternLength) {
      return matchingLengths[numMatchingLengths - 1] === pathLength;
    }
    if (pattern[p] === "*") {
      numMatchingLengths = pathLength - matchingLengths[0] + 1;
      for (let i = 1; i < numMatchingLengths; i++) {
        matchingLengths[i] = matchingLengths[i - 1] + 1;
      }
    } else {
      let numMatches = 0;
      for (let i = 0; i < numMatchingLengths; i++) {
        const matchLength = matchingLengths[i];
        if (matchLength < pathLength && path[matchLength] === pattern[p]) {
          matchingLengths[numMatches++] = matchLength + 1;
        }
      }
      if (numMatches === 0) {
        return false;
      }
      numMatchingLengths = numMatches;
    }
    p++;
  }
  return true;
}
function matchPathToRule(path, _rules) {
  let matchedRule = null;
  const rules = _rules.filter(Boolean);
  const rulesLength = rules.length;
  let i = 0;
  while (i < rulesLength) {
    const rule = rules[i];
    if (!matches(rule.pattern, path)) {
      i++;
      continue;
    }
    if (!matchedRule || rule.pattern.length > matchedRule.pattern.length) {
      matchedRule = rule;
    } else if (rule.pattern.length === matchedRule.pattern.length && rule.allow && !matchedRule.allow) {
      matchedRule = rule;
    }
    i++;
  }
  return matchedRule;
}
function asArray(v) {
  return typeof v === "undefined" ? [] : Array.isArray(v) ? v : [v];
}
function generateRobotsTxt({ groups, sitemaps }) {
  const lines = [];
  for (const group of groups) {
    for (const comment of group.comment || [])
      lines.push(`# ${comment}`);
    for (const userAgent of group.userAgent || ["*"])
      lines.push(`User-agent: ${userAgent}`);
    for (const allow of group.allow || [])
      lines.push(`Allow: ${allow}`);
    for (const disallow of group.disallow || [])
      lines.push(`Disallow: ${disallow}`);
    for (const cleanParam of group.cleanParam || [])
      lines.push(`Clean-param: ${cleanParam}`);
    lines.push("");
  }
  for (const sitemap of sitemaps)
    lines.push(`Sitemap: ${sitemap}`);
  return lines.join("\n");
}
createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function normaliseRobotsRouteRule(config) {
  let allow;
  if (typeof config.robots === "boolean")
    allow = config.robots;
  else if (typeof config.robots === "object" && typeof config.robots.indexable !== "undefined")
    allow = config.robots.indexable;
  let rule;
  if (typeof config.robots === "object" && typeof config.robots.rule !== "undefined")
    rule = config.robots.rule;
  else if (typeof config.robots === "string")
    rule = config.robots;
  if (rule && !allow)
    allow = rule !== "none" && !rule.includes("noindex");
  if (typeof allow === "undefined" && typeof rule === "undefined")
    return;
  return {
    allow,
    rule
  };
}

function withoutQuery$3(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$2() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$3(path)), app.baseURL)
    ).reverse());
  };
}

function getSiteRobotConfig(e) {
  const query = getQuery$1(e);
  const hints = [];
  const { groups, debug } = useRuntimeConfig(e)["nuxt-robots"];
  let indexable = getSiteIndexable(e);
  const queryIndexableEnabled = String(query.mockProductionEnv) === "true" || query.mockProductionEnv === "";
  {
    const { _context } = useSiteConfig(e, { debug: debug || true });
    if (queryIndexableEnabled) {
      indexable = true;
      hints.push("You are mocking a production enviroment with ?mockProductionEnv query.");
    } else if (!indexable && _context.indexable === "nuxt-robots:config") {
      hints.push("You are blocking indexing with your Nuxt Robots config.");
    } else if (!queryIndexableEnabled && !_context.indexable) {
      hints.push(`Indexing is blocked in development. You can mock a production environment with ?mockProductionEnv query.`);
    } else if (!indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is blocked by site config set by ${_context.indexable}.`);
    } else if (indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is enabled from ${_context.indexable}.`);
    }
  }
  if (groups.some((g) => g.userAgent.includes("*") && g.disallow.includes("/"))) {
    indexable = false;
    hints.push("You are blocking all user agents with a wildcard `Disallow /`.");
  } else if (groups.some((g) => g.disallow.includes("/"))) {
    hints.push("You are blocking specific user agents with `Disallow /`.");
  }
  return { indexable, hints };
}

function getPathRobotConfig(e, options) {
  const { robotsDisabledValue, robotsEnabledValue, isNuxtContentV2 } = useRuntimeConfig()["nuxt-robots"];
  if (!options?.skipSiteIndexable) {
    if (!getSiteRobotConfig(e).indexable) {
      return {
        rule: robotsDisabledValue,
        indexable: false,
        debug: {
          source: "Site Config"
        }
      };
    }
  }
  const path = options?.path || e.path;
  let userAgent = options?.userAgent;
  if (!userAgent) {
    try {
      userAgent = getRequestHeader(e, "User-Agent");
    } catch {
    }
  }
  const nitroApp = useNitroApp();
  const groups = [
    // run explicit user agent matching first
    ...nitroApp._robots.ctx.groups.filter((g) => {
      if (userAgent) {
        return g.userAgent.some((ua) => ua.toLowerCase().includes(userAgent.toLowerCase()));
      }
      return false;
    }),
    // run wildcard matches second
    ...nitroApp._robots.ctx.groups.filter((g) => g.userAgent.includes("*"))
  ];
  for (const group of groups) {
    if (!group._indexable) {
      return {
        indexable: false,
        rule: robotsDisabledValue,
        debug: {
          source: "/robots.txt",
          line: `Disallow: /`
        }
      };
    }
    const robotsTxtRule = matchPathToRule(path, group._rules);
    if (robotsTxtRule) {
      if (!robotsTxtRule.allow) {
        return {
          indexable: false,
          rule: robotsDisabledValue,
          debug: {
            source: "/robots.txt",
            line: `Disallow: ${robotsTxtRule.pattern}`
          }
        };
      }
      break;
    }
  }
  if (isNuxtContentV2 && nitroApp._robots?.nuxtContentUrls?.has(withoutTrailingSlash(path))) {
    return {
      indexable: false,
      rule: robotsDisabledValue,
      debug: {
        source: "Nuxt Content"
      }
    };
  }
  nitroApp._robotsRuleMactcher = nitroApp._robotsRuleMactcher || createNitroRouteRuleMatcher$2();
  const routeRules = normaliseRobotsRouteRule(nitroApp._robotsRuleMactcher(path));
  if (routeRules && (typeof routeRules.allow !== "undefined" || typeof routeRules.rule !== "undefined")) {
    return {
      indexable: routeRules.allow,
      rule: routeRules.rule || (routeRules.allow ? robotsEnabledValue : robotsDisabledValue),
      debug: {
        source: "Route Rules"
      }
    };
  }
  return {
    indexable: true,
    rule: robotsEnabledValue
  };
}

const _d5Ky_gbJ4oz1VAa_QZFJOKsIcE0HrsTXFXmmKsPu_74 = defineNitroPlugin(async (nitro) => {
  const { cleanCachedContents } = await Promise.resolve().then(function () { return storage; });
  const storage$1 = useStorage();
  const unwatch = await storage$1.watch(async (event, key) => {
    if (key.startsWith("content:source")) {
      cleanCachedContents();
    }
  });
  nitro.hooks.hook("close", async () => {
    if (typeof unwatch === "function") {
      await unwatch();
    }
  });
});

const _T_GGQfNDWNTQrorq7jX8IjydEooYm7k46xZCoQfhaU = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const logger$2 = createConsola({
  defaults: { tag: "@nuxtjs/robots" }
});

async function resolveRobotsTxtContext(e, nitro = useNitroApp()) {
  const { groups, sitemap: sitemaps } = useRuntimeConfig(e)["nuxt-robots"];
  const generateRobotsTxtCtx = {
    event: e,
    context: e ? "robots.txt" : "init",
    ...JSON.parse(JSON.stringify({ groups, sitemaps }))
  };
  await nitro.hooks.callHook("robots:config", generateRobotsTxtCtx);
  nitro._robots.ctx = generateRobotsTxtCtx;
  return generateRobotsTxtCtx;
}

const _W7cWfQNgQU013Lk9T8U1KLRxeC5UMYzzuvCZCvSkyk = defineNitroPlugin(async (nitroApp) => {
  const { isNuxtContentV2, robotsDisabledValue } = useRuntimeConfig()["nuxt-robots"];
  nitroApp._robots = {};
  await resolveRobotsTxtContext(void 0, nitroApp);
  const nuxtContentUrls = /* @__PURE__ */ new Set();
  if (isNuxtContentV2) {
    let urls;
    try {
      urls = await (await nitroApp.localFetch("/__robots__/nuxt-content.json", {})).json();
    } catch (e) {
      logger$2.error("Failed to read robot rules from content files.", e);
    }
    if (urls && Array.isArray(urls) && urls.length) {
      urls.forEach((url) => nuxtContentUrls.add(withoutTrailingSlash(url)));
    }
  }
  if (nuxtContentUrls.size) {
    nitroApp._robots.nuxtContentUrls = nuxtContentUrls;
  }
});

const logger$1 = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger$1 = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey$1(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger$1(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _wYNmeenXi_kk5dTu_N4f2GVMm_sCfu9BQiVvnXK5_y8 = defineNitroPlugin((nitroApp) => {
  const { discoverImages, isNuxtContentDocumentDriven } = useSitemapRuntimeConfig();
  nitroApp.hooks.hook("content:file:afterParse", async (content) => {
    const validExtensions = ["md", "mdx"];
    if (content.sitemap === false || content._draft || !validExtensions.includes(content._extension) || content._partial || content.robots === false)
      return;
    let images = [];
    if (discoverImages) {
      images = content.body?.children?.filter(
        (c) => c.tag && c.props?.src && ["image", "img", "nuxtimg", "nuxt-img"].includes(c.tag.toLowerCase())
      ).map((i) => ({ loc: i.props.src })) || [];
    }
    const sitemapConfig = typeof content.sitemap === "object" ? content.sitemap : {};
    const lastmod = content.modifiedAt || content.updatedAt;
    const defaults = {};
    if (isNuxtContentDocumentDriven)
      defaults.loc = content._path;
    if (content.path)
      defaults.loc = content.path;
    if (images?.length)
      defaults.images = images;
    if (lastmod)
      defaults.lastmod = lastmod;
    const definition = defu$1(sitemapConfig, defaults);
    if (!definition.loc) {
      if (content.path && content.path && content.path.startsWith("/"))
        definition.loc = content.path;
      if (Object.keys(sitemapConfig).length > 0 && true)
        console.warn(`[@nuxtjs/content] The @nuxt/content file \`${content._path}\` is missing a sitemap \`loc\`.`);
    }
    content.sitemap = definition;
    if (!definition.loc)
      delete content.sitemap;
    return content;
  });
});

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu$1(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const vals = f.split(":");
      const includesStyle = vals.length === 3;
      let name, weight, style;
      if (includesStyle) {
        name = vals[0];
        style = vals[1];
        weight = vals[2];
      } else {
        name = vals[0];
        weight = vals[1];
      }
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: style || "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.style}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}
function withoutQuery$2(path) {
  return path.split("?")[0];
}
function getExtension(path) {
  path = withoutQuery$2(path);
  const lastSegment = path.split("/").pop() || path;
  return lastSegment.split(".").pop() || lastSegment;
}

function generateMeta(url, resolvedOptions) {
  let urlExtension = getExtension(url) || resolvedOptions.extension;
  if (urlExtension === "jpg")
    urlExtension = "jpeg";
  const meta = [
    { property: "og:image", content: url },
    { property: "og:image:type", content: `image/${urlExtension}` },
    { name: "twitter:card", content: "summary_large_image" },
    // we don't need this but avoids issue when using useSeoMeta({ twitterImage })
    { name: "twitter:image", content: url },
    { name: "twitter:image:src", content: url }
  ];
  if (resolvedOptions.width) {
    meta.push({ property: "og:image:width", content: resolvedOptions.width });
    meta.push({ name: "twitter:image:width", content: resolvedOptions.width });
  }
  if (resolvedOptions.height) {
    meta.push({ property: "og:image:height", content: resolvedOptions.height });
    meta.push({ name: "twitter:image:height", content: resolvedOptions.height });
  }
  if (resolvedOptions.alt) {
    meta.push({ property: "og:image:alt", content: resolvedOptions.alt });
    meta.push({ name: "twitter:image:alt", content: resolvedOptions.alt });
  }
  return meta;
}
function getOgImagePath(pagePath, _options) {
  const baseURL = useRuntimeConfig().app.baseURL;
  const options = defu$1(_options, useOgImageRuntimeConfig().defaults);
  const path = joinURL("/", baseURL, `__og-image__/${"image"}`, pagePath, `og.${options.extension}`);
  if (Object.keys(options._query || {}).length) {
    return withQuery(path, options._query);
  }
  return path;
}
function useOgImageRuntimeConfig() {
  const c = useRuntimeConfig();
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

const componentNames = [{"hash":"MlnXt-4pSsc-S0S-NyO1mjaxwp9hRjHjCY9kvDedhdQ","pascalName":"BrandedLogo","kebabName":"branded-logo","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"fpeX9mEOdoiwmgFVE7hebxqWjsIhD1kTbNd-q3hCd44","pascalName":"Frame","kebabName":"frame","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue","category":"community","credits":"@arashsheyda <https://github.com/arashsheyda>"},{"hash":"iEMfMtE3Z-GRD7M8UdLMA8z5kz-STiQ6hixM09D2-dU","pascalName":"Nuxt","kebabName":"nuxt","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue","category":"community","credits":"NuxtLabs <https://nuxtlabs.com/>"},{"hash":"OPSMK5e1Mj-B-KLuoxjOG3CTzYq1s5ld-uvugb--Fog","pascalName":"NuxtSeo","kebabName":"nuxt-seo","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue","category":"community","credits":"Nuxt SEO <https://nuxtseo.com/>"},{"hash":"9zhUtkB6optlrF0l5DEhgmR2EaIfGQP-Opy1PHC-ea0","pascalName":"Pergel","kebabName":"pergel","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue","category":"community","credits":"Pergel <https://nuxtlabs.com/>"},{"hash":"elBNvk6E8lXN8E9YywMD9ZKEiLvF8lfcfuj7SBFp5UI","pascalName":"SimpleBlog","kebabName":"simple-blog","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"NZaFkzgYlwbuyTVFd6EHH-xQWdLAvf9XnrhiwGpu4Sg","pascalName":"UnJs","kebabName":"un-js","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue","category":"community","credits":"UnJS <https://unjs.io/>"},{"hash":"QXHbDpwVYCs3sUZl2lD4T9ynY6wsyAvK7oqRs1B0wsI","pascalName":"Wave","kebabName":"wave","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"6osD1f2PCUicjON4dfrsnxhXzikrQ0yfi43nndOjEuY","pascalName":"WithEmoji","kebabName":"with-emoji","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"n1Dw25lza1wfE7vWsH66No8KrxE2YAsG8NiPb-FSyDU","pascalName":"OgImage","kebabName":"og-image","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage.js","category":"app"},{"hash":"D9FaYUWqPNE3eiuw56d2BNHg975tQAhZI2MMV601ihs","pascalName":"OgImageScreenshot","kebabName":"og-image-screenshot","path":"/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot.js","category":"app"}];

function normaliseOptions(_options) {
  const options = { ..._options };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

function nuxtContentPlugin(nitroApp) {
  const { isNuxtContentDocumentDriven, strictNuxtContentPaths, defaults } = useOgImageRuntimeConfig();
  nitroApp.hooks.hook("content:file:afterParse", async (content) => {
    if (content._draft || content._extension !== "md" || content._partial || content.indexable === false || content.index === false)
      return;
    let path = content.path;
    if (isNuxtContentDocumentDriven && !path)
      path = content._path;
    let shouldRenderOgImage = !!content.ogImage;
    if (typeof content.ogImage === "undefined" && (strictNuxtContentPaths || typeof content.path !== "undefined")) {
      shouldRenderOgImage = true;
    }
    if (path && shouldRenderOgImage) {
      const ogImageConfig = (typeof content.ogImage === "object" ? content.ogImage : {}) || {};
      const optionsWithDefault = defu$1(ogImageConfig, defaults);
      let src = optionsWithDefault.url || getOgImagePath(path, optionsWithDefault);
      if (optionsWithDefault._query && Object.keys(optionsWithDefault._query).length)
        src = withQuery(src, { _query: optionsWithDefault._query });
      const meta = generateMeta(src, optionsWithDefault);
      if (optionsWithDefault.url) {
        content.head = defu$1({ meta }, content.head);
        return content;
      }
      const payload = {
        title: content.title,
        excerpt: content.description || content.excerpt,
        ...content.ogImage
      };
      Object.entries(ogImageConfig).forEach(([key, val]) => {
        payload[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
      });
      content.head = defu$1({
        script: [
          {
            id: "nuxt-og-image-overrides",
            type: "application/json",
            processTemplateParams: true,
            innerHTML: stringify(normaliseOptions(payload)),
            // we want this to be last in our head
            tagPosition: "bodyClose",
            tagPriority: 30
            // slighty higher priority
          }
        ],
        meta: [
          { property: "og:image", content: src },
          { property: "og:image:width", content: optionsWithDefault.width },
          { property: "og:image:height", content: optionsWithDefault.height },
          { property: "og:image:type", content: `image/${optionsWithDefault.extension}` },
          { property: "og:image:alt", content: optionsWithDefault.alt },
          // twitter
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image:src", content: src },
          { name: "twitter:image:width", content: optionsWithDefault.width },
          { name: "twitter:image:height", content: optionsWithDefault.height },
          { name: "twitter:image:alt", content: optionsWithDefault.alt }
        ]
      }, content.head);
    }
    return content;
  });
}

const _l2rXmRjkSDzehfvLiOlEjefvT2cfdG_EG7mjFvs4xlU = defineNitroPlugin((nitroApp) => {
  nuxtContentPlugin(nitroApp);
});

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

const theme = {};

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  });
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash$1([component, props]).replaceAll("_", "-");
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery$1(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$1() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$1(path)), app.baseURL)
    ).reverse());
  };
}

const logger = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await Promise.resolve().then(function () { return renderer$3; }).then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await Promise.resolve().then(function () { return renderer$2; }).then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = useSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1([
      basePath,
      siteConfig.url,
      hash$1(getQuery$1(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  const extension = path.split(".").pop();
  if (!extension) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  let queryParams = { ...getQuery$1(e) };
  queryParams.props = JSON.parse(queryParams.props || "{}");
  queryParams = separateProps(queryParams);
  let basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  if (queryParams._query)
    basePath = withQuery(basePath, JSON.parse(queryParams._query));
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePath);
  let options = queryParams.options;
  if (!options) {
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePath, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher$1();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu$1(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__unenv__) {
    throw createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is missing.`
    });
  }
  const unocss = await createGenerator({ theme }, {
    presets: [
      presetWind()
    ]
  });
  const ctx = {
    unocss,
    e,
    key,
    renderer,
    isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? match[1] : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  if (!_payload)
    return false;
  let options = false;
  try {
    const payload2 = parse$1(_payload);
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value && value !== 0)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
    console.warn("Failed to parse #nuxt-og-image-options", e, options);
  }
  if (!options)
    return false;
  if (typeof options.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options);
  {
    const socialPreview = {};
    const socialMetaTags = html.match(/<meta[^>]+(property|name)="(twitter|og):([^"]+)"[^>]*>/g);
    if (socialMetaTags) {
      socialMetaTags.forEach((tag) => {
        const [, , type, key] = tag.match(/(property|name)="(twitter|og):([^"]+)"/);
        const value = tag.match(/content="([^"]+)"/)?.[1];
        if (!value)
          return;
        if (!socialPreview[type])
          socialPreview[type] = {};
        socialPreview[type][key] = value;
      });
    }
    payload.socialPreview = socialPreview;
  }
  return payload;
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 500) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  if (res._data) {
    return [res._data, null];
  } else if (res.text) {
    return [await res.text(), null];
  }
  return ["", null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  await htmlPayloadCache.getItem(key);
  let _payload = null;
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger.warn(err);
  } else {
    _payload = getPayloadFromHtml(html);
  }
  if (!_payload) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    _payload = getPayloadFromHtml(fallbackHtml);
    if (_payload) {
      html = fallbackHtml;
    }
  }
  if (!html) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  if (!_payload) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Make sure you have defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  return payload;
}

const _960Y92maYwY7PyeqMwRL0MEhkfraiGjb7YHHYPi3DOE = defineNitroPlugin(async (nitro) => {
  return;
});

function useSchemaOrgConfig(e) {
  const runtimeConfig = useRuntimeConfig(e);
  return defu$1(runtimeConfig["nuxt-schema-org"], {
    scriptAttributes: {}
  });
}

const _OOGizZuRNYLHhF64biKSqxfflCrOjZsGJkH8f9fLpjc = defineNitroPlugin((nitroApp) => {
  const config = useSchemaOrgConfig();
  nitroApp.hooks.hook("content:file:afterParse", async (content) => {
    if (content._draft || content._extension !== "md" || content._partial || content.indexable === false || content.index === false)
      return;
    if (!content.schemaOrg) {
      return;
    }
    const nodes = Array.isArray(content.schemaOrg) ? content.schemaOrg : [defineWebPage(content.schemaOrg)];
    const replaceType = (node) => {
      if (node.type) {
        node["@type"] = node.type;
        delete node.type;
      }
      Object.entries(node).forEach(([, value]) => {
        if (typeof value === "object") {
          replaceType(value);
        }
      });
      return node;
    };
    const script = {
      type: "application/ld+json",
      key: "schema-org-graph",
      nodes: nodes.map(replaceType),
      ...config.scriptAttributes
    };
    content.head = defu$1({
      script: [script]
    }, content.head);
    return content;
  });
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _h5yzTawpnh7G0eCheEF7tFQtpBVH8WRtGlUbm_IvOw = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const encodedBlacklist = [
  "dgjlx.com",
  // blog.revincx.icu
  "dgvhqt.com",
  // blog.zhilu.cyou
  "hcmsla.com",
  // thyuu.com
  "wmlop.com",
  // xaoxuu.com
  "yswjxs.com"
  // blog.zhilu.cyou
].map(btoa);
const encodedOfficial = btoa(new URL(blogConfig.url).host);
function handleMirror(sourcesEncoded, targetEncoded) {
  const sources = sourcesEncoded.map(atob);
  const target = atob(targetEncoded);
  const canonical = document.querySelector('link[rel="canonical"]');
  const isBadMirror = sources.some((domain) => location.hostname.endsWith(domain));
  if (isBadMirror) {
    if (canonical)
      canonical.href = canonical.href.replace(location.host, target);
    location.host = target;
  }
}
async function toIifeString(fn, ...args) {
  const fnString = fn.toString();
  const argsString = JSON.stringify(args).slice(1, -1);
  const minified = await minify(`(${fnString})(${argsString})`);
  return minified.code;
}
const _Ct2rOZIAylFgGLUvvS3uKMwyHT7cxalhgyNoWW7AnAw = defineNitroPlugin(async (nitroApp) => {
  const script = await toIifeString(handleMirror, encodedBlacklist, encodedOfficial);
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.push(`<script>${script}<\/script>`);
  });
});

const timezoneOffset = getTimezoneOffset(blogConfig.timezone) + (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
function fixDate(date) {
  if (!date)
    return date;
  if (typeof date === "string")
    date = new Date(date);
  return new Date(date.getTime() - timezoneOffset);
}
const _8yZ24Za9Ma_QenV_nxngsSnDjh1hwqndyShyApwzpI = defineNitroPlugin((nitroApp) => {
  const appConfig = useAppConfig();
  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    var _a, _b;
    file.date = fixDate(file.date);
    file.updated = fixDate(file.updated);
    file.published = fixDate(file.published);
    for (const prefix of blogConfig.hideContentPrefixes) {
      if ((_a = file._path) == null ? void 0 : _a.startsWith(prefix)) {
        file._original_dir = prefix;
        file._path = file._path.replace(prefix, "");
      }
    }
    if (!((_b = file.categories) == null ? void 0 : _b[0])) {
      file.categories = [appConfig.article.uncategorizedLabel];
    }
  });
});

const plugins = [
  _bZNJS_nxR5sTD3LmVHS833W1TUhQucLqD1oisf_8NsE,
_lWOgo1xSJhEtHlQ0lV5FmdGnKRGeJ9aj2SmaB3ng,
_d5Ky_gbJ4oz1VAa_QZFJOKsIcE0HrsTXFXmmKsPu_74,
_T_GGQfNDWNTQrorq7jX8IjydEooYm7k46xZCoQfhaU,
_W7cWfQNgQU013Lk9T8U1KLRxeC5UMYzzuvCZCvSkyk,
_wYNmeenXi_kk5dTu_N4f2GVMm_sCfu9BQiVvnXK5_y8,
_l2rXmRjkSDzehfvLiOlEjefvT2cfdG_EG7mjFvs4xlU,
_960Y92maYwY7PyeqMwRL0MEhkfraiGjb7YHHYPi3DOE,
_OOGizZuRNYLHhF64biKSqxfflCrOjZsGJkH8f9fLpjc,
_h5yzTawpnh7G0eCheEF7tFQtpBVH8WRtGlUbm_IvOw,
_Ct2rOZIAylFgGLUvvS3uKMwyHT7cxalhgyNoWW7AnAw,
_8yZ24Za9Ma_QenV_nxngsSnDjh1hwqndyShyApwzpI
];

const _QOoAha = eventHandler(async (event) => {
  const { code, lang, theme: themeString, options: optionsStr } = getQuery$1(event);
  const theme = JSON.parse(themeString);
  const options = optionsStr ? JSON.parse(optionsStr) : {};
  const highlighter = await Promise.resolve().then(function () { return mdcHighlighter; }).then((m) => m.default);
  return await highlighter(code, lang, theme, options);
});

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _7_ewj_ = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _Yb8yDS = defineEventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _gQCOjw = defineEventHandler(async (e) => {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const _zkkBjI = defineEventHandler(async (e) => {
  const nitro = useNitroApp();
  const { indexable, hints } = getSiteRobotConfig(e);
  const { credits, isNuxtContentV2, cacheControl } = useRuntimeConfig(e)["nuxt-robots"];
  let robotsTxtCtx = {
    sitemaps: [],
    groups: [
      {
        allow: [],
        comment: [],
        userAgent: ["*"],
        disallow: ["/"]
      }
    ]
  };
  if (indexable) {
    robotsTxtCtx = await resolveRobotsTxtContext(e);
    robotsTxtCtx.sitemaps = [...new Set(
      asArray(robotsTxtCtx.sitemaps).map((s) => !s.startsWith("http") ? withSiteUrl(e, s, { withBase: true}) : s)
    )];
    if (isNuxtContentV2) {
      const contentWithRobotRules = await e.$fetch("/__robots__/nuxt-content.json", {
        headers: {
          Accept: "application/json"
        }
      });
      if (String(contentWithRobotRules).trim().startsWith("<!DOCTYPE")) {
        logger$2.error("Invalid HTML returned from /__robots__/nuxt-content.json, skipping.");
      } else {
        for (const group of robotsTxtCtx.groups) {
          if (group.userAgent.includes("*")) {
            group.disallow.push(...contentWithRobotRules);
            group.disallow = group.disallow.filter(Boolean);
          }
        }
      }
    }
  }
  let robotsTxt = generateRobotsTxt(robotsTxtCtx);
  if (hints.length) {
    robotsTxt += `
# DEVELOPMENT HINTS:
# - ${hints.join("\n# - ")}
`;
  }
  if (credits) {
    robotsTxt = [
      `# START nuxt-robots (${indexable ? "indexable" : "indexing disabled"})`,
      robotsTxt,
      "# END nuxt-robots"
    ].filter(Boolean).join("\n");
  }
  setHeader(e, "Content-Type", "text/plain; charset=utf-8");
  setHeader(e, "Cache-Control", "no-store" );
  const hookCtx = { robotsTxt, e };
  await nitro.hooks.callHook("robots:robots-txt", hookCtx);
  return hookCtx.robotsTxt;
});

const _17W6cp = defineEventHandler(async (e) => {
  if (e.path === "/robots.txt" || e.path.startsWith("/__") || e.path.startsWith("/api") || e.path.startsWith("/_nuxt"))
    return;
  const nuxtRobotsConfig = useRuntimeConfig(e)["nuxt-robots"];
  if (nuxtRobotsConfig) {
    const { header } = nuxtRobotsConfig;
    const robotConfig = getPathRobotConfig(e, { skipSiteIndexable: Boolean(getQuery$1(e)?.mockProductionEnv) });
    if (header) {
      setHeader(e, "X-Robots-Tag", robotConfig.rule);
    }
    e.context.robots = robotConfig;
  }
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab) continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument });
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function rehypeHighlight$1(opts) {
  const options = opts;
  return async (tree) => {
    const tasks = [];
    const styles = [];
    visit(
      tree,
      (node) => ["pre", "code"].includes(node.tagName) && !!(node.properties?.language || node.properties?.highlights),
      (node) => {
        const _node = node;
        const highlights = typeof _node.properties.highlights === "string" ? _node.properties.highlights.split(/[,\s]+/).map(Number) : Array.isArray(_node.properties.highlights) ? _node.properties.highlights.map(Number) : [];
        const task = options.highlighter(
          toString(node),
          _node.properties.language,
          options.theme,
          {
            highlights: highlights.filter(Boolean),
            meta: _node.properties.meta
          }
        ).then(({ tree: tree2, className, style, inlineStyle }) => {
          _node.properties.className = ((_node.properties.className || "") + " " + className).trim();
          _node.properties.style = ((_node.properties.style || "") + " " + inlineStyle).trim();
          if (_node.children[0]?.tagName === "code") {
            _node.children[0].children = tree2;
          } else {
            _node.children = tree2[0].children || tree2;
          }
          if (style)
            styles.push(style);
        });
        tasks.push(task);
      }
    );
    if (tasks.length) {
      await Promise.all(tasks);
      tree.children.push({
        type: "element",
        tagName: "style",
        children: [{ type: "text", value: cleanCSS(styles.join("")) }],
        properties: {}
      });
    }
  };
}
const cleanCSS = (css) => {
  const styles = css.split("}").filter((s) => Boolean(s.trim())).map((s) => s.trim() + "}");
  return Array.from(new Set(styles)).join("");
};

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, basename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (basename) {
    parts[parts.length - 1] = basename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path,
    _basename: basename || ""
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension, _basename } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft || content.draft || isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(_basename)),
      _source,
      _file,
      _stem: _path,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const highlightOptions = options.highlight ? {
      ...options.highlight,
      // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
      highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
    } : void 0;
    const parsed = await parseMarkdown(content, {
      ...config,
      highlight: highlightOptions,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or match every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched?.[1] ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage().getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage().setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for await (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  }
  return getContentsList(event);
}

const contentIndex = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getContentIndex: getContentIndex,
  getIndexedContentsList: getIndexedContentsList
});

const transformers = [];

let _sourceStorage;
let _cacheStorage;
let _cacheParsedStorage;
const sourceStorage = () => {
  if (!_sourceStorage) {
    _sourceStorage = prefixStorage(useStorage(), "content:source");
  }
  return _sourceStorage;
};
const cacheStorage = () => {
  if (!_cacheStorage) {
    _cacheStorage = prefixStorage(useStorage(), "cache:content");
  }
  return _cacheStorage;
};
const cacheParsedStorage = () => {
  if (!_cacheParsedStorage) {
    _cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
  }
  return _cacheParsedStorage;
};
const contentConfig = () => useRuntimeConfig().content;
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  const isIgnored = makeIgnored(contentConfig().ignores);
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  const source = sourceStorage();
  if (keys.length === 0) {
    keys = await source.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await source.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await source.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
let cachedContents = [];
const cleanCachedContents = () => {
  cachedContents = [];
};
const getContentsList = /* @__PURE__ */ (() => {
  let pendingContentsListPromise = null;
  const _getContentsList = async (event, prefix) => {
    const keys = await getContentsIds(event, prefix);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents.filter((c) => c && c._path);
  };
  return (event, prefix) => {
    if (event.context.__contentList) {
      return event.context.__contentList;
    }
    if (cachedContents.length) {
      return cachedContents;
    }
    if (!pendingContentsListPromise) {
      pendingContentsListPromise = _getContentsList(event, prefix);
      pendingContentsListPromise.then((result) => {
        {
          cachedContents = result;
        }
        event.context.__contentList = result;
        pendingContentsListPromise = null;
      });
    }
    return pendingContentsListPromise;
  };
})();
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  const source = sourceStorage();
  const cache = cacheParsedStorage();
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await source.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cache.getItem(id);
  const config = contentConfig();
  const meta = await source.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash = hash$2({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: config.cacheVersion,
    integrity: config.cacheIntegrity
  });
  if (cached?.hash === hash) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash]) {
    pendingPromises[id + hash] = new Promise(async (resolve) => {
      const body = await source.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cache.setItem(id, { parsed, hash }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash];
    });
  }
  return pendingPromises[id + hash];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const config = contentConfig();
  const options = defu(
    opts,
    {
      markdown: {
        ...config.markdown,
        highlight: config.highlight
      },
      csv: config.csv,
      yaml: config.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: config.defaultLocale,
        locales: config.locales,
        respectPathCase: config.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent$1(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const config = contentConfig();
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _stem: 1, $numeric: true }];
    }
    if (config.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: config.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

const storage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cacheParsedStorage: cacheParsedStorage,
  cacheStorage: cacheStorage,
  chunksFromArray: chunksFromArray,
  cleanCachedContents: cleanCachedContents,
  createServerQueryFetch: createServerQueryFetch,
  getContent: getContent,
  getContentsIds: getContentsIds,
  getContentsList: getContentsList,
  parseContent: parseContent,
  serverQueryContent: serverQueryContent$1,
  sourceStorage: sourceStorage
});

const serverQueryContent = serverQueryContent$1;

const _t87WX2 = defineEventHandler(async (e) => {
  const content = [];
  try {
    content.push(...await serverQueryContent(e).find());
  } catch (e2) {
    logger$2.error("Error querying Nuxt content", e2);
  }
  return content.map((c) => {
    if (c._draft || c._extension !== "md" || c._partial)
      return false;
    if (c.path) {
      if (String(c.robots) === "false")
        return c.path;
    }
    return false;
  }).filter(Boolean);
});

const _24DDvv = defineEventHandler(async (e) => {
  const runtimeConfig = useRuntimeConfig(e)["nuxt-robots"];
  const { indexable, hints } = getSiteRobotConfig(e);
  const siteConfig = useSiteConfig(e);
  const robotsTxt = await e.$fetch("/robots.txt", {
    query: getQuery$1(e)
  });
  return {
    robotsTxt,
    indexable,
    hints,
    runtimeConfig,
    siteConfig: {
      url: siteConfig.url,
      env: siteConfig.env,
      indexable: siteConfig.indexable
    }
  };
});

const _ctKHBy = defineEventHandler(async (e) => {
  const query = getQuery$1(e);
  const path = query.path;
  delete query.path;
  const res = await $fetch.raw(withQuery(path, query));
  const html = res._data;
  const robotsHeader = String(res.headers.get("x-robots-tag"));
  const robotsMeta = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'](?:[^>]+data-hint=["']([^"']+)["'])?[^>]*>/i);
  const [, robotsContent = null, robotsHint = null] = robotsMeta || [];
  const [source, line] = robotsHint ? robotsHint.split(",") : [null, null];
  return {
    rule: robotsContent,
    indexable: !(robotsContent?.includes("noindex") && robotsHeader?.includes("noindex")),
    crawlable: !(source === "/robots.txt"),
    path,
    debug: {
      source,
      line
    },
    robotsHeader,
    robotsContent
  };
});

const _yIpKfZ = defineEventHandler(async (e) => {
  const contentList = await serverQueryContent(e).find();
  return contentList.map((c) => c.sitemap).filter(Boolean);
});

function extractSitemapXML(xml) {
  const urls = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  return urls.map((url) => {
    const loc = url.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) return null;
    const lastmod = url.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    const changefreq = url.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1];
    const priority = url.match(/<priority>([^<]+)<\/priority>/) ? Number.parseFloat(url.match(/<priority>([^<]+)<\/priority>/)[1]) : void 0;
    const images = (url.match(/<image:image>[\s\S]*?<\/image:image>/g) || []).map((image) => {
      const imageLoc = image.match(/<image:loc>([^<]+)<\/image:loc>/)?.[1];
      return imageLoc ? { loc: imageLoc } : null;
    }).filter(Boolean);
    const videos = (url.match(/<video:video>[\s\S]*?<\/video:video>/g) || []).map((video) => {
      const videoObj = {};
      const title = video.match(/<video:title>([^<]+)<\/video:title>/)?.[1];
      const thumbnail_loc = video.match(/<video:thumbnail_loc>([^<]+)<\/video:thumbnail_loc>/)?.[1];
      const description = video.match(/<video:description>([^<]+)<\/video:description>/)?.[1];
      const content_loc = video.match(/<video:content_loc>([^<]+)<\/video:content_loc>/)?.[1];
      if (!title || !thumbnail_loc || !description || !content_loc) return null;
      videoObj.title = title;
      videoObj.thumbnail_loc = thumbnail_loc;
      videoObj.description = description;
      videoObj.content_loc = content_loc;
      const player_loc = video.match(/<video:player_loc>([^<]+)<\/video:player_loc>/)?.[1];
      if (player_loc) videoObj.player_loc = player_loc;
      const duration = video.match(/<video:duration>([^<]+)<\/video:duration>/) ? Number.parseInt(video.match(/<video:duration>([^<]+)<\/video:duration>/)[1], 10) : void 0;
      if (duration) videoObj.duration = duration;
      const expiration_date = video.match(/<video:expiration_date>([^<]+)<\/video:expiration_date>/)?.[1];
      if (expiration_date) videoObj.expiration_date = expiration_date;
      const rating = video.match(/<video:rating>([^<]+)<\/video:rating>/) ? Number.parseFloat(video.match(/<video:rating>([^<]+)<\/video:rating>/)[1]) : void 0;
      if (rating) videoObj.rating = rating;
      const view_count = video.match(/<video:view_count>([^<]+)<\/video:view_count>/) ? Number.parseInt(video.match(/<video:view_count>([^<]+)<\/video:view_count>/)[1], 10) : void 0;
      if (view_count) videoObj.view_count = view_count;
      const publication_date = video.match(/<video:publication_date>([^<]+)<\/video:publication_date>/)?.[1];
      if (publication_date) videoObj.publication_date = publication_date;
      const family_friendly = video.match(/<video:family_friendly>([^<]+)<\/video:family_friendly>/)?.[1];
      if (family_friendly) videoObj.family_friendly = family_friendly;
      const restriction = video.match(/<video:restriction relationship="([^"]+)">([^<]+)<\/video:restriction>/);
      if (restriction) videoObj.restriction = { relationship: restriction[1], restriction: restriction[2] };
      const platform = video.match(/<video:platform relationship="([^"]+)">([^<]+)<\/video:platform>/);
      if (platform) videoObj.platform = { relationship: platform[1], platform: platform[2] };
      const price = (video.match(/<video:price [^>]+>([^<]+)<\/video:price>/g) || []).map((price2) => {
        const priceValue = price2.match(/<video:price [^>]+>([^<]+)<\/video:price>/)?.[1];
        const currency = price2.match(/currency="([^"]+)"/)?.[1];
        const type = price2.match(/type="([^"]+)"/)?.[1];
        return priceValue ? { price: priceValue, currency, type } : null;
      }).filter(Boolean);
      if (price.length) videoObj.price = price;
      const requires_subscription = video.match(/<video:requires_subscription>([^<]+)<\/video:requires_subscription>/)?.[1];
      if (requires_subscription) videoObj.requires_subscription = requires_subscription;
      const uploader = video.match(/<video:uploader info="([^"]+)">([^<]+)<\/video:uploader>/);
      if (uploader) videoObj.uploader = { uploader: uploader[2], info: uploader[1] };
      const live = video.match(/<video:live>([^<]+)<\/video:live>/)?.[1];
      if (live) videoObj.live = live;
      const tag = (video.match(/<video:tag>([^<]+)<\/video:tag>/g) || []).map((tag2) => tag2.match(/<video:tag>([^<]+)<\/video:tag>/)?.[1]).filter(Boolean);
      if (tag.length) videoObj.tag = tag;
      return videoObj;
    }).filter(Boolean);
    const alternatives = (url.match(/<xhtml:link[\s\S]*?\/>/g) || []).map((link) => {
      const hreflang = link.match(/hreflang="([^"]+)"/)?.[1];
      const href = link.match(/href="([^"]+)"/)?.[1];
      return hreflang && href ? { hreflang, href } : null;
    }).filter(Boolean);
    const news = url.match(/<news:news>[\s\S]*?<\/news:news>/) ? {
      title: url.match(/<news:title>([^<]+)<\/news:title>/)?.[1],
      publication_date: url.match(/<news:publication_date>([^<]+)<\/news:publication_date>/)?.[1],
      publication: {
        name: url.match(/<news:name>([^<]+)<\/news:name>/)?.[1],
        language: url.match(/<news:language>([^<]+)<\/news:language>/)?.[1]
      }
    } : void 0;
    const urlObj = { loc, lastmod, changefreq, priority, images, videos, alternatives, news };
    return Object.fromEntries(Object.entries(urlObj).filter(([_, v]) => v != null && v.length !== 0));
  }).filter(Boolean);
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isMaybeErrorResponse = false;
  const isXmlRequest = parseURL(url).pathname.endsWith(".xml");
  const fetchContainer = url.startsWith("/") && event ? event : globalThis;
  try {
    const res = await fetchContainer.$fetch(url, {
      ...options,
      responseType: isXmlRequest ? "text" : "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: isXmlRequest ? "text/xml" : "application/json"
      }, event ? { host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isMaybeErrorResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isMaybeErrorResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    let urls = [];
    if (typeof res === "object") {
      urls = res.urls || res;
    } else if (typeof res === "string" && parseURL(url).pathname.endsWith(".xml")) {
      urls = extractSitemapXML(res);
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
function globalSitemapSources() {
  return Promise.resolve().then(function () { return globalSources; }).then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? Promise.resolve().then(function () { return childSources; }).then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

const _opbmVj = defineEventHandler(async (e) => {
  const _runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps: _sitemaps } = _runtimeConfig;
  const runtimeConfig = { ..._runtimeConfig };
  delete runtimeConfig.sitemaps;
  const globalSources = await globalSitemapSources();
  const nitroOrigin = useNitroOrigin(e);
  const sitemaps = {};
  for (const s of Object.keys(_sitemaps)) {
    sitemaps[s] = {
      ..._sitemaps[s],
      sources: await resolveSitemapSources(await childSitemapSources(_sitemaps[s]))
    };
  }
  return {
    nitroOrigin,
    sitemaps,
    runtimeConfig,
    globalSources: await resolveSitemapSources(globalSources)
  };
});

const _OIXAtG = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="margin-right: 4px; font-size: 25px;" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#93c5fd" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-2h-2v2H7a2.002 2.002 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2.002 2.002 0 0 0-2-2zM9 2v10h14V2zm2 2h2v6h-2zm10 6h-6V4h6z"></path></svg>`;
  const creditName = `<a href="https://github.com/nuxt-modules/sitemap" style="color: black; display: flex; align-items: center; font-weight: 500;" target="_blank" rel="noopener">${svgIcon} Nuxt Sitemap v${version}</a>`;
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  const tips = conditionalTips.map((t) => `<li><p>${t}</p></li>`).join("\n");
  const showTips = xslTips !== false;
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${showTips ? `<div class="w-30 top-2 shadow rounded p-5 right-2" style="margin: 0 auto;"><p><strong>Sitemap Tips (development only)</strong></p><ul style="margin: 1rem; padding: 0;">${tips}</ul><p style="margin-top: 1rem;">${creditName}</p></div>` : ""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function resolve(s, resolvers) {
  if (typeof s === "undefined" || !resolvers)
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const e = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (e.url && !e.loc) {
    e.loc = e.url;
    delete e.url;
  }
  if (typeof e.loc !== "string") {
    e.loc = "";
  }
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch (e2) {
    e2._path = null;
  }
  if (e._path) {
    const query = parseQuery(e._path.search);
    const qs = stringifyQuery(query);
    e._relativeLoc = `${encodePath(e._path?.pathname)}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else if (!isEncoded(e.loc)) {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function isEncoded(url) {
  try {
    return url !== decodeURIComponent(url);
  } catch {
    return false;
  }
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu$1(_e, defaults);
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    e.alternatives = mergeOnKey$1(e.alternatives.map((e2) => {
      const a = { ...e2 };
      if (typeof a.href === "string")
        a.href = resolve(a.href, resolvers);
      else if (typeof a.href === "object" && a.href)
        a.href = resolve(a.href.href, resolvers);
      return a;
    }), "hreflang");
  }
  if (e.images) {
    e.images = mergeOnKey$1(e.images.map((i) => {
      i = { ...i };
      i.loc = resolve(i.loc, resolvers);
      return i;
    }), "loc");
  }
  if (e.videos) {
    e.videos = e.videos.map((v) => {
      v = { ...v };
      if (v.content_loc)
        v.content_loc = resolve(v.content_loc, resolvers);
      return v;
    });
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    // news & others?
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  if (options.minify)
    return input.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "");
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function resolveSitemapEntries(sitemap, urls, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = urls.map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  let warnIncorrectI18nTransformUsage = false;
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = autoI18n.defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = autoI18n.locales.find((l) => l.code === localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path.search}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = withoutPrefixPaths[e._pathWithoutPrefix].map((u) => {
          const entries = [];
          if (u._locale.code === autoI18n.defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || autoI18n.defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (autoI18n.strategy === "no_prefix") {
          warnIncorrectI18nTransformUsage = true;
        }
        if (autoI18n.differentDomains) {
          e.alternatives = [
            {
              // apply default locale domain
              ...autoI18n.locales.find((l) => [l.code, l.language].includes(autoI18n.defaultLocale)),
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          for (const l of autoI18n.locales) {
            let loc = joinURL(`/${l.code}`, e._pathWithoutPrefix);
            if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
              loc = e._pathWithoutPrefix;
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...e,
              _index: void 0,
              _key: `${_sitemap || ""}${loc || "/"}${e._path.search}`,
              _locale: l,
              loc,
              alternatives: [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales].map((locale) => {
                const code = locale.code === "x-default" ? autoI18n.defaultLocale : locale.code;
                const isDefault = locale.code === "x-default" || locale.code === autoI18n.defaultLocale;
                let href = "";
                if (autoI18n.strategy === "prefix") {
                  href = joinURL("/", code, e._pathWithoutPrefix);
                } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
                  if (isDefault) {
                    href = e._pathWithoutPrefix;
                  } else {
                    href = joinURL("/", code, e._pathWithoutPrefix);
                  }
                }
                if (!filterPath(href))
                  return false;
                return {
                  hreflang: locale._hreflang,
                  href
                };
              }).filter(Boolean)
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path.search}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  if (warnIncorrectI18nTransformUsage) {
    logger$1.warn("You're using _i18nTransform with the `no_prefix` strategy. This will cause issues with the sitemap. Please remove the _i18nTransform flag or change i18n strategy.");
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  function maybeSlice(urls) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.language, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sourcesInput = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sourcesInput.push(...await childSitemapSources(sitemap));
  const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
  const resolvedCtx = {
    urls: sources.flatMap((s) => s.urls),
    sitemapName: sitemap.sitemapName,
    event: resolvers.event
  };
  await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
  const filteredUrls = enhancedUrls.filter((e) => {
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName)
      return e._sitemap === sitemap.sitemapName;
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  return maybeSlice(sortedUrls);
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }) {
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits, minify });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(event, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  const resolvers = useNitroUrlResolvers(event);
  let sitemapUrls = await buildSitemapUrls(definition, resolvers, runtimeConfig, nitro);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  sitemapUrls = sitemapUrls.map((u) => {
    const path = u._path?.pathname || u.loc;
    if (!getPathRobotConfig(event, { path, skipSiteIndexable: true }).indexable)
      return false;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.robots !== "undefined" && !routeRules.robots) {
      return false;
    }
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(u, routeRules.sitemap) : u;
  }).filter(Boolean);
  const locSize = sitemapUrls.length;
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName,
    event
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  if (resolvedCtx.urls.length !== locSize) {
    resolvedCtx.urls = resolvedCtx.urls.map((e) => preNormalizeEntry(e, resolvers));
  }
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortSitemapUrls(urls2) : urls2;
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, definition.defaults, resolvers));
  const urls = maybeSort(mergeOnKey$1(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, definition.defaults, resolvers)));
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig);
  const ctx = { sitemap, sitemapName, event };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  event.context._isSitemap = true;
  return ctx.sitemap;
}

const _Shn6rb = defineEventHandler(async (e) => {
  const runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const _KkWuL5 = defineEventHandler(async (e) => {
  const nitroOrigin = useNitroOrigin(e);
  return {
    nitroOrigin,
    runtimeConfig: useSchemaOrgConfig(e)
  };
});

function defineRule(rule) {
  return rule;
}
function isNonFetchableLink(link) {
  return link.startsWith("javascript:") || link.startsWith("blob:") || link.startsWith("data:") || link.startsWith("mailto:") || link.startsWith("tel:") || link.startsWith("#");
}

const responses = {};
async function getLinkResponse({ link, timeout, fetchRemoteUrls, baseURL, isInStorage }) {
  if (link.includes("#") && !link.startsWith("#"))
    link = link.split("#")[0];
  link = decodeURI(link);
  const response = responses[link];
  if (!response) {
    if (isNonFetchableLink(link) || link.startsWith("http") && !fetchRemoteUrls || isInStorage()) {
      responses[link] = Promise.resolve({ status: 200, statusText: "OK", headers: {} });
    } else {
      responses[link] = crawlFetch(link, { timeout, baseURL });
    }
  }
  return responses[link];
}
async function crawlFetch(link, options = {}) {
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  return await $fetch$1.raw(encodeURI(link), {
    baseURL: options.baseURL,
    method: "HEAD",
    signal: timeoutController.signal,
    headers: {
      "user-agent": "Nuxt Link Checker"
    }
  }).catch((error) => {
    if (error.name === "AbortError")
      return { status: 408, statusText: "Request Timeout", headers: {} };
    return { status: 404, statusText: "Not Found", headers: {} };
  }).finally(() => clearTimeout(abortRequestTimeout)).then((res) => ({ status: res.status, statusText: res.statusText, headers: res.headers }));
}

const lruFsCache = /* @__PURE__ */ new Map();
function generateLinkSources(s, link) {
  const regEscapedLink = link.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const VueLinkRegExp = new RegExp(`(['"])${regEscapedLink}(['"])`);
  const MdLinkRegExp = new RegExp(`\\[.*\\]\\((${regEscapedLink})\\)`);
  const lines = s.split("\n");
  const sources = [];
  for (const [i, line] of lines.entries()) {
    const lineNumber = i + 1;
    const preLineLength = lines.slice(0, lineNumber - 1).join("\n").length + 1;
    let index = line.search(VueLinkRegExp);
    if (index !== -1) {
      const columnNumber = index - 1;
      const start = preLineLength + index + 1;
      const end = start + link.length;
      sources.push({ start, end, lineNumber, columnNumber });
    } else {
      index = line.search(MdLinkRegExp);
      if (index !== -1) {
        const substr = line.slice(index);
        const start = preLineLength + index + substr.indexOf("(", index) + 1;
        const end = start + link.length;
        if (s.substring(start, end) === link) {
          sources.push({ start, end, lineNumber: i + 1, columnNumber: start });
        }
      }
    }
  }
  return sources;
}
const LINE_PREVIEW_OFFSET = 2;
async function generateFileLinkPreviews(filepath, link) {
  const contents = lruFsCache.has(filepath) ? lruFsCache.get(filepath) : await readFile(filepath, "utf8").catch(() => "");
  const previews = contents ? generateLinkSourcePreviews(contents, link) : [];
  let lang = filepath.split(".").pop();
  if (!lang)
    lang = "vue";
  lruFsCache.set(filepath, contents);
  if (lruFsCache.size > 100)
    lruFsCache.delete(lruFsCache.keys().next().value);
  return { previews, lang, filepath };
}
async function generateFileLinkDiff(filepath, original, replacement) {
  const contents = lruFsCache.has(filepath) ? lruFsCache.get(filepath) : await readFile(filepath, "utf8");
  lruFsCache.set(filepath, contents);
  if (lruFsCache.size > 100)
    lruFsCache.delete(lruFsCache.keys().next().value);
  return {
    ...generateLinkDiff(contents, original, replacement),
    filepath
  };
}
function generateLinkSourcePreviews(s, link) {
  const sources = generateLinkSources(s, link);
  const lines = s.split("\n");
  return sources.map(({ lineNumber, columnNumber }) => {
    const code = lines.slice(lineNumber - LINE_PREVIEW_OFFSET - 1, lineNumber + LINE_PREVIEW_OFFSET).join("\n");
    return { code, lineNumber, columnNumber };
  });
}
function generateLinkDiff(s, originalLink, newLink) {
  const ms = new MagicString(s);
  const sources = generateLinkSources(s, originalLink);
  sources.forEach(({ start, end }) => {
    ms.remove(start, end);
    ms.prependRight(start, newLink);
  });
  return { diff: calculateDiff(s, ms.toString()), code: ms.toString() };
}
function calculateDiff(from, to) {
  const diffs = diffLines(from.trim(), to.trim());
  const added = [];
  const removed = [];
  const result = [];
  for (const diff of diffs) {
    const lines = diff.value.trimEnd().split("\n");
    for (const line of lines) {
      if (diff.added) {
        added.push(result.length);
        result.push(line);
      } else if (diff.removed) {
        removed.push(result.length);
        result.push(line);
      } else {
        result.push(line);
      }
    }
  }
  return {
    added,
    removed,
    result: result.join("\n")
  };
}

function RuleAbsoluteSiteUrls() {
  return defineRule({
    id: "absolute-site-urls",
    test({ report, url, siteConfig }) {
      if (!url.host)
        return;
      report({
        name: "absolute-site-urls",
        scope: "warning",
        message: "Internal links should be relative.",
        tip: "Using internal links that start with / is recommended to avoid issues when deploying your site to different domain names",
        fix: url.pathname,
        fixDescription: `Remove ${siteConfig.url}.`
      });
    }
  });
}

function RuleDescriptiveLinkText() {
  return defineRule({
    id: "link-text",
    test({ textContent, report }) {
      if (typeof textContent === "undefined")
        return;
      if (!textContent) {
        report({
          name: "link-text",
          scope: "warning",
          message: "Missing link textContent, title or aria-label.",
          tip: "Links with descriptive text are easier to understand for screen readers and search engines."
        });
      }
      const uniformLinkText = textContent.trim().toLowerCase();
      const listOfBadDescriptiveLinkTexts = [
        "click here",
        "click this",
        "go",
        "here",
        "this",
        "start",
        "right here",
        "more",
        "learn more"
      ];
      if (listOfBadDescriptiveLinkTexts.includes(uniformLinkText)) {
        report({
          name: "link-text",
          scope: "warning",
          message: `Link text "${textContent}" should be more descriptive.`,
          tip: `The ${textContent} descriptive text does not provide any context to the link.`
        });
      }
    }
  });
}

function RuleMissingHash() {
  return defineRule({
    id: "missing-hash",
    test({ link, report, ids, fromPath }) {
      const [path, hash] = link.split("#");
      if (!link.includes("#") || link.endsWith("#top") || fixSlashes(false, path) !== fromPath)
        return;
      if (ids.includes(hash))
        return;
      const fuse = new Fuse(ids, {
        threshold: 0.6
      });
      const fixedHash = fuse.search(hash.replace("#", ""))?.[0]?.item;
      const payload = {
        name: "missing-hash",
        scope: "error",
        message: `No element with id "${hash}" found.`
      };
      if (fixedHash) {
        payload.fix = `${link.split("#")[0]}#${fixedHash}`;
        payload.fixDescription = `Did you mean ${payload.fix}?`;
      }
      report(payload);
    }
  });
}

function RuleNoDocumentRelative() {
  return defineRule({
    id: "no-baseless",
    // TODO rename to no-document-relative
    test({ link, fromPath, report }) {
      if (link.startsWith("/") || link.startsWith("http") || isNonFetchableLink(link))
        return;
      report({
        name: "no-baseless",
        scope: "warning",
        message: "Links should be root relative.",
        fix: `${joinURL(fromPath, link)}`,
        fixDescription: `Add base ${fromPath}.`
      });
    }
  });
}

function RuleNoDoubleSlashes() {
  return defineRule({
    id: "no-double-slashes",
    test({ url, link, report }) {
      if (link.startsWith("//") && !link.includes(".")) {
        report({
          name: "no-double-slashes",
          scope: "warning",
          message: "Links should not contain double slashes.",
          fix: link.replaceAll(/(^\/{2,}|\/{2,})/g, "/"),
          fixDescription: "Remove double slashes."
        });
      } else if (url.pathname.match(/(^\/{2,}|\/{2,})/)) {
        report({
          name: "no-double-slashes",
          scope: "warning",
          message: "Links should not contain double slashes.",
          fix: link.replace(url.pathname, url.pathname.replaceAll(/(^\/{2,}|\/{2,})/g, "/")),
          fixDescription: "Remove double slashes."
        });
      }
    }
  });
}

function RuleNoDuplicateQueryParams() {
  return defineRule({
    id: "no-duplicate-query-params",
    test({ report, link, url }) {
      if (!url.search)
        return;
      const search = url.search.slice(1);
      const searchParams = search.split("&").map((param) => param.split("=")[0]);
      const duplicates = /* @__PURE__ */ new Set();
      for (const param of searchParams) {
        if (duplicates.has(param)) {
          const fix = link.replace(new RegExp(`([?&])${param}=[^&]*&?`), "$1");
          report({
            name: "no-duplicate-query-params",
            scope: "warning",
            message: "Links should not contain duplicated query parameters.",
            fix,
            tip: "Duplicate query parameters can cause canonical URL issues.",
            fixDescription: "Remove duplicate query parameter."
          });
          return;
        }
        duplicates.add(param);
      }
    }
  });
}

function RuleNoErrorResponse() {
  return defineRule({
    id: "no-error-response",
    externalLinks: true,
    test({ link, response, report, pageSearch }) {
      if (!response.status || response.status.toString().startsWith("2") || response.status.toString().startsWith("3") || isNonFetchableLink(link))
        return;
      const payload = {
        name: "no-error-response",
        scope: "error",
        message: `Should not respond with status code ${response.status}${response.statusText ? ` (${response.statusText})` : ""}.`
      };
      if (link.startsWith("/") && pageSearch) {
        const related = pageSearch.search(link)?.[0]?.item;
        if (related?.link && related.link !== link) {
          payload.fix = related.link;
          payload.fixDescription = `Did you mean ${related.link}?`;
        }
      } else {
        payload.canRetry = true;
      }
      report(payload);
    }
  });
}

function RuleNoJavascript() {
  return defineRule({
    id: "no-javascript",
    externalLinks: true,
    test({ link, report }) {
      if (link.startsWith("javascript:")) {
        report({
          name: "no-javascript",
          scope: "error",
          tip: 'Using a <button type="button"> instead as a better practice.',
          message: "Should not use JavaScript"
        });
      }
    }
  });
}

function RuleNoMissingHref() {
  return defineRule({
    id: "no-missing-href",
    test({ report, link, role }) {
      if (link.trim().length > 0 || role === "button") {
        return;
      }
      report({
        name: "no-missing-href",
        scope: "warning",
        message: "For accessibility and UX anchor tags require a href attribute.",
        tip: 'Use a button element with type="button" instead if the link is not navigational.'
      }, true);
    }
  });
}

function RuleNoNonAsciiChars() {
  return defineRule({
    id: "no-non-ascii-chars",
    test({ link, url, report }) {
      function test(s) {
        if (/[^\u0020-\u007F]/.test(s)) {
          report({
            name: "no-non-ascii-chars",
            scope: "warning",
            message: "Links should not contain non-ascii characters.",
            // fix is to uri encode the link
            fix: encodeURI(s),
            fixDescription: "Encode non-ascii characters."
          });
        }
      }
      test(url.pathname);
      test(url.search);
      if (link.includes("#")) {
        const hash = link.split("#")[1];
        if (hash)
          test(hash);
      }
    }
  });
}

function RuleNoUnderscores() {
  return defineRule({
    id: "no-underscores",
    test({ url, report }) {
      if (url.pathname.includes("_")) {
        report({
          name: "no-underscores",
          scope: "warning",
          message: "Links should not contain underscores.",
          fix: url.pathname.replaceAll("_", "-"),
          fixDescription: "Replace underscores with dashes."
        });
      }
    }
  });
}

function RuleNoUppercaseChars() {
  return defineRule({
    id: "no-uppercase-chars",
    test({ report, link }) {
      if (link.match(/[A-Z]/)) {
        report({
          name: "no-uppercase-chars",
          scope: "warning",
          message: "Links should not contain uppercase characters.",
          fix: link.toLowerCase(),
          fixDescription: "Convert to lowercase."
        });
      }
    }
  });
}

function RuleNoWhitespace() {
  return defineRule({
    id: "no-whitespace",
    test({ link, report }) {
      if (link.trim() !== link) {
        report({
          name: "no-whitespace",
          scope: "warning",
          message: "Links should not start or end with whitespace.",
          fix: link.trim(),
          fixDescription: "Remove whitespace from start and end of link."
        });
      }
      if (link.trim().match(/\s/)) {
        report({
          name: "no-whitespace",
          scope: "warning",
          message: "Links should not contain whitespace.",
          tip: "Use hyphens to separate words instead of spaces."
        });
      }
    }
  });
}

function RuleTrailingSlash() {
  return defineRule({
    id: "trailing-slash",
    test({ report, link, siteConfig }) {
      const $url = parseURL(link);
      if ($url.pathname === "" && $url.hash) {
        return;
      }
      const isFile = $url.pathname.split("/").pop().includes(".");
      if ($url.pathname === "/" || isFile)
        return;
      const fix = fixSlashes(siteConfig.trailingSlash, link);
      if (!$url.pathname.endsWith("/") && siteConfig.trailingSlash) {
        report({
          name: "trailing-slash",
          scope: "warning",
          message: "Should have a trailing slash.",
          tip: "Incorrect trailing slashes can cause duplicate pages in search engines and waste crawl budget.",
          fix,
          fixDescription: "Add trailing slash."
        });
      } else if ($url.pathname.endsWith("/") && !siteConfig.trailingSlash) {
        report({
          name: "trailing-slash",
          scope: "warning",
          message: "Should not have a trailing slash.",
          tip: "Incorrect trailing slashes can cause duplicate pages in search engines and waste crawl budget.",
          fix,
          fixDescription: "Removing trailing slash."
        });
      }
    }
  });
}

function RuleRedirects() {
  return defineRule({
    id: "redirects",
    test({ report, response }) {
      if (response.status !== 301 && response.status !== 302)
        return;
      const payload = {
        name: "redirects",
        scope: "warning",
        message: "Should not redirect.",
        tip: "Redirects use up your crawl budget and increase loading times, it's recommended to avoid them when possible."
      };
      const fix = typeof response.headers?.get === "function" ? response.headers.get("location") : response.headers?.location || false;
      if (fix) {
        payload.fix = fix;
        payload.fixDescription = `Set to redirect URL ${fix}.`;
      }
      report(payload);
    }
  });
}

const AllInspections = [
  RuleNoMissingHref(),
  RuleNoDuplicateQueryParams(),
  RuleNoNonAsciiChars(),
  RuleMissingHash(),
  RuleNoUnderscores(),
  RuleNoWhitespace(),
  RuleNoDoubleSlashes(),
  RuleNoErrorResponse(),
  RuleNoDocumentRelative(),
  RuleNoJavascript(),
  RuleTrailingSlash(),
  RuleNoUppercaseChars(),
  RuleAbsoluteSiteUrls(),
  RuleRedirects(),
  RuleDescriptiveLinkText()
];
function inspect(ctx, rules) {
  rules = rules || AllInspections;
  const res = { error: [], warning: [], fix: ctx.link, link: ctx.link };
  let link = ctx.link;
  const siteConfigHost = ctx.siteConfig?.url && parseURL(ctx.siteConfig.url).host;
  const url = parseURL(link);
  const validInspections = rules.filter(({ id }) => !(ctx.skipInspections || []).includes(id));
  let processing = true;
  for (const rule of validInspections) {
    const isFakeAbsolute = link.startsWith("//") && !link.includes(".");
    const hasNonHttpProtocol = hasProtocol(link) && !link.startsWith("http");
    const isExternalLink = hasNonHttpProtocol || url.host && url.host !== siteConfigHost && !isFakeAbsolute;
    if (!rule.externalLinks && isExternalLink) {
      continue;
    }
    rule.test({
      ...ctx,
      link,
      url,
      report(obj, stop) {
        if (stop) {
          processing = false;
        }
        res[obj.scope].push(obj);
        if (obj.fix)
          link = obj.fix;
      }
    });
    if (!processing)
      break;
  }
  res.passes = !res.error?.length && !res.warning?.length;
  res.fix = link;
  res.textContent = ctx.textContent;
  return res;
}

const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function isInternalRoute(path) {
  const lastSegment = path.split("/").pop() || path;
  return lastSegment.includes(".") || path.startsWith("/__") || path.startsWith("@");
}
const _nSFzvR = defineEventHandler(async (e) => {
  const { tasks, ids, path } = await readBody(e);
  const runtimeConfig = useRuntimeConfig().public["nuxt-link-checker"] || {};
  const partialCtx = {
    ids,
    fromPath: fixSlashes(false, path),
    siteConfig: useSiteConfig(e)
  };
  lruFsCache.clear();
  const links = await $fetch("/__link-checker__/links");
  const pageSearch = new Fuse(mergeOnKey(links, "link"), {
    keys: ["link", "title"],
    threshold: 0.5
  });
  return Promise.all(
    tasks.map(async ({ link, paths, textContent }) => {
      if (isNonFetchableLink(link) || isInternalRoute(link))
        return { passes: true };
      const response = await getLinkResponse({
        link,
        timeout: runtimeConfig.fetchTimeout,
        fetchRemoteUrls: runtimeConfig.fetchRemoteUrls,
        baseURL: useNitroOrigin(e),
        isInStorage() {
          return false;
        }
      });
      const result = inspect({
        ...partialCtx,
        link,
        textContent,
        pageSearch,
        response,
        skipInspections: runtimeConfig.skipInspections
      });
      const filePaths = [
        resolve$2(runtimeConfig.rootDir, links.find((l) => l.file && l.link === path)?.file),
        ...paths.map((p) => {
          const [filepath] = p.split(":");
          return filepath;
        })
      ].filter(Boolean);
      if (!result.passes) {
        result.sources = (await Promise.all(filePaths.map(async (filepath) => await generateFileLinkPreviews(filepath, link)))).filter((s) => s.previews.length);
        result.diff = await Promise.all((result.sources || []).map(async ({ filepath }) => generateFileLinkDiff(filepath, link, result.fix)));
      }
      return result;
    })
  );
});

const contentLinkProvider = async (e) => (await serverQueryContent(e).find()).map((doc) => ({
  link: doc._path,
  title: doc.title
}));

const pagePaths = [
  {
    "title": "",
    "link": "/archive"
  },
  {
    "title": "",
    "link": "/link"
  },
  {
    "title": "",
    "link": "/preview"
  },
  {
    "title": "",
    "link": "/201103/essay1-where"
  },
  {
    "title": "",
    "link": "/201408/have-a-strange-dream"
  },
  {
    "title": "",
    "link": "/201505/phone-2015"
  },
  {
    "title": "",
    "link": "/201606/school-stress"
  },
  {
    "title": "",
    "link": "/201805/windows-launch-anim"
  },
  {
    "title": "",
    "link": "/201907/score-query-leak"
  },
  {
    "title": "",
    "link": "/201908/zhilu-site-biography"
  },
  {
    "title": "",
    "link": "/202002/essay3"
  },
  {
    "title": "",
    "link": "/202002/essay4"
  },
  {
    "title": "",
    "link": "/202002/father-birthday"
  },
  {
    "title": "",
    "link": "/202006/school-diary"
  },
  {
    "title": "",
    "link": "/202010/life-is-dramatic"
  },
  {
    "title": "",
    "link": "/202105/virus-fakefolder"
  },
  {
    "title": "",
    "link": "/202110/exam-clock-develop"
  },
  {
    "title": "",
    "link": "/202110/noob-in-ctf"
  },
  {
    "title": "",
    "link": "/202111/message-heard"
  },
  {
    "title": "",
    "link": "/202201/school-thief"
  },
  {
    "title": "",
    "link": "/202209/ctf-nwpu"
  },
  {
    "title": "",
    "link": "/202210/thoughts-in-classroom"
  },
  {
    "title": "",
    "link": "/202211/linux-interview-2020"
  },
  {
    "title": "",
    "link": "/202212/linux-interview-2021"
  },
  {
    "title": "",
    "link": "/202301/linux-interview-2022"
  },
  {
    "title": "",
    "link": "/2023/linux-interview-2022"
  },
  {
    "title": "",
    "link": "/202302/c-strbuf"
  },
  {
    "title": "",
    "link": "/202303/linuxqq-crash"
  },
  {
    "title": "",
    "link": "/202304/vscode-simple-config"
  },
  {
    "title": "",
    "link": "/202305/archinstall-guide"
  },
  {
    "title": "",
    "link": "/202306/archlinux-configure"
  },
  {
    "title": "",
    "link": "/202307/archlinux-beautify"
  },
  {
    "title": "",
    "link": "/202308/light-backpack"
  },
  {
    "title": "",
    "link": "/202309/windows-setup-guide"
  },
  {
    "title": "",
    "link": "/202310/tailscale-incomplete-guide"
  },
  {
    "title": "",
    "link": "/202311/termux-guide"
  },
  {
    "title": "",
    "link": "/202311/xv6-lab-setup"
  },
  {
    "title": "",
    "link": "/202312/ssh-key-login"
  },
  {
    "title": "",
    "link": "/202401/milink-util"
  },
  {
    "title": "",
    "link": "/202401/moonlight-streaming-guide"
  },
  {
    "title": "",
    "link": "/202402/apps-websites-preference-2023"
  },
  {
    "title": "",
    "link": "/202402/carrier-overbilling"
  },
  {
    "title": "",
    "link": "/202402/link-util"
  },
  {
    "title": "",
    "link": "/202402/virus-trueupdate"
  },
  {
    "title": "",
    "link": "/202403/balancing-today-tomorrow"
  },
  {
    "title": "",
    "link": "/202403/boot-management"
  },
  {
    "title": "",
    "link": "/202403/helping-day"
  },
  {
    "title": "",
    "link": "/202404/archlinux-boot-repair"
  },
  {
    "title": "",
    "link": "/202404/magic-code"
  }
];

const _oRx0r5 = defineCachedEventHandler(async (e) => {
  const runtimeConfig = useRuntimeConfig().public["nuxt-link-checker"] || {};
  const linkDb = [
    ...pagePaths
  ];
  if (runtimeConfig.hasSitemapModule) {
    const sitemapDebug = await $fetch("/__sitemap__/debug.json");
    const entries = sitemapDebug.globalSources.map((source) => source.urls).flat();
    linkDb.push(...entries.map((s) => ({ path: s.loc, title: "" })));
  }
  if (contentLinkProvider) {
    const links = await contentLinkProvider(e);
    linkDb.push(...links);
  }
  return linkDb;
}, {
  maxAge: 10
  // avoid thrashing
});

const _RgyV8H = defineEventHandler(async (e) => {
  return {
    runtimeConfig: useRuntimeConfig(e).public["nuxt-link-checker"]
  };
});

const fileMapping = {};

const _iMtLda = defineEventHandler(async (e) => {
  const path = parseURL(e.path).pathname;
  if (fileMapping[path]) {
    if (path.endsWith(".svg"))
      setHeader(e, "Content-Type", "image/svg+xml");
    else if (path.endsWith(".png"))
      setHeader(e, "Content-Type", "image/png");
    else if (path.endsWith(".jpg") || path.endsWith(".jpeg"))
      setHeader(e, "Content-Type", "image/jpeg");
    return fs.readFileSync(fileMapping[path]);
  }
});

const _vRFJL9 = defineEventHandler(async (event) => {
  const { getContentQuery } = await Promise.resolve().then(function () { return query; });
  const { serverQueryContent } = await Promise.resolve().then(function () { return storage; });
  const query$1 = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query$1.first) {
    let contentQuery = serverQueryContent(event, query$1);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query: query$1
        }
      });
    }
    return content;
  }
  if (query$1.count) {
    return serverQueryContent(event, query$1).count();
  }
  return serverQueryContent(event, query$1).find();
});

const _V7Pl2Z = defineEventHandler(async (event) => {
  const { getContentIndex } = await Promise.resolve().then(function () { return contentIndex; });
  const { cacheStorage, serverQueryContent } = await Promise.resolve().then(function () { return storage; });
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage().setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

const _5fq1uR = defineEventHandler(async (event) => {
  const { serverSearchContent, splitPageIntoSections } = await Promise.resolve().then(function () { return search; });
  const MiniSearch = await import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/minisearch@7.1.2/node_modules/minisearch/dist/es/index.js').then((m) => m.default);
  const runtimeConfig = useRuntimeConfig();
  const { ignoredTags = [], filterQuery, indexed, options } = runtimeConfig.public.content.search;
  const files = await serverSearchContent(event, filterQuery);
  const sections = files.map((page) => splitPageIntoSections(page, { ignoredTags })).flat();
  if (indexed) {
    const miniSearch = new MiniSearch(options);
    miniSearch.addAll(sections);
    return JSON.stringify(miniSearch);
  }
  return sections;
});

const _5E7ulf = defineEventHandler(async (event) => {
  const { getContentQuery } = await Promise.resolve().then(function () { return query; });
  const { cacheStorage, serverQueryContent } = await Promise.resolve().then(function () { return storage; });
  const { createNav } = await Promise.resolve().then(function () { return navigation; });
  const query$1 = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query$1).length === 0) {
    const cache = await cacheStorage().getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query$1).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const _locale = (query$1?.where || []).find((w) => w._locale)?._locale;
  const dirConfigs = await serverQueryContent(event, _locale ? { where: [{ _locale }] } : void 0).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _LfXgHD = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_RB71q2 = () => Promise.resolve().then(function () { return stats_get$1; });
const _lazy_higCG4 = () => Promise.resolve().then(function () { return atom_xml_get$1; });
const _lazy_IK4hZy = () => Promise.resolve().then(function () { return zhilu_opml_get$1; });
const _lazy_66gu2S = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_osaWrQ = () => Promise.resolve().then(function () { return font$1; });
const _lazy_SHyFfS = () => Promise.resolve().then(function () { return debug_json$1; });
const _lazy_Jt4wcU = () => Promise.resolve().then(function () { return image$1; });

const handlers = [
  { route: '/api/stats', handler: _lazy_RB71q2, lazy: true, middleware: false, method: "get" },
  { route: '/atom.xml', handler: _lazy_higCG4, lazy: true, middleware: false, method: "get" },
  { route: '/zhilu.opml', handler: _lazy_IK4hZy, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_66gu2S, lazy: true, middleware: false, method: undefined },
  { route: '/api/_mdc/highlight', handler: _QOoAha, lazy: false, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _7_ewj_, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _Yb8yDS, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _gQCOjw, lazy: false, middleware: false, method: undefined },
  { route: '/robots.txt', handler: _zkkBjI, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _17W6cp, lazy: false, middleware: true, method: undefined },
  { route: '/__robots__/nuxt-content.json', handler: _t87WX2, lazy: false, middleware: false, method: undefined },
  { route: '/__robots__/debug.json', handler: _24DDvv, lazy: false, middleware: false, method: undefined },
  { route: '/__robots__/debug-path.json', handler: _ctKHBy, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/nuxt-content-urls.json', handler: _yIpKfZ, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/debug.json', handler: _opbmVj, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _OIXAtG, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _Shn6rb, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/font/**', handler: _lazy_osaWrQ, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/debug.json', handler: _lazy_SHyFfS, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_Jt4wcU, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_Jt4wcU, lazy: true, middleware: false, method: undefined },
  { route: '/__schema-org__/debug.json', handler: _KkWuL5, lazy: false, middleware: false, method: undefined },
  { route: '/__link-checker__/inspect', handler: _nSFzvR, lazy: false, middleware: false, method: undefined },
  { route: '/__link-checker__/links', handler: _oRx0r5, lazy: false, middleware: false, method: undefined },
  { route: '/__link-checker__/debug.json', handler: _RgyV8H, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _iMtLda, lazy: false, middleware: true, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _vRFJL9, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _vRFJL9, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _vRFJL9, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.json', handler: _V7Pl2Z, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/search', handler: _5fq1uR, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _5E7ulf, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _5E7ulf, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _5E7ulf, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _LfXgHD, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_66gu2S, lazy: true, middleware: false, method: undefined }
];

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + (messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const defaults = {
  theme: {},
  async highlighter(code, lang, theme, options) {
    try {
      if (globalThis._importMeta_.browser && window.sessionStorage.getItem("mdc-shiki-highlighter") === "browser") {
        return Promise.resolve().then(function () { return mdcHighlighter; }).then((h) => h.default(code, lang, theme, options)).catch(() => ({}));
      }
      return await $fetch("/api/_mdc/highlight", {
        params: {
          code,
          lang,
          theme: JSON.stringify(theme),
          options: JSON.stringify(options)
        }
      });
    } catch (e) {
      if (globalThis._importMeta_.browser && e?.response?.status === 404) {
        window.sessionStorage.setItem("mdc-shiki-highlighter", "browser");
        return this.highlighter?.(code, lang, theme, options);
      }
    }
    return Promise.resolve({ tree: [{ type: "text", value: code }], className: "", style: "" });
  }
};
function rehypeHighlight(opts = {}) {
  const options = { ...defaults, ...opts };
  if (typeof options.highlighter !== "function") {
    options.highlighter = defaults.highlighter;
  }
  return rehypeHighlight$1(options);
}

const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-reading-time': { instance: _RemarkReadingTime },
};

const rehypePlugins = {
  'highlight': { instance: rehypeHighlight, options: {} },
};

const highlight = {"theme":{"default":"catppuccin-latte","dark":"one-dark-pro"}};

const mdcImports = /*#__PURE__*/Object.freeze({
  __proto__: null,
  highlight: highlight,
  rehypePlugins: rehypePlugins,
  remarkPlugins: remarkPlugins
});

let configs;
function getMdcConfigs () {
if (!configs) {
  configs = Promise.all([
  ]);
}
return configs
}

const mdcConfigs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getMdcConfigs: getMdcConfigs
});

const assets = prefixStorage(useStorage(), "/assets");
async function loadFont({ e, publicStoragePath }, font) {
  const { name, weight } = font;
  if (font.data)
    return font;
  if (font.key && await assets.hasItem(font.key)) {
    let fontData = await assets.getItem(font.key);
    if (fontData instanceof Uint8Array) {
      const decoder = new TextDecoder();
      fontData = decoder.decode(fontData);
    }
    font.data = Buffer.from(fontData, "base64");
    return font;
  }
  let data;
  if (font.path) {
    {
      const key = `${publicStoragePath}${font.path.replace("./", ":").replace("/", ":")}`;
      if (await useStorage().hasItem(key))
        data = await useStorage().getItemRaw(key);
    }
  } else {
    data = await e.$fetch(`/__og-image__/font/${name}/${weight}.ttf`, {
      responseType: "arrayBuffer",
      query: {
        font
      }
    });
  }
  font.data = data;
  return font;
}

const cssInlineInstance = { instance: void 0 };
const sharpInstance = { instance: void 0 };
const resvgInstance = { instance: void 0 };
const satoriInstance = { instance: void 0 };
async function useResvg() {
  resvgInstance.instance = resvgInstance.instance || await Promise.resolve().then(function () { return node$3; }).then((m) => m.default);
  await resvgInstance.instance.initWasmPromise;
  return resvgInstance.instance.Resvg;
}
async function useSatori() {
  satoriInstance.instance = satoriInstance.instance || await Promise.resolve().then(function () { return node$1; }).then((m) => m.default);
  await satoriInstance.instance.initWasmPromise;
  return satoriInstance.instance.satori;
}
async function useSharp() {
  sharpInstance.instance = sharpInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  return sharpInstance.instance;
}
async function useCssInline() {
  cssInlineInstance.instance = cssInlineInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  await cssInlineInstance.instance.initWasmPromise;
  return cssInlineInstance.instance.cssInline;
}

function walkSatoriTree(e, node, plugins) {
  const promises = [];
  if (!node.props?.children || !Array.isArray(node.props.children))
    return promises;
  if (node.props.children.length === 0) {
    delete node.props.children;
    return promises;
  }
  for (const child of node.props.children || []) {
    if (child) {
      for (const plugin of plugins.flat()) {
        if (plugin.filter(child))
          promises.push(plugin.transform(child, e));
      }
      promises.push(
        ...walkSatoriTree(e, child, plugins)
      );
    }
  }
  return promises;
}
function defineSatoriTransformer(transformer) {
  return transformer;
}

const classes = defineSatoriTransformer([
  {
    filter: (node) => !!node.props?.class && !node.props?.tw,
    transform(node) {
      node.props.tw = node.props.class;
      node.props.tw = node.props.tw.replace(/icon|inline-style/g, "");
    }
  },
  {
    filter: (node) => !!node.props?.style?.display,
    transform(node) {
      if (["inline-block", "inline"].includes(node.props.style.display))
        delete node.props.style.display;
    }
  }
]);

function isEmojiFilter(node) {
  return node.type === "svg" && typeof node.props?.["data-emoji"] !== "undefined";
}
const emojis = defineSatoriTransformer([
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => ["div", "p"].includes(node.type) && Array.isArray(node.props?.children) && node.props.children.some(isEmojiFilter),
    transform: (node) => {
      node.props.style = node.props.style || {};
      node.props.style.display = "flex";
      node.props.style.alignItems = "center";
      node.props.children = node.props.children.map((child) => {
        if (typeof child === "string") {
          return {
            type: "div",
            props: {
              children: child
            }
          };
        }
        if (child.props.class?.includes("emoji"))
          delete child.props.class;
        return child;
      });
    }
  }
]);

const encoding = defineSatoriTransformer([
  // clean up
  {
    filter: (node) => node.props?.["data-v-inspector"],
    transform: (node) => {
      delete node.props["data-v-inspector"];
    }
  },
  {
    filter: (node) => typeof node.props?.children === "string",
    transform: (node) => {
      node.props.children = decodeHtml(node.props.children);
    }
  }
]);

const BLOCK_ELEMENTS = [
  "div",
  "p",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "hr",
  "table",
  "dl"
];
const INLINE_ELEMENTS = [
  "span",
  "a",
  "b",
  "i",
  "u",
  "em",
  "strong",
  "code",
  "abbr",
  "del",
  "ins",
  "mark",
  "sub",
  "sup",
  "small",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5"
];
const flex = defineSatoriTransformer({
  filter: (node) => [...INLINE_ELEMENTS, "div"].includes(node.type) && (Array.isArray(node.props?.children) && node.props?.children.length >= 1) && !node.props?.class?.includes("hidden"),
  transform: (node) => {
    node.props.style = node.props.style || {};
    if (node.props.style?.display && node.props.style?.display !== "flex") {
      return;
    }
    if (node.type === "div") {
      node.props.style.display = "flex";
      if (!node.props?.class?.includes("flex-") && node.props.children.some((child) => BLOCK_ELEMENTS.includes(child.type))) {
        node.props.style.flexDirection = "column";
        return;
      }
    }
    let flexWrap = node.props?.class?.includes("flex-wrap");
    if (!node.props?.class?.includes("flex-")) {
      node.props.style.flexWrap = "wrap";
      flexWrap = true;
    }
    if (flexWrap && !node.props?.class?.includes("gap")) {
      node.props.style.gap = "0.2em";
    }
  }
});

async function resolveLocalFilePathImage(publicStoragePath, src) {
  const normalizedSrc = withoutLeadingSlash(
    src.replace("_nuxt/@fs/", "").replace("_nuxt/", "").replace("./", "")
  );
  const key = `${publicStoragePath}:${normalizedSrc}`;
  if (await useStorage().hasItem(key))
    return await useStorage().getItemRaw(key);
}
const imageSrc = defineSatoriTransformer([
  // fix <img src="">
  {
    filter: (node) => node.type === "img" && node.props?.src,
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      let src = node.props.src;
      const isRelative = src.startsWith("/");
      let dimensions;
      let imageBuffer;
      if (src.endsWith(".webp")) {
        logger.warn("Using WebP images with Satori is not supported. Please consider switching image format or use the chromium renderer.", src);
      }
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "");
          imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
        }
        if (!imageBuffer) {
          imageBuffer = await e.$fetch(src, { responseType: "arrayBuffer" }).catch(() => {
          });
          if (!imageBuffer && true) {
            imageBuffer = await e.$fetch(src, {
              baseURL: useNitroOrigin(e),
              responseType: "arrayBuffer"
            }).catch(() => {
            });
          }
        }
        if (imageBuffer)
          node.props.src = toBase64Image(imageBuffer);
      } else if (!src.startsWith("data:")) {
        src = decodeHtml(src);
        node.props.src = src;
        imageBuffer = await $fetch(src, {
          responseType: "arrayBuffer"
        }).catch(() => {
        });
      }
      if (imageBuffer && (!node.props.width || !node.props.height)) {
        try {
          const imageSize = sizeOf(imageBuffer);
          dimensions = { width: imageSize.width, height: imageSize.height };
        } catch {
        }
        if (dimensions?.width && dimensions?.height) {
          const naturalAspectRatio = dimensions.width / dimensions.height;
          if (node.props.width && !node.props.height) {
            node.props.height = Math.round(node.props.width / naturalAspectRatio);
          } else if (node.props.height && !node.props.width) {
            node.props.width = Math.round(node.props.height * naturalAspectRatio);
          } else if (!node.props.width && !node.props.height) {
            node.props.width = dimensions.width;
            node.props.height = dimensions.height;
          }
        }
      }
      if (typeof node.props.src === "string" && node.props.src.startsWith("/")) {
        if (imageBuffer) {
          node.props.src = toBase64Image(imageBuffer);
        } else {
          node.props.src = `${withBase(src, `${useNitroOrigin(e)}`)}?${Date.now()}`;
        }
      }
    }
  },
  // fix style="background-image: url('')"
  {
    filter: (node) => node.props?.style?.backgroundImage?.includes("url("),
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      const backgroundImage = node.props.style.backgroundImage;
      const src = backgroundImage.replace(/^url\(['"]?/, "").replace(/['"]?\)$/, "");
      const isRelative = src?.startsWith("/");
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "/");
          const imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
          if (imageBuffer) {
            const base64 = toBase64Image(Buffer.from(imageBuffer));
            node.props.style.backgroundImage = `url(${base64})`;
          }
        }
      }
    }
  }
]);

const unocss = defineSatoriTransformer({
  filter: (node) => !!node.props?.class,
  transform: async (node, ctx) => {
    const classes = node.props.class || "";
    const styles = node.props.style || {};
    const replacedClasses = /* @__PURE__ */ new Set();
    for (const token of classes.split(" ").filter((c) => c.trim())) {
      const parsedToken = await ctx.unocss.parseToken(token);
      if (parsedToken) {
        const inlineStyles = parsedToken[0][2].split(";").filter((s) => !!s?.trim());
        const vars = {
          "--color-gray-50": "249 250 251",
          "--color-gray-100": "243 244 246",
          "--color-gray-200": "229 231 235",
          "--color-gray-300": "209 213 219",
          "--color-gray-400": "156 163 175",
          "--color-gray-500": "107 114 128",
          "--color-gray-600": "75 85 99",
          "--color-gray-700": "55 65 81",
          "--color-gray-800": "31 41 55",
          "--color-gray-900": "17 24 39",
          "--color-gray-950": "3 7 18"
        };
        inlineStyles.filter((s) => s.startsWith("--")).forEach((s) => {
          const [key, value] = s.split(":");
          vars[key] = value;
        });
        inlineStyles.filter((s) => !s.startsWith("--")).forEach((s) => {
          const [key, value] = s.split(":");
          const camelCasedKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          if (!styles[camelCasedKey])
            styles[camelCasedKey] = value.replace(/var\((.*?)\)/g, (_, k) => vars[k.trim()]);
          if (styles[camelCasedKey] && styles[camelCasedKey].includes("/")) {
            const [rgb, opacity] = styles[camelCasedKey].split("/");
            if (opacity.trim() === "1)")
              styles[camelCasedKey] = rgb.replace(/(\d+) (\d+) (\d+).*/, (_, r, g, b) => `${r}, ${g}, ${b})`);
            else
              styles[camelCasedKey] = `${rgb.replace("rgb", "rgba").replaceAll(" ", ", ")}${opacity.trim()}`;
          }
        });
        replacedClasses.add(token);
      }
    }
    node.props.class = classes.split(" ").filter((c) => !replacedClasses.has(c)).join(" ");
    node.props.tw = classes.split(" ").filter((c) => !replacedClasses.has(c)).join(" ");
    node.props.style = styles;
  }
});

const charMap = {
  "2049": "exclamation-question-mark",
  "2122": "trade-mark",
  "2139": "information",
  "2194": "left-right-arrow",
  "2195": "up-down-arrow",
  "2196": "up-left-arrow",
  "2197": "up-right-arrow",
  "2198": "down-right-arrow",
  "2199": "down-left-arrow",
  "2328": "keyboard",
  "2600": "sun",
  "2601": "cloud",
  "2602": "umbrella",
  "2603": "snowman",
  "2604": "comet",
  "2611": "check-box-with-check",
  "2614": "umbrella-with-rain-drops",
  "2615": "hot-beverage",
  "2618": "shamrock",
  "2620": "skull-and-crossbones",
  "2622": "radioactive",
  "2623": "biohazard",
  "2626": "orthodox-cross",
  "2638": "wheel-of-dharma",
  "2639": "frowning-face",
  "2640": "female-sign",
  "2642": "male-sign",
  "2648": "aries",
  "2649": "taurus",
  "2650": "sagittarius",
  "2651": "capricorn",
  "2652": "aquarius",
  "2653": "pisces",
  "2660": "spade-suit",
  "2663": "club-suit",
  "2665": "heart-suit",
  "2666": "diamond-suit",
  "2668": "hot-springs",
  "2692": "hammer-and-pick",
  "2693": "anchor",
  "2694": "crossed-swords",
  "2695": "medical-symbol",
  "2696": "balance-scale",
  "2697": "alembic",
  "2699": "gear",
  "2702": "scissors",
  "2705": "check-mark-button",
  "2708": "airplane",
  "2709": "envelope",
  "2712": "black-nib",
  "2714": "check-mark",
  "2716": "multiply",
  "2721": "star-of-david",
  "2728": "sparkles",
  "2733": "eight-spoked-asterisk",
  "2734": "eight-pointed-star",
  "2744": "snowflake",
  "2747": "sparkle",
  "2753": "red-question-mark",
  "2754": "white-question-mark",
  "2755": "white-exclamation-mark",
  "2757": "red-exclamation-mark",
  "2763": "heart-exclamation",
  "2764": "red-heart",
  "2795": "plus",
  "2796": "minus",
  "2797": "divide",
  "2934": "right-arrow-curving-up",
  "2935": "right-arrow-curving-down",
  "3030": "wavy-dash",
  "3297": "japanese-congratulations-button",
  "3299": "japanese-secret-button",
  "1f947": "1st-place-medal",
  "1f948": "2nd-place-medal",
  "1f949": "3rd-place-medal",
  "1f170": "a-button-blood-type",
  "1f18e": "ab-button-blood-type",
  "1f9ee": "abacus",
  "1fa97": "accordion",
  "1fa79": "adhesive-bandage",
  "1f39f": "admission-tickets",
  "1f6a1": "aerial-tramway",
  "1f6ec": "airplane-arrival",
  "1f6eb": "airplane-departure",
  "23f0": "alarm-clock",
  "1f47d": "alien",
  "1f47e": "alien-monster",
  "1f691": "ambulance",
  "1f3c8": "american-football",
  "1f3fa": "amphora",
  "1fac0": "anatomical-heart",
  "1f4a2": "anger-symbol",
  "1f620": "angry-face",
  "1f47f": "angry-face-with-horns",
  "1f627": "anguished-face",
  "1f41c": "ant",
  "1f4f6": "antenna-bars",
  "1f630": "anxious-face-with-sweat",
  "1f69b": "articulated-lorry",
  "1f9d1-200d-1f3a8": "artist",
  "1f9d1-1f3ff-200d-1f3a8": "artist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3a8": "artist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3a8": "artist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3a8": "artist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3a8": "artist-medium-skin-tone",
  "1f3a8": "artist-palette",
  "1f632": "astonished-face",
  "1f9d1-200d-1f680": "astronaut",
  "1f9d1-1f3ff-200d-1f680": "astronaut-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f680": "astronaut-light-skin-tone",
  "1f9d1-1f3fe-200d-1f680": "astronaut-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f680": "astronaut-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f680": "astronaut-medium-skin-tone",
  "1f3e7": "atm-sign",
  "269b": "atom-symbol",
  "1f6fa": "auto-rickshaw",
  "1f697": "automobile",
  "1f951": "avocado",
  "1fa93": "axe",
  "1f171": "b-button-blood-type",
  "1f476": "baby",
  "1f47c": "baby-angel",
  "1f47c-1f3ff": "baby-angel-dark-skin-tone",
  "1f47c-1f3fb": "baby-angel-light-skin-tone",
  "1f47c-1f3fe": "baby-angel-medium-dark-skin-tone",
  "1f47c-1f3fc": "baby-angel-medium-light-skin-tone",
  "1f47c-1f3fd": "baby-angel-medium-skin-tone",
  "1f37c": "baby-bottle",
  "1f424": "baby-chick",
  "1f476-1f3ff": "baby-dark-skin-tone",
  "1f476-1f3fb": "baby-light-skin-tone",
  "1f476-1f3fe": "baby-medium-dark-skin-tone",
  "1f476-1f3fc": "baby-medium-light-skin-tone",
  "1f476-1f3fd": "baby-medium-skin-tone",
  "1f6bc": "baby-symbol",
  "1f519": "back-arrow",
  "1f447": "backhand-index-pointing-down",
  "1f447-1f3ff": "backhand-index-pointing-down-dark-skin-tone",
  "1f447-1f3fb": "backhand-index-pointing-down-light-skin-tone",
  "1f447-1f3fe": "backhand-index-pointing-down-medium-dark-skin-tone",
  "1f447-1f3fc": "backhand-index-pointing-down-medium-light-skin-tone",
  "1f447-1f3fd": "backhand-index-pointing-down-medium-skin-tone",
  "1f448": "backhand-index-pointing-left",
  "1f448-1f3ff": "backhand-index-pointing-left-dark-skin-tone",
  "1f448-1f3fb": "backhand-index-pointing-left-light-skin-tone",
  "1f448-1f3fe": "backhand-index-pointing-left-medium-dark-skin-tone",
  "1f448-1f3fc": "backhand-index-pointing-left-medium-light-skin-tone",
  "1f448-1f3fd": "backhand-index-pointing-left-medium-skin-tone",
  "1f449": "backhand-index-pointing-right",
  "1f449-1f3ff": "backhand-index-pointing-right-dark-skin-tone",
  "1f449-1f3fb": "backhand-index-pointing-right-light-skin-tone",
  "1f449-1f3fe": "backhand-index-pointing-right-medium-dark-skin-tone",
  "1f449-1f3fc": "backhand-index-pointing-right-medium-light-skin-tone",
  "1f449-1f3fd": "backhand-index-pointing-right-medium-skin-tone",
  "1f446": "backhand-index-pointing-up",
  "1f446-1f3ff": "backhand-index-pointing-up-dark-skin-tone",
  "1f446-1f3fb": "backhand-index-pointing-up-light-skin-tone",
  "1f446-1f3fe": "backhand-index-pointing-up-medium-dark-skin-tone",
  "1f446-1f3fc": "backhand-index-pointing-up-medium-light-skin-tone",
  "1f446-1f3fd": "backhand-index-pointing-up-medium-skin-tone",
  "1f392": "backpack",
  "1f953": "bacon",
  "1f9a1": "badger",
  "1f3f8": "badminton",
  "1f96f": "bagel",
  "1f6c4": "baggage-claim",
  "1f956": "baguette-bread",
  "1fa70": "ballet-shoes",
  "1f388": "balloon",
  "1f5f3": "ballot-box-with-ballot",
  "1f34c": "banana",
  "1fa95": "banjo",
  "1f3e6": "bank",
  "1f4ca": "bar-chart",
  "1f488": "barber-pole",
  "26be": "baseball",
  "1f9fa": "basket",
  "1f3c0": "basketball",
  "1f987": "bat",
  "1f6c1": "bathtub",
  "1f50b": "battery",
  "1f3d6": "beach-with-umbrella",
  "1f601": "beaming-face-with-smiling-eyes",
  "1fad8": "beans",
  "1f43b": "bear",
  "1f493": "beating-heart",
  "1f9ab": "beaver",
  "1f6cf": "bed",
  "1f37a": "beer-mug",
  "1fab2": "beetle",
  "1f514": "bell",
  "1fad1": "bell-pepper",
  "1f515": "bell-with-slash",
  "1f6ce": "bellhop-bell",
  "1f371": "bento-box",
  "1f9c3": "beverage-box",
  "1f6b2": "bicycle",
  "1f459": "bikini",
  "1f9e2": "billed-cap",
  "1f426": "bird",
  "1f382": "birthday-cake",
  "1f9ac": "bison",
  "1fae6": "biting-lip",
  "1f426-200d-2b1b": "black-bird",
  "1f408-200d-2b1b": "black-cat",
  "26ab": "black-circle",
  "1f3f4": "black-flag",
  "1f5a4": "black-heart",
  "2b1b": "black-large-square",
  "25fe": "black-medium-small-square",
  "25fc": "black-medium-square",
  "25aa": "black-small-square",
  "1f532": "black-square-button",
  "1f33c": "blossom",
  "1f421": "blowfish",
  "1f4d8": "blue-book",
  "1f535": "blue-circle",
  "1f499": "blue-heart",
  "1f7e6": "blue-square",
  "1fad0": "blueberries",
  "1f417": "boar",
  "1f4a3": "bomb",
  "1f9b4": "bone",
  "1f516": "bookmark",
  "1f4d1": "bookmark-tabs",
  "1f4da": "books",
  "1fa83": "boomerang",
  "1f37e": "bottle-with-popping-cork",
  "1f490": "bouquet",
  "1f3f9": "bow-and-arrow",
  "1f963": "bowl-with-spoon",
  "1f3b3": "bowling",
  "1f94a": "boxing-glove",
  "1f466": "boy",
  "1f466-1f3ff": "boy-dark-skin-tone",
  "1f466-1f3fb": "boy-light-skin-tone",
  "1f466-1f3fe": "boy-medium-dark-skin-tone",
  "1f466-1f3fc": "boy-medium-light-skin-tone",
  "1f466-1f3fd": "boy-medium-skin-tone",
  "1f9e0": "brain",
  "1f35e": "bread",
  "1f931": "breast-feeding",
  "1f931-1f3ff": "breast-feeding-dark-skin-tone",
  "1f931-1f3fb": "breast-feeding-light-skin-tone",
  "1f931-1f3fe": "breast-feeding-medium-dark-skin-tone",
  "1f931-1f3fc": "breast-feeding-medium-light-skin-tone",
  "1f931-1f3fd": "breast-feeding-medium-skin-tone",
  "1f9f1": "brick",
  "1f309": "bridge-at-night",
  "1f4bc": "briefcase",
  "1fa72": "briefs",
  "1f506": "bright-button",
  "1f966": "broccoli",
  "26d3-200d-1f4a5": "broken-chain",
  "1f494": "broken-heart",
  "1f9f9": "broom",
  "1f7e4": "brown-circle",
  "1f90e": "brown-heart",
  "1f344-200d-1f7eb": "brown-mushroom",
  "1f7eb": "brown-square",
  "1f9cb": "bubble-tea",
  "1fae7": "bubbles",
  "1faa3": "bucket",
  "1f41b": "bug",
  "1f3d7": "building-construction",
  "1f685": "bullet-train",
  "1f3af": "bullseye",
  "1f32f": "burrito",
  "1f68c": "bus",
  "1f68f": "bus-stop",
  "1f464": "bust-in-silhouette",
  "1f465": "busts-in-silhouette",
  "1f9c8": "butter",
  "1f98b": "butterfly",
  "1f335": "cactus",
  "1f4c5": "calendar",
  "1f919": "call-me-hand",
  "1f919-1f3ff": "call-me-hand-dark-skin-tone",
  "1f919-1f3fb": "call-me-hand-light-skin-tone",
  "1f919-1f3fe": "call-me-hand-medium-dark-skin-tone",
  "1f919-1f3fc": "call-me-hand-medium-light-skin-tone",
  "1f919-1f3fd": "call-me-hand-medium-skin-tone",
  "1f42a": "camel",
  "1f4f7": "camera",
  "1f4f8": "camera-with-flash",
  "1f3d5": "camping",
  "264b": "cancer",
  "1f56f": "candle",
  "1f36c": "candy",
  "1f96b": "canned-food",
  "1f6f6": "canoe",
  "1f5c3": "card-file-box",
  "1f4c7": "card-index",
  "1f5c2": "card-index-dividers",
  "1f3a0": "carousel-horse",
  "1f38f": "carp-streamer",
  "1fa9a": "carpentry-saw",
  "1f955": "carrot",
  "1f3f0": "castle",
  "1f408": "cat",
  "1f431": "cat-face",
  "1f639": "cat-with-tears-of-joy",
  "1f63c": "cat-with-wry-smile",
  "26d3": "chains",
  "1fa91": "chair",
  "1f4c9": "chart-decreasing",
  "1f4c8": "chart-increasing",
  "1f4b9": "chart-increasing-with-yen",
  "1f9c0": "cheese-wedge",
  "1f3c1": "chequered-flag",
  "1f352": "cherries",
  "1f338": "cherry-blossom",
  "265f": "chess-pawn",
  "1f330": "chestnut",
  "1f414": "chicken",
  "1f9d2": "child",
  "1f9d2-1f3ff": "child-dark-skin-tone",
  "1f9d2-1f3fb": "child-light-skin-tone",
  "1f9d2-1f3fe": "child-medium-dark-skin-tone",
  "1f9d2-1f3fc": "child-medium-light-skin-tone",
  "1f9d2-1f3fd": "child-medium-skin-tone",
  "1f6b8": "children-crossing",
  "1f43f": "chipmunk",
  "1f36b": "chocolate-bar",
  "1f962": "chopsticks",
  "1f384": "christmas-tree",
  "26ea": "church",
  "1f6ac": "cigarette",
  "1f3a6": "cinema",
  "24c2": "circled-m",
  "1f3aa": "circus-tent",
  "1f3d9": "cityscape",
  "1f306": "cityscape-at-dusk",
  "1f191": "cl-button",
  "1f5dc": "clamp",
  "1f3ac": "clapper-board",
  "1f44f": "clapping-hands",
  "1f44f-1f3ff": "clapping-hands-dark-skin-tone",
  "1f44f-1f3fb": "clapping-hands-light-skin-tone",
  "1f44f-1f3fe": "clapping-hands-medium-dark-skin-tone",
  "1f44f-1f3fc": "clapping-hands-medium-light-skin-tone",
  "1f44f-1f3fd": "clapping-hands-medium-skin-tone",
  "1f3db": "classical-building",
  "1f37b": "clinking-beer-mugs",
  "1f942": "clinking-glasses",
  "1f4cb": "clipboard",
  "1f503": "clockwise-vertical-arrows",
  "1f4d5": "closed-book",
  "1f4ea": "closed-mailbox-with-lowered-flag",
  "1f4eb": "closed-mailbox-with-raised-flag",
  "1f302": "closed-umbrella",
  "1f329": "cloud-with-lightning",
  "26c8": "cloud-with-lightning-and-rain",
  "1f327": "cloud-with-rain",
  "1f328": "cloud-with-snow",
  "1f921": "clown-face",
  "1f45d": "clutch-bag",
  "1f9e5": "coat",
  "1fab3": "cockroach",
  "1f378": "cocktail-glass",
  "1f965": "coconut",
  "26b0": "coffin",
  "1fa99": "coin",
  "1f976": "cold-face",
  "1f4a5": "collision",
  "1f9ed": "compass",
  "1f4bd": "computer-disk",
  "1f5b1": "computer-mouse",
  "1f38a": "confetti-ball",
  "1f616": "confounded-face",
  "1f615": "confused-face",
  "1f6a7": "construction",
  "1f477": "construction-worker",
  "1f477-1f3ff": "construction-worker-dark-skin-tone",
  "1f477-1f3fb": "construction-worker-light-skin-tone",
  "1f477-1f3fe": "construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc": "construction-worker-medium-light-skin-tone",
  "1f477-1f3fd": "construction-worker-medium-skin-tone",
  "1f39b": "control-knobs",
  "1f3ea": "convenience-store",
  "1f9d1-200d-1f373": "cook",
  "1f9d1-1f3ff-200d-1f373": "cook-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f373": "cook-light-skin-tone",
  "1f9d1-1f3fe-200d-1f373": "cook-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f373": "cook-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f373": "cook-medium-skin-tone",
  "1f35a": "cooked-rice",
  "1f36a": "cookie",
  "1f373": "cooking",
  "1f192": "cool-button",
  "00a9": "copyright",
  "1fab8": "coral",
  "1f6cb": "couch-and-lamp",
  "1f504": "counterclockwise-arrows-button",
  "1f491": "couple-with-heart",
  "1f491-1f3ff": "couple-with-heart-dark-skin-tone",
  "1f491-1f3fb": "couple-with-heart-light-skin-tone",
  "1f468-200d-2764-200d-1f468": "couple-with-heart-man-man",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-light-skin-tone-medium-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-light-skin-tone-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone",
  "1f491-1f3fe": "couple-with-heart-medium-dark-skin-tone",
  "1f491-1f3fc": "couple-with-heart-medium-light-skin-tone",
  "1f491-1f3fd": "couple-with-heart-medium-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f468": "couple-with-heart-woman-man",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f469": "couple-with-heart-woman-woman",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-skin-tone-medium-light-skin-tone",
  "1f404": "cow",
  "1f42e": "cow-face",
  "1f920": "cowboy-hat-face",
  "1f980": "crab",
  "1f58d": "crayon",
  "1f4b3": "credit-card",
  "1f319": "crescent-moon",
  "1f997": "cricket",
  "1f3cf": "cricket-game",
  "1f40a": "crocodile",
  "1f950": "croissant",
  "274c": "cross-mark",
  "274e": "cross-mark-button",
  "1f91e": "crossed-fingers",
  "1f91e-1f3ff": "crossed-fingers-dark-skin-tone",
  "1f91e-1f3fb": "crossed-fingers-light-skin-tone",
  "1f91e-1f3fe": "crossed-fingers-medium-dark-skin-tone",
  "1f91e-1f3fc": "crossed-fingers-medium-light-skin-tone",
  "1f91e-1f3fd": "crossed-fingers-medium-skin-tone",
  "1f38c": "crossed-flags",
  "1f451": "crown",
  "1fa7c": "crutch",
  "1f63f": "crying-cat",
  "1f622": "crying-face",
  "1f52e": "crystal-ball",
  "1f952": "cucumber",
  "1f964": "cup-with-straw",
  "1f9c1": "cupcake",
  "1f94c": "curling-stone",
  "27b0": "curly-loop",
  "1f4b1": "currency-exchange",
  "1f35b": "curry-rice",
  "1f36e": "custard",
  "1f6c3": "customs",
  "1f969": "cut-of-meat",
  "1f300": "cyclone",
  "1f5e1": "dagger",
  "1f361": "dango",
  "1f4a8": "dashing-away",
  "1f9cf-200d-2642": "deaf-man",
  "1f9cf-1f3ff-200d-2642": "deaf-man-dark-skin-tone",
  "1f9cf-1f3fb-200d-2642": "deaf-man-light-skin-tone",
  "1f9cf-1f3fe-200d-2642": "deaf-man-medium-dark-skin-tone",
  "1f9cf-1f3fc-200d-2642": "deaf-man-medium-light-skin-tone",
  "1f9cf-1f3fd-200d-2642": "deaf-man-medium-skin-tone",
  "1f9cf": "deaf-person",
  "1f9cf-1f3ff": "deaf-person-dark-skin-tone",
  "1f9cf-1f3fb": "deaf-person-light-skin-tone",
  "1f9cf-1f3fe": "deaf-person-medium-dark-skin-tone",
  "1f9cf-1f3fc": "deaf-person-medium-light-skin-tone",
  "1f9cf-1f3fd": "deaf-person-medium-skin-tone",
  "1f9cf-200d-2640": "deaf-woman",
  "1f9cf-1f3ff-200d-2640": "deaf-woman-dark-skin-tone",
  "1f9cf-1f3fb-200d-2640": "deaf-woman-light-skin-tone",
  "1f9cf-1f3fe-200d-2640": "deaf-woman-medium-dark-skin-tone",
  "1f9cf-1f3fc-200d-2640": "deaf-woman-medium-light-skin-tone",
  "1f9cf-1f3fd-200d-2640": "deaf-woman-medium-skin-tone",
  "1f333": "deciduous-tree",
  "1f98c": "deer",
  "1f69a": "delivery-truck",
  "1f3ec": "department-store",
  "1f3da": "derelict-house",
  "1f3dc": "desert",
  "1f3dd": "desert-island",
  "1f5a5": "desktop-computer",
  "1f575": "detective",
  "1f575-1f3ff": "detective-dark-skin-tone",
  "1f575-1f3fb": "detective-light-skin-tone",
  "1f575-1f3fe": "detective-medium-dark-skin-tone",
  "1f575-1f3fc": "detective-medium-light-skin-tone",
  "1f575-1f3fd": "detective-medium-skin-tone",
  "1f4a0": "diamond-with-a-dot",
  "1f505": "dim-button",
  "1f61e": "disappointed-face",
  "1f978": "disguised-face",
  "1f93f": "diving-mask",
  "1fa94": "diya-lamp",
  "1f4ab": "dizzy",
  "1f9ec": "dna",
  "1f9a4": "dodo",
  "1f415": "dog",
  "1f436": "dog-face",
  "1f4b5": "dollar-banknote",
  "1f42c": "dolphin",
  "1facf": "donkey",
  "1f6aa": "door",
  "1fae5": "dotted-line-face",
  "1f52f": "dotted-six-pointed-star",
  "27bf": "double-curly-loop",
  "203c": "double-exclamation-mark",
  "1f369": "doughnut",
  "1f54a": "dove",
  "2b07": "down-arrow",
  "1f613": "downcast-face-with-sweat",
  "1f53d": "downwards-button",
  "1f409": "dragon",
  "1f432": "dragon-face",
  "1f457": "dress",
  "1f924": "drooling-face",
  "1fa78": "drop-of-blood",
  "1f4a7": "droplet",
  "1f941": "drum",
  "1f986": "duck",
  "1f95f": "dumpling",
  "1f4c0": "dvd",
  "1f4e7": "e-mail",
  "1f985": "eagle",
  "1f442": "ear",
  "1f442-1f3ff": "ear-dark-skin-tone",
  "1f442-1f3fb": "ear-light-skin-tone",
  "1f442-1f3fe": "ear-medium-dark-skin-tone",
  "1f442-1f3fc": "ear-medium-light-skin-tone",
  "1f442-1f3fd": "ear-medium-skin-tone",
  "1f33d": "ear-of-corn",
  "1f9bb": "ear-with-hearing-aid",
  "1f9bb-1f3ff": "ear-with-hearing-aid-dark-skin-tone",
  "1f9bb-1f3fb": "ear-with-hearing-aid-light-skin-tone",
  "1f9bb-1f3fe": "ear-with-hearing-aid-medium-dark-skin-tone",
  "1f9bb-1f3fc": "ear-with-hearing-aid-medium-light-skin-tone",
  "1f9bb-1f3fd": "ear-with-hearing-aid-medium-skin-tone",
  "1f95a": "egg",
  "1f346": "eggplant",
  "1f557": "eight-oclock",
  "1f563": "eight-thirty",
  "23cf": "eject-button",
  "1f50c": "electric-plug",
  "1f418": "elephant",
  "1f6d7": "elevator",
  "1f55a": "eleven-oclock",
  "1f566": "eleven-thirty",
  "1f9dd": "elf",
  "1f9dd-1f3ff": "elf-dark-skin-tone",
  "1f9dd-1f3fb": "elf-light-skin-tone",
  "1f9dd-1f3fe": "elf-medium-dark-skin-tone",
  "1f9dd-1f3fc": "elf-medium-light-skin-tone",
  "1f9dd-1f3fd": "elf-medium-skin-tone",
  "1fab9": "empty-nest",
  "1f51a": "end-arrow",
  "1f621": "enraged-face",
  "1f4e9": "envelope-with-arrow",
  "1f4b6": "euro-banknote",
  "1f332": "evergreen-tree",
  "1f411": "ewe",
  "1f92f": "exploding-head",
  "1f611": "expressionless-face",
  "1f441": "eye",
  "1f441-200d-1f5e8": "eye-in-speech-bubble",
  "1f440": "eyes",
  "1f618": "face-blowing-a-kiss",
  "1f62e-200d-1f4a8": "face-exhaling",
  "1f979": "face-holding-back-tears",
  "1f636-200d-1f32b": "face-in-clouds",
  "1f60b": "face-savoring-food",
  "1f631": "face-screaming-in-fear",
  "1f92e": "face-vomiting",
  "1f635": "face-with-crossed-out-eyes",
  "1fae4": "face-with-diagonal-mouth",
  "1f92d": "face-with-hand-over-mouth",
  "1f915": "face-with-head-bandage",
  "1f637": "face-with-medical-mask",
  "1f9d0": "face-with-monocle",
  "1fae2": "face-with-open-eyes-and-hand-over-mouth",
  "1f62e": "face-with-open-mouth",
  "1fae3": "face-with-peeking-eye",
  "1f928": "face-with-raised-eyebrow",
  "1f644": "face-with-rolling-eyes",
  "1f635-200d-1f4ab": "face-with-spiral-eyes",
  "1f624": "face-with-steam-from-nose",
  "1f92c": "face-with-symbols-on-mouth",
  "1f602": "face-with-tears-of-joy",
  "1f912": "face-with-thermometer",
  "1f61b": "face-with-tongue",
  "1f636": "face-without-mouth",
  "1f3ed": "factory",
  "1f9d1-200d-1f3ed": "factory-worker",
  "1f9d1-1f3ff-200d-1f3ed": "factory-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3ed": "factory-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3ed": "factory-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3ed": "factory-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3ed": "factory-worker-medium-skin-tone",
  "1f9da": "fairy",
  "1f9da-1f3ff": "fairy-dark-skin-tone",
  "1f9da-1f3fb": "fairy-light-skin-tone",
  "1f9da-1f3fe": "fairy-medium-dark-skin-tone",
  "1f9da-1f3fc": "fairy-medium-light-skin-tone",
  "1f9da-1f3fd": "fairy-medium-skin-tone",
  "1f9c6": "falafel",
  "1f342": "fallen-leaf",
  "1f46a": "family",
  "1f9d1-200d-1f9d1-200d-1f9d2": "family-adult-adult-child",
  "1f9d1-200d-1f9d1-200d-1f9d2-200d-1f9d2": "family-adult-adult-child-child",
  "1f9d1-200d-1f9d2": "family-adult-child",
  "1f9d1-200d-1f9d2-200d-1f9d2": "family-adult-child-child",
  "1f468-200d-1f466": "family-man-boy",
  "1f468-200d-1f466-200d-1f466": "family-man-boy-boy",
  "1f468-200d-1f467": "family-man-girl",
  "1f468-200d-1f467-200d-1f466": "family-man-girl-boy",
  "1f468-200d-1f467-200d-1f467": "family-man-girl-girl",
  "1f468-200d-1f468-200d-1f466": "family-man-man-boy",
  "1f468-200d-1f468-200d-1f466-200d-1f466": "family-man-man-boy-boy",
  "1f468-200d-1f468-200d-1f467": "family-man-man-girl",
  "1f468-200d-1f468-200d-1f467-200d-1f466": "family-man-man-girl-boy",
  "1f468-200d-1f468-200d-1f467-200d-1f467": "family-man-man-girl-girl",
  "1f468-200d-1f469-200d-1f466": "family-man-woman-boy",
  "1f468-200d-1f469-200d-1f466-200d-1f466": "family-man-woman-boy-boy",
  "1f468-200d-1f469-200d-1f467": "family-man-woman-girl",
  "1f468-200d-1f469-200d-1f467-200d-1f466": "family-man-woman-girl-boy",
  "1f468-200d-1f469-200d-1f467-200d-1f467": "family-man-woman-girl-girl",
  "1f469-200d-1f466": "family-woman-boy",
  "1f469-200d-1f466-200d-1f466": "family-woman-boy-boy",
  "1f469-200d-1f467": "family-woman-girl",
  "1f469-200d-1f467-200d-1f466": "family-woman-girl-boy",
  "1f469-200d-1f467-200d-1f467": "family-woman-girl-girl",
  "1f469-200d-1f469-200d-1f466": "family-woman-woman-boy",
  "1f469-200d-1f469-200d-1f466-200d-1f466": "family-woman-woman-boy-boy",
  "1f469-200d-1f469-200d-1f467": "family-woman-woman-girl",
  "1f469-200d-1f469-200d-1f467-200d-1f466": "family-woman-woman-girl-boy",
  "1f469-200d-1f469-200d-1f467-200d-1f467": "family-woman-woman-girl-girl",
  "1f9d1-200d-1f33e": "farmer",
  "1f9d1-1f3ff-200d-1f33e": "farmer-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f33e": "farmer-light-skin-tone",
  "1f9d1-1f3fe-200d-1f33e": "farmer-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f33e": "farmer-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f33e": "farmer-medium-skin-tone",
  "23ec": "fast-down-button",
  "23e9": "fast-forward-button",
  "23ea": "fast-reverse-button",
  "23eb": "fast-up-button",
  "1f4e0": "fax-machine",
  "1f628": "fearful-face",
  "1fab6": "feather",
  "1f3a1": "ferris-wheel",
  "26f4": "ferry",
  "1f3d1": "field-hockey",
  "1f5c4": "file-cabinet",
  "1f4c1": "file-folder",
  "1f39e": "film-frames",
  "1f4fd": "film-projector",
  "1f525": "fire",
  "1f692": "fire-engine",
  "1f9ef": "fire-extinguisher",
  "1f9e8": "firecracker",
  "1f9d1-200d-1f692": "firefighter",
  "1f9d1-1f3ff-200d-1f692": "firefighter-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f692": "firefighter-light-skin-tone",
  "1f9d1-1f3fe-200d-1f692": "firefighter-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f692": "firefighter-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f692": "firefighter-medium-skin-tone",
  "1f386": "fireworks",
  "1f313": "first-quarter-moon",
  "1f31b": "first-quarter-moon-face",
  "1f41f": "fish",
  "1f365": "fish-cake-with-swirl",
  "1f3a3": "fishing-pole",
  "1f554": "five-oclock",
  "1f560": "five-thirty",
  "26f3": "flag-in-hole",
  "1f9a9": "flamingo",
  "1f526": "flashlight",
  "1f97f": "flat-shoe",
  "1fad3": "flatbread",
  "269c": "fleur-de-lis",
  "1f4aa": "flexed-biceps",
  "1f4aa-1f3ff": "flexed-biceps-dark-skin-tone",
  "1f4aa-1f3fb": "flexed-biceps-light-skin-tone",
  "1f4aa-1f3fe": "flexed-biceps-medium-dark-skin-tone",
  "1f4aa-1f3fc": "flexed-biceps-medium-light-skin-tone",
  "1f4aa-1f3fd": "flexed-biceps-medium-skin-tone",
  "1f4be": "floppy-disk",
  "1f3b4": "flower-playing-cards",
  "1f633": "flushed-face",
  "1fa88": "flute",
  "1fab0": "fly",
  "1f94f": "flying-disc",
  "1f6f8": "flying-saucer",
  "1f32b": "fog",
  "1f301": "foggy",
  "1f64f": "folded-hands",
  "1f64f-1f3ff": "folded-hands-dark-skin-tone",
  "1f64f-1f3fb": "folded-hands-light-skin-tone",
  "1f64f-1f3fe": "folded-hands-medium-dark-skin-tone",
  "1f64f-1f3fc": "folded-hands-medium-light-skin-tone",
  "1f64f-1f3fd": "folded-hands-medium-skin-tone",
  "1faad": "folding-hand-fan",
  "1fad5": "fondue",
  "1f9b6": "foot",
  "1f9b6-1f3ff": "foot-dark-skin-tone",
  "1f9b6-1f3fb": "foot-light-skin-tone",
  "1f9b6-1f3fe": "foot-medium-dark-skin-tone",
  "1f9b6-1f3fc": "foot-medium-light-skin-tone",
  "1f9b6-1f3fd": "foot-medium-skin-tone",
  "1f463": "footprints",
  "1f374": "fork-and-knife",
  "1f37d": "fork-and-knife-with-plate",
  "1f960": "fortune-cookie",
  "26f2": "fountain",
  "1f58b": "fountain-pen",
  "1f340": "four-leaf-clover",
  "1f553": "four-oclock",
  "1f55f": "four-thirty",
  "1f98a": "fox",
  "1f5bc": "framed-picture",
  "1f193": "free-button",
  "1f35f": "french-fries",
  "1f364": "fried-shrimp",
  "1f438": "frog",
  "1f425": "front-facing-baby-chick",
  "1f626": "frowning-face-with-open-mouth",
  "26fd": "fuel-pump",
  "1f315": "full-moon",
  "1f31d": "full-moon-face",
  "26b1": "funeral-urn",
  "1f3b2": "game-die",
  "1f9c4": "garlic",
  "1f48e": "gem-stone",
  "264a": "gemini",
  "1f9de": "genie",
  "1f47b": "ghost",
  "1fada": "ginger-root",
  "1f992": "giraffe",
  "1f467": "girl",
  "1f467-1f3ff": "girl-dark-skin-tone",
  "1f467-1f3fb": "girl-light-skin-tone",
  "1f467-1f3fe": "girl-medium-dark-skin-tone",
  "1f467-1f3fc": "girl-medium-light-skin-tone",
  "1f467-1f3fd": "girl-medium-skin-tone",
  "1f95b": "glass-of-milk",
  "1f453": "glasses",
  "1f30e": "globe-showing-americas",
  "1f30f": "globe-showing-asia-australia",
  "1f30d": "globe-showing-europe-africa",
  "1f310": "globe-with-meridians",
  "1f9e4": "gloves",
  "1f31f": "glowing-star",
  "1f945": "goal-net",
  "1f410": "goat",
  "1f47a": "goblin",
  "1f97d": "goggles",
  "1fabf": "goose",
  "1f98d": "gorilla",
  "1f393": "graduation-cap",
  "1f347": "grapes",
  "1f34f": "green-apple",
  "1f4d7": "green-book",
  "1f7e2": "green-circle",
  "1f49a": "green-heart",
  "1f957": "green-salad",
  "1f7e9": "green-square",
  "1fa76": "grey-heart",
  "1f62c": "grimacing-face",
  "1f63a": "grinning-cat",
  "1f638": "grinning-cat-with-smiling-eyes",
  "1f600": "grinning-face",
  "1f603": "grinning-face-with-big-eyes",
  "1f604": "grinning-face-with-smiling-eyes",
  "1f605": "grinning-face-with-sweat",
  "1f606": "grinning-squinting-face",
  "1f497": "growing-heart",
  "1f482": "guard",
  "1f482-1f3ff": "guard-dark-skin-tone",
  "1f482-1f3fb": "guard-light-skin-tone",
  "1f482-1f3fe": "guard-medium-dark-skin-tone",
  "1f482-1f3fc": "guard-medium-light-skin-tone",
  "1f482-1f3fd": "guard-medium-skin-tone",
  "1f9ae": "guide-dog",
  "1f3b8": "guitar",
  "1faae": "hair-pick",
  "1f354": "hamburger",
  "1f528": "hammer",
  "1f6e0": "hammer-and-wrench",
  "1faac": "hamsa",
  "1f439": "hamster",
  "1f590": "hand-with-fingers-splayed",
  "1f590-1f3ff": "hand-with-fingers-splayed-dark-skin-tone",
  "1f590-1f3fb": "hand-with-fingers-splayed-light-skin-tone",
  "1f590-1f3fe": "hand-with-fingers-splayed-medium-dark-skin-tone",
  "1f590-1f3fc": "hand-with-fingers-splayed-medium-light-skin-tone",
  "1f590-1f3fd": "hand-with-fingers-splayed-medium-skin-tone",
  "1faf0": "hand-with-index-finger-and-thumb-crossed",
  "1faf0-1f3ff": "hand-with-index-finger-and-thumb-crossed-dark-skin-tone",
  "1faf0-1f3fb": "hand-with-index-finger-and-thumb-crossed-light-skin-tone",
  "1faf0-1f3fe": "hand-with-index-finger-and-thumb-crossed-medium-dark-skin-tone",
  "1faf0-1f3fc": "hand-with-index-finger-and-thumb-crossed-medium-light-skin-tone",
  "1faf0-1f3fd": "hand-with-index-finger-and-thumb-crossed-medium-skin-tone",
  "1f45c": "handbag",
  "1f91d": "handshake",
  "1f91d-1f3ff": "handshake-dark-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fb": "handshake-dark-skin-tone-light-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fe": "handshake-dark-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fc": "handshake-dark-skin-tone-medium-light-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fd": "handshake-dark-skin-tone-medium-skin-tone",
  "1f91d-1f3fb": "handshake-light-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3ff": "handshake-light-skin-tone-dark-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fe": "handshake-light-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fc": "handshake-light-skin-tone-medium-light-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fd": "handshake-light-skin-tone-medium-skin-tone",
  "1f91d-1f3fe": "handshake-medium-dark-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3ff": "handshake-medium-dark-skin-tone-dark-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fb": "handshake-medium-dark-skin-tone-light-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fc": "handshake-medium-dark-skin-tone-medium-light-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fd": "handshake-medium-dark-skin-tone-medium-skin-tone",
  "1f91d-1f3fc": "handshake-medium-light-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3ff": "handshake-medium-light-skin-tone-dark-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fb": "handshake-medium-light-skin-tone-light-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fe": "handshake-medium-light-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fd": "handshake-medium-light-skin-tone-medium-skin-tone",
  "1f91d-1f3fd": "handshake-medium-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3ff": "handshake-medium-skin-tone-dark-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fb": "handshake-medium-skin-tone-light-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fe": "handshake-medium-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fc": "handshake-medium-skin-tone-medium-light-skin-tone",
  "1f423": "hatching-chick",
  "1f642-200d-2194": "head-shaking-horizontally",
  "1f642-200d-2195": "head-shaking-vertically",
  "1f3a7": "headphone",
  "1faa6": "headstone",
  "1f9d1-200d-2695": "health-worker",
  "1f9d1-1f3ff-200d-2695": "health-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-2695": "health-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-2695": "health-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2695": "health-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2695": "health-worker-medium-skin-tone",
  "1f649": "hear-no-evil-monkey",
  "1f49f": "heart-decoration",
  "1faf6": "heart-hands",
  "1faf6-1f3ff": "heart-hands-dark-skin-tone",
  "1faf6-1f3fb": "heart-hands-light-skin-tone",
  "1faf6-1f3fe": "heart-hands-medium-dark-skin-tone",
  "1faf6-1f3fc": "heart-hands-medium-light-skin-tone",
  "1faf6-1f3fd": "heart-hands-medium-skin-tone",
  "2764-200d-1f525": "heart-on-fire",
  "1f498": "heart-with-arrow",
  "1f49d": "heart-with-ribbon",
  "1f4b2": "heavy-dollar-sign",
  "1f7f0": "heavy-equals-sign",
  "1f994": "hedgehog",
  "1f681": "helicopter",
  "1f33f": "herb",
  "1f33a": "hibiscus",
  "1f460": "high-heeled-shoe",
  "1f684": "high-speed-train",
  "26a1": "high-voltage",
  "1f97e": "hiking-boot",
  "1f6d5": "hindu-temple",
  "1f99b": "hippopotamus",
  "1f573": "hole",
  "2b55": "hollow-red-circle",
  "1f36f": "honey-pot",
  "1f41d": "honeybee",
  "1fa9d": "hook",
  "1f6a5": "horizontal-traffic-light",
  "1f40e": "horse",
  "1f434": "horse-face",
  "1f3c7": "horse-racing",
  "1f3c7-1f3ff": "horse-racing-dark-skin-tone",
  "1f3c7-1f3fb": "horse-racing-light-skin-tone",
  "1f3c7-1f3fe": "horse-racing-medium-dark-skin-tone",
  "1f3c7-1f3fc": "horse-racing-medium-light-skin-tone",
  "1f3c7-1f3fd": "horse-racing-medium-skin-tone",
  "1f3e5": "hospital",
  "1f32d": "hot-dog",
  "1f975": "hot-face",
  "1f336": "hot-pepper",
  "1f3e8": "hotel",
  "231b": "hourglass-done",
  "23f3": "hourglass-not-done",
  "1f3e0": "house",
  "1f3e1": "house-with-garden",
  "1f3d8": "houses",
  "1f4af": "hundred-points",
  "1f62f": "hushed-face",
  "1f6d6": "hut",
  "1fabb": "hyacinth",
  "1f9ca": "ice",
  "1f368": "ice-cream",
  "1f3d2": "ice-hockey",
  "26f8": "ice-skate",
  "1f194": "id-button",
  "1faaa": "identification-card",
  "1f4e5": "inbox-tray",
  "1f4e8": "incoming-envelope",
  "1faf5": "index-pointing-at-the-viewer",
  "1faf5-1f3ff": "index-pointing-at-the-viewer-dark-skin-tone",
  "1faf5-1f3fb": "index-pointing-at-the-viewer-light-skin-tone",
  "1faf5-1f3fe": "index-pointing-at-the-viewer-medium-dark-skin-tone",
  "1faf5-1f3fc": "index-pointing-at-the-viewer-medium-light-skin-tone",
  "1faf5-1f3fd": "index-pointing-at-the-viewer-medium-skin-tone",
  "261d": "index-pointing-up",
  "261d-1f3ff": "index-pointing-up-dark-skin-tone",
  "261d-1f3fb": "index-pointing-up-light-skin-tone",
  "261d-1f3fe": "index-pointing-up-medium-dark-skin-tone",
  "261d-1f3fc": "index-pointing-up-medium-light-skin-tone",
  "261d-1f3fd": "index-pointing-up-medium-skin-tone",
  "267e": "infinity",
  "1f524": "input-latin-letters",
  "1f521": "input-latin-lowercase",
  "1f520": "input-latin-uppercase",
  "1f522": "input-numbers",
  "1f523": "input-symbols",
  "1f383": "jack-o-lantern",
  "1f251": "japanese-acceptable-button",
  "1f238": "japanese-application-button",
  "1f250": "japanese-bargain-button",
  "1f3ef": "japanese-castle",
  "1f239": "japanese-discount-button",
  "1f38e": "japanese-dolls",
  "1f21a": "japanese-free-of-charge-button",
  "1f201": "japanese-here-button",
  "1f237": "japanese-monthly-amount-button",
  "1f235": "japanese-no-vacancy-button",
  "1f236": "japanese-not-free-of-charge-button",
  "1f23a": "japanese-open-for-business-button",
  "1f234": "japanese-passing-grade-button",
  "1f3e3": "japanese-post-office",
  "1f232": "japanese-prohibited-button",
  "1f22f": "japanese-reserved-button",
  "1f202": "japanese-service-charge-button",
  "1f530": "japanese-symbol-for-beginner",
  "1f233": "japanese-vacancy-button",
  "1fad9": "jar",
  "1f456": "jeans",
  "1fabc": "jellyfish",
  "1f0cf": "joker",
  "1f579": "joystick",
  "1f9d1-200d-2696": "judge",
  "1f9d1-1f3ff-200d-2696": "judge-dark-skin-tone",
  "1f9d1-1f3fb-200d-2696": "judge-light-skin-tone",
  "1f9d1-1f3fe-200d-2696": "judge-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2696": "judge-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2696": "judge-medium-skin-tone",
  "1f54b": "kaaba",
  "1f998": "kangaroo",
  "1f511": "key",
  "20e3": "keycap",
  "0030-20e3": "keycap-0",
  "0031-20e3": "keycap-1",
  "1f51f": "keycap-10",
  "0032-20e3": "keycap-2",
  "0033-20e3": "keycap-3",
  "0034-20e3": "keycap-4",
  "0035-20e3": "keycap-5",
  "0036-20e3": "keycap-6",
  "0037-20e3": "keycap-7",
  "0038-20e3": "keycap-8",
  "0039-20e3": "keycap-9",
  "002a-20e3": "keycap-asterisk",
  "0023-20e3": "keycap-pound",
  "1faaf": "khanda",
  "1f6f4": "kick-scooter",
  "1f458": "kimono",
  "1f48f": "kiss",
  "1f48f-1f3ff": "kiss-dark-skin-tone",
  "1f48f-1f3fb": "kiss-light-skin-tone",
  "1f468-200d-2764-200d-1f48b-200d-1f468": "kiss-man-man",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-light-skin-tone-medium-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-light-skin-tone-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-skin-tone-medium-light-skin-tone",
  "1f48b": "kiss-mark",
  "1f48f-1f3fe": "kiss-medium-dark-skin-tone",
  "1f48f-1f3fc": "kiss-medium-light-skin-tone",
  "1f48f-1f3fd": "kiss-medium-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f48b-200d-1f468": "kiss-woman-man",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f48b-200d-1f469": "kiss-woman-woman",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-skin-tone-medium-light-skin-tone",
  "1f63d": "kissing-cat",
  "1f617": "kissing-face",
  "1f61a": "kissing-face-with-closed-eyes",
  "1f619": "kissing-face-with-smiling-eyes",
  "1f52a": "kitchen-knife",
  "1fa81": "kite",
  "1f95d": "kiwi-fruit",
  "1faa2": "knot",
  "1f428": "koala",
  "1f97c": "lab-coat",
  "1f3f7": "label",
  "1f94d": "lacrosse",
  "1fa9c": "ladder",
  "1f41e": "lady-beetle",
  "1f4bb": "laptop",
  "1f537": "large-blue-diamond",
  "1f536": "large-orange-diamond",
  "1f317": "last-quarter-moon",
  "1f31c": "last-quarter-moon-face",
  "23ee": "last-track-button",
  "271d": "latin-cross",
  "1f343": "leaf-fluttering-in-wind",
  "1f96c": "leafy-green",
  "1f4d2": "ledger",
  "2b05": "left-arrow",
  "21aa": "left-arrow-curving-right",
  "1f91b": "left-facing-fist",
  "1f91b-1f3ff": "left-facing-fist-dark-skin-tone",
  "1f91b-1f3fb": "left-facing-fist-light-skin-tone",
  "1f91b-1f3fe": "left-facing-fist-medium-dark-skin-tone",
  "1f91b-1f3fc": "left-facing-fist-medium-light-skin-tone",
  "1f91b-1f3fd": "left-facing-fist-medium-skin-tone",
  "1f6c5": "left-luggage",
  "1f5e8": "left-speech-bubble",
  "1faf2": "leftwards-hand",
  "1faf2-1f3ff": "leftwards-hand-dark-skin-tone",
  "1faf2-1f3fb": "leftwards-hand-light-skin-tone",
  "1faf2-1f3fe": "leftwards-hand-medium-dark-skin-tone",
  "1faf2-1f3fc": "leftwards-hand-medium-light-skin-tone",
  "1faf2-1f3fd": "leftwards-hand-medium-skin-tone",
  "1faf7": "leftwards-pushing-hand",
  "1faf7-1f3ff": "leftwards-pushing-hand-dark-skin-tone",
  "1faf7-1f3fb": "leftwards-pushing-hand-light-skin-tone",
  "1faf7-1f3fe": "leftwards-pushing-hand-medium-dark-skin-tone",
  "1faf7-1f3fc": "leftwards-pushing-hand-medium-light-skin-tone",
  "1faf7-1f3fd": "leftwards-pushing-hand-medium-skin-tone",
  "1f9b5": "leg",
  "1f9b5-1f3ff": "leg-dark-skin-tone",
  "1f9b5-1f3fb": "leg-light-skin-tone",
  "1f9b5-1f3fe": "leg-medium-dark-skin-tone",
  "1f9b5-1f3fc": "leg-medium-light-skin-tone",
  "1f9b5-1f3fd": "leg-medium-skin-tone",
  "1f34b": "lemon",
  "264c": "leo",
  "1f406": "leopard",
  "1f1e6": "letter-a",
  "1f1e7": "letter-b",
  "1f1e8": "letter-c",
  "1f1e9": "letter-d",
  "1f1ea": "letter-e",
  "1f1eb": "letter-f",
  "1f1ec": "letter-g",
  "1f1ed": "letter-h",
  "1f1ee": "letter-i",
  "1f1ef": "letter-j",
  "1f1f0": "letter-k",
  "1f1f1": "letter-l",
  "1f1f2": "letter-m",
  "1f1f3": "letter-n",
  "1f1f4": "letter-o",
  "1f1f5": "letter-p",
  "1f1f6": "letter-q",
  "1f1f7": "letter-r",
  "1f1f8": "letter-s",
  "1f1f9": "letter-t",
  "1f1fa": "letter-u",
  "1f1fb": "letter-v",
  "1f1fc": "letter-w",
  "1f1fd": "letter-x",
  "1f1fe": "letter-y",
  "1f1ff": "letter-z",
  "1f39a": "level-slider",
  "264e": "libra",
  "1fa75": "light-blue-heart",
  "1f4a1": "light-bulb",
  "1f688": "light-rail",
  "1f34b-200d-1f7e9": "lime",
  "1f517": "link",
  "1f587": "linked-paperclips",
  "1f981": "lion",
  "1f484": "lipstick",
  "1f6ae": "litter-in-bin-sign",
  "1f98e": "lizard",
  "1f999": "llama",
  "1f99e": "lobster",
  "1f512": "locked",
  "1f510": "locked-with-key",
  "1f50f": "locked-with-pen",
  "1f682": "locomotive",
  "1f36d": "lollipop",
  "1fa98": "long-drum",
  "1f9f4": "lotion-bottle",
  "1fab7": "lotus",
  "1f62d": "loudly-crying-face",
  "1f4e2": "loudspeaker",
  "1f3e9": "love-hotel",
  "1f48c": "love-letter",
  "1f91f": "love-you-gesture",
  "1f91f-1f3ff": "love-you-gesture-dark-skin-tone",
  "1f91f-1f3fb": "love-you-gesture-light-skin-tone",
  "1f91f-1f3fe": "love-you-gesture-medium-dark-skin-tone",
  "1f91f-1f3fc": "love-you-gesture-medium-light-skin-tone",
  "1f91f-1f3fd": "love-you-gesture-medium-skin-tone",
  "1faab": "low-battery",
  "1f9f3": "luggage",
  "1fac1": "lungs",
  "1f925": "lying-face",
  "1f9d9": "mage",
  "1f9d9-1f3ff": "mage-dark-skin-tone",
  "1f9d9-1f3fb": "mage-light-skin-tone",
  "1f9d9-1f3fe": "mage-medium-dark-skin-tone",
  "1f9d9-1f3fc": "mage-medium-light-skin-tone",
  "1f9d9-1f3fd": "mage-medium-skin-tone",
  "1fa84": "magic-wand",
  "1f9f2": "magnet",
  "1f50d": "magnifying-glass-tilted-left",
  "1f50e": "magnifying-glass-tilted-right",
  "1f004": "mahjong-red-dragon",
  "1f9a3": "mammoth",
  "1f468": "man",
  "1f468-200d-1f3a8": "man-artist",
  "1f468-1f3ff-200d-1f3a8": "man-artist-dark-skin-tone",
  "1f468-1f3fb-200d-1f3a8": "man-artist-light-skin-tone",
  "1f468-1f3fe-200d-1f3a8": "man-artist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3a8": "man-artist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3a8": "man-artist-medium-skin-tone",
  "1f468-200d-1f680": "man-astronaut",
  "1f468-1f3ff-200d-1f680": "man-astronaut-dark-skin-tone",
  "1f468-1f3fb-200d-1f680": "man-astronaut-light-skin-tone",
  "1f468-1f3fe-200d-1f680": "man-astronaut-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f680": "man-astronaut-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f680": "man-astronaut-medium-skin-tone",
  "1f468-200d-1f9b2": "man-bald",
  "1f9d4-200d-2642": "man-beard",
  "1f6b4-200d-2642": "man-biking",
  "1f6b4-1f3ff-200d-2642": "man-biking-dark-skin-tone",
  "1f6b4-1f3fb-200d-2642": "man-biking-light-skin-tone",
  "1f6b4-1f3fe-200d-2642": "man-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc-200d-2642": "man-biking-medium-light-skin-tone",
  "1f6b4-1f3fd-200d-2642": "man-biking-medium-skin-tone",
  "1f471-200d-2642": "man-blond-hair",
  "26f9-200d-2642": "man-bouncing-ball",
  "26f9-1f3ff-200d-2642": "man-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb-200d-2642": "man-bouncing-ball-light-skin-tone",
  "26f9-1f3fe-200d-2642": "man-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc-200d-2642": "man-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd-200d-2642": "man-bouncing-ball-medium-skin-tone",
  "1f647-200d-2642": "man-bowing",
  "1f647-1f3ff-200d-2642": "man-bowing-dark-skin-tone",
  "1f647-1f3fb-200d-2642": "man-bowing-light-skin-tone",
  "1f647-1f3fe-200d-2642": "man-bowing-medium-dark-skin-tone",
  "1f647-1f3fc-200d-2642": "man-bowing-medium-light-skin-tone",
  "1f647-1f3fd-200d-2642": "man-bowing-medium-skin-tone",
  "1f938-200d-2642": "man-cartwheeling",
  "1f938-1f3ff-200d-2642": "man-cartwheeling-dark-skin-tone",
  "1f938-1f3fb-200d-2642": "man-cartwheeling-light-skin-tone",
  "1f938-1f3fe-200d-2642": "man-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc-200d-2642": "man-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd-200d-2642": "man-cartwheeling-medium-skin-tone",
  "1f9d7-200d-2642": "man-climbing",
  "1f9d7-1f3ff-200d-2642": "man-climbing-dark-skin-tone",
  "1f9d7-1f3fb-200d-2642": "man-climbing-light-skin-tone",
  "1f9d7-1f3fe-200d-2642": "man-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc-200d-2642": "man-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd-200d-2642": "man-climbing-medium-skin-tone",
  "1f477-200d-2642": "man-construction-worker",
  "1f477-1f3ff-200d-2642": "man-construction-worker-dark-skin-tone",
  "1f477-1f3fb-200d-2642": "man-construction-worker-light-skin-tone",
  "1f477-1f3fe-200d-2642": "man-construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc-200d-2642": "man-construction-worker-medium-light-skin-tone",
  "1f477-1f3fd-200d-2642": "man-construction-worker-medium-skin-tone",
  "1f468-200d-1f373": "man-cook",
  "1f468-1f3ff-200d-1f373": "man-cook-dark-skin-tone",
  "1f468-1f3fb-200d-1f373": "man-cook-light-skin-tone",
  "1f468-1f3fe-200d-1f373": "man-cook-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f373": "man-cook-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f373": "man-cook-medium-skin-tone",
  "1f468-200d-1f9b1": "man-curly-hair",
  "1f57a": "man-dancing",
  "1f57a-1f3ff": "man-dancing-dark-skin-tone",
  "1f57a-1f3fb": "man-dancing-light-skin-tone",
  "1f57a-1f3fe": "man-dancing-medium-dark-skin-tone",
  "1f57a-1f3fc": "man-dancing-medium-light-skin-tone",
  "1f57a-1f3fd": "man-dancing-medium-skin-tone",
  "1f468-1f3ff": "man-dark-skin-tone",
  "1f468-1f3ff-200d-1f9b2": "man-dark-skin-tone-bald",
  "1f9d4-1f3ff-200d-2642": "man-dark-skin-tone-beard",
  "1f471-1f3ff-200d-2642": "man-dark-skin-tone-blond-hair",
  "1f468-1f3ff-200d-1f9b1": "man-dark-skin-tone-curly-hair",
  "1f468-1f3ff-200d-1f9b0": "man-dark-skin-tone-red-hair",
  "1f468-1f3ff-200d-1f9b3": "man-dark-skin-tone-white-hair",
  "1f575-200d-2642": "man-detective",
  "1f575-1f3ff-200d-2642": "man-detective-dark-skin-tone",
  "1f575-1f3fb-200d-2642": "man-detective-light-skin-tone",
  "1f575-1f3fe-200d-2642": "man-detective-medium-dark-skin-tone",
  "1f575-1f3fc-200d-2642": "man-detective-medium-light-skin-tone",
  "1f575-1f3fd-200d-2642": "man-detective-medium-skin-tone",
  "1f9dd-200d-2642": "man-elf",
  "1f9dd-1f3ff-200d-2642": "man-elf-dark-skin-tone",
  "1f9dd-1f3fb-200d-2642": "man-elf-light-skin-tone",
  "1f9dd-1f3fe-200d-2642": "man-elf-medium-dark-skin-tone",
  "1f9dd-1f3fc-200d-2642": "man-elf-medium-light-skin-tone",
  "1f9dd-1f3fd-200d-2642": "man-elf-medium-skin-tone",
  "1f926-200d-2642": "man-facepalming",
  "1f926-1f3ff-200d-2642": "man-facepalming-dark-skin-tone",
  "1f926-1f3fb-200d-2642": "man-facepalming-light-skin-tone",
  "1f926-1f3fe-200d-2642": "man-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc-200d-2642": "man-facepalming-medium-light-skin-tone",
  "1f926-1f3fd-200d-2642": "man-facepalming-medium-skin-tone",
  "1f468-200d-1f3ed": "man-factory-worker",
  "1f468-1f3ff-200d-1f3ed": "man-factory-worker-dark-skin-tone",
  "1f468-1f3fb-200d-1f3ed": "man-factory-worker-light-skin-tone",
  "1f468-1f3fe-200d-1f3ed": "man-factory-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3ed": "man-factory-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3ed": "man-factory-worker-medium-skin-tone",
  "1f9da-200d-2642": "man-fairy",
  "1f9da-1f3ff-200d-2642": "man-fairy-dark-skin-tone",
  "1f9da-1f3fb-200d-2642": "man-fairy-light-skin-tone",
  "1f9da-1f3fe-200d-2642": "man-fairy-medium-dark-skin-tone",
  "1f9da-1f3fc-200d-2642": "man-fairy-medium-light-skin-tone",
  "1f9da-1f3fd-200d-2642": "man-fairy-medium-skin-tone",
  "1f468-200d-1f33e": "man-farmer",
  "1f468-1f3ff-200d-1f33e": "man-farmer-dark-skin-tone",
  "1f468-1f3fb-200d-1f33e": "man-farmer-light-skin-tone",
  "1f468-1f3fe-200d-1f33e": "man-farmer-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f33e": "man-farmer-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f33e": "man-farmer-medium-skin-tone",
  "1f468-200d-1f37c": "man-feeding-baby",
  "1f468-1f3ff-200d-1f37c": "man-feeding-baby-dark-skin-tone",
  "1f468-1f3fb-200d-1f37c": "man-feeding-baby-light-skin-tone",
  "1f468-1f3fe-200d-1f37c": "man-feeding-baby-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f37c": "man-feeding-baby-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f37c": "man-feeding-baby-medium-skin-tone",
  "1f468-200d-1f692": "man-firefighter",
  "1f468-1f3ff-200d-1f692": "man-firefighter-dark-skin-tone",
  "1f468-1f3fb-200d-1f692": "man-firefighter-light-skin-tone",
  "1f468-1f3fe-200d-1f692": "man-firefighter-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f692": "man-firefighter-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f692": "man-firefighter-medium-skin-tone",
  "1f64d-200d-2642": "man-frowning",
  "1f64d-1f3ff-200d-2642": "man-frowning-dark-skin-tone",
  "1f64d-1f3fb-200d-2642": "man-frowning-light-skin-tone",
  "1f64d-1f3fe-200d-2642": "man-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc-200d-2642": "man-frowning-medium-light-skin-tone",
  "1f64d-1f3fd-200d-2642": "man-frowning-medium-skin-tone",
  "1f9de-200d-2642": "man-genie",
  "1f645-200d-2642": "man-gesturing-no",
  "1f645-1f3ff-200d-2642": "man-gesturing-no-dark-skin-tone",
  "1f645-1f3fb-200d-2642": "man-gesturing-no-light-skin-tone",
  "1f645-1f3fe-200d-2642": "man-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc-200d-2642": "man-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd-200d-2642": "man-gesturing-no-medium-skin-tone",
  "1f646-200d-2642": "man-gesturing-ok",
  "1f646-1f3ff-200d-2642": "man-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb-200d-2642": "man-gesturing-ok-light-skin-tone",
  "1f646-1f3fe-200d-2642": "man-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc-200d-2642": "man-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd-200d-2642": "man-gesturing-ok-medium-skin-tone",
  "1f487-200d-2642": "man-getting-haircut",
  "1f487-1f3ff-200d-2642": "man-getting-haircut-dark-skin-tone",
  "1f487-1f3fb-200d-2642": "man-getting-haircut-light-skin-tone",
  "1f487-1f3fe-200d-2642": "man-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc-200d-2642": "man-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd-200d-2642": "man-getting-haircut-medium-skin-tone",
  "1f486-200d-2642": "man-getting-massage",
  "1f486-1f3ff-200d-2642": "man-getting-massage-dark-skin-tone",
  "1f486-1f3fb-200d-2642": "man-getting-massage-light-skin-tone",
  "1f486-1f3fe-200d-2642": "man-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc-200d-2642": "man-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd-200d-2642": "man-getting-massage-medium-skin-tone",
  "1f3cc-200d-2642": "man-golfing",
  "1f3cc-1f3ff-200d-2642": "man-golfing-dark-skin-tone",
  "1f3cc-1f3fb-200d-2642": "man-golfing-light-skin-tone",
  "1f3cc-1f3fe-200d-2642": "man-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc-200d-2642": "man-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd-200d-2642": "man-golfing-medium-skin-tone",
  "1f482-200d-2642": "man-guard",
  "1f482-1f3ff-200d-2642": "man-guard-dark-skin-tone",
  "1f482-1f3fb-200d-2642": "man-guard-light-skin-tone",
  "1f482-1f3fe-200d-2642": "man-guard-medium-dark-skin-tone",
  "1f482-1f3fc-200d-2642": "man-guard-medium-light-skin-tone",
  "1f482-1f3fd-200d-2642": "man-guard-medium-skin-tone",
  "1f468-200d-2695": "man-health-worker",
  "1f468-1f3ff-200d-2695": "man-health-worker-dark-skin-tone",
  "1f468-1f3fb-200d-2695": "man-health-worker-light-skin-tone",
  "1f468-1f3fe-200d-2695": "man-health-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2695": "man-health-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-2695": "man-health-worker-medium-skin-tone",
  "1f9d8-200d-2642": "man-in-lotus-position",
  "1f9d8-1f3ff-200d-2642": "man-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb-200d-2642": "man-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe-200d-2642": "man-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc-200d-2642": "man-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd-200d-2642": "man-in-lotus-position-medium-skin-tone",
  "1f468-200d-1f9bd": "man-in-manual-wheelchair",
  "1f468-1f3ff-200d-1f9bd": "man-in-manual-wheelchair-dark-skin-tone",
  "1f468-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right",
  "1f468-1f3ff-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9bd": "man-in-manual-wheelchair-light-skin-tone",
  "1f468-1f3fe-200d-1f9bd": "man-in-manual-wheelchair-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bd": "man-in-manual-wheelchair-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bd": "man-in-manual-wheelchair-medium-skin-tone",
  "1f468-200d-1f9bc": "man-in-motorized-wheelchair",
  "1f468-1f3ff-200d-1f9bc": "man-in-motorized-wheelchair-dark-skin-tone",
  "1f468-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right",
  "1f468-1f3ff-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9bc": "man-in-motorized-wheelchair-light-skin-tone",
  "1f468-1f3fe-200d-1f9bc": "man-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bc": "man-in-motorized-wheelchair-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bc": "man-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6-200d-2642": "man-in-steamy-room",
  "1f9d6-1f3ff-200d-2642": "man-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb-200d-2642": "man-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe-200d-2642": "man-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc-200d-2642": "man-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd-200d-2642": "man-in-steamy-room-medium-skin-tone",
  "1f935-200d-2642": "man-in-tuxedo",
  "1f935-1f3ff-200d-2642": "man-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb-200d-2642": "man-in-tuxedo-light-skin-tone",
  "1f935-1f3fe-200d-2642": "man-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc-200d-2642": "man-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd-200d-2642": "man-in-tuxedo-medium-skin-tone",
  "1f468-200d-2696": "man-judge",
  "1f468-1f3ff-200d-2696": "man-judge-dark-skin-tone",
  "1f468-1f3fb-200d-2696": "man-judge-light-skin-tone",
  "1f468-1f3fe-200d-2696": "man-judge-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2696": "man-judge-medium-light-skin-tone",
  "1f468-1f3fd-200d-2696": "man-judge-medium-skin-tone",
  "1f939-200d-2642": "man-juggling",
  "1f939-1f3ff-200d-2642": "man-juggling-dark-skin-tone",
  "1f939-1f3fb-200d-2642": "man-juggling-light-skin-tone",
  "1f939-1f3fe-200d-2642": "man-juggling-medium-dark-skin-tone",
  "1f939-1f3fc-200d-2642": "man-juggling-medium-light-skin-tone",
  "1f939-1f3fd-200d-2642": "man-juggling-medium-skin-tone",
  "1f9ce-200d-2642": "man-kneeling",
  "1f9ce-1f3ff-200d-2642": "man-kneeling-dark-skin-tone",
  "1f9ce-200d-2642-200d-27a1": "man-kneeling-facing-right",
  "1f9ce-1f3ff-200d-2642-200d-27a1": "man-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-2642-200d-27a1": "man-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb-200d-2642": "man-kneeling-light-skin-tone",
  "1f9ce-1f3fe-200d-2642": "man-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2642": "man-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2642": "man-kneeling-medium-skin-tone",
  "1f3cb-200d-2642": "man-lifting-weights",
  "1f3cb-1f3ff-200d-2642": "man-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb-200d-2642": "man-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe-200d-2642": "man-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc-200d-2642": "man-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd-200d-2642": "man-lifting-weights-medium-skin-tone",
  "1f468-1f3fb": "man-light-skin-tone",
  "1f468-1f3fb-200d-1f9b2": "man-light-skin-tone-bald",
  "1f9d4-1f3fb-200d-2642": "man-light-skin-tone-beard",
  "1f471-1f3fb-200d-2642": "man-light-skin-tone-blond-hair",
  "1f468-1f3fb-200d-1f9b1": "man-light-skin-tone-curly-hair",
  "1f468-1f3fb-200d-1f9b0": "man-light-skin-tone-red-hair",
  "1f468-1f3fb-200d-1f9b3": "man-light-skin-tone-white-hair",
  "1f9d9-200d-2642": "man-mage",
  "1f9d9-1f3ff-200d-2642": "man-mage-dark-skin-tone",
  "1f9d9-1f3fb-200d-2642": "man-mage-light-skin-tone",
  "1f9d9-1f3fe-200d-2642": "man-mage-medium-dark-skin-tone",
  "1f9d9-1f3fc-200d-2642": "man-mage-medium-light-skin-tone",
  "1f9d9-1f3fd-200d-2642": "man-mage-medium-skin-tone",
  "1f468-200d-1f527": "man-mechanic",
  "1f468-1f3ff-200d-1f527": "man-mechanic-dark-skin-tone",
  "1f468-1f3fb-200d-1f527": "man-mechanic-light-skin-tone",
  "1f468-1f3fe-200d-1f527": "man-mechanic-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f527": "man-mechanic-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f527": "man-mechanic-medium-skin-tone",
  "1f468-1f3fe": "man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-1f9b2": "man-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe-200d-2642": "man-medium-dark-skin-tone-beard",
  "1f471-1f3fe-200d-2642": "man-medium-dark-skin-tone-blond-hair",
  "1f468-1f3fe-200d-1f9b1": "man-medium-dark-skin-tone-curly-hair",
  "1f468-1f3fe-200d-1f9b0": "man-medium-dark-skin-tone-red-hair",
  "1f468-1f3fe-200d-1f9b3": "man-medium-dark-skin-tone-white-hair",
  "1f468-1f3fc": "man-medium-light-skin-tone",
  "1f468-1f3fc-200d-1f9b2": "man-medium-light-skin-tone-bald",
  "1f9d4-1f3fc-200d-2642": "man-medium-light-skin-tone-beard",
  "1f471-1f3fc-200d-2642": "man-medium-light-skin-tone-blond-hair",
  "1f468-1f3fc-200d-1f9b1": "man-medium-light-skin-tone-curly-hair",
  "1f468-1f3fc-200d-1f9b0": "man-medium-light-skin-tone-red-hair",
  "1f468-1f3fc-200d-1f9b3": "man-medium-light-skin-tone-white-hair",
  "1f468-1f3fd": "man-medium-skin-tone",
  "1f468-1f3fd-200d-1f9b2": "man-medium-skin-tone-bald",
  "1f9d4-1f3fd-200d-2642": "man-medium-skin-tone-beard",
  "1f471-1f3fd-200d-2642": "man-medium-skin-tone-blond-hair",
  "1f468-1f3fd-200d-1f9b1": "man-medium-skin-tone-curly-hair",
  "1f468-1f3fd-200d-1f9b0": "man-medium-skin-tone-red-hair",
  "1f468-1f3fd-200d-1f9b3": "man-medium-skin-tone-white-hair",
  "1f6b5-200d-2642": "man-mountain-biking",
  "1f6b5-1f3ff-200d-2642": "man-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb-200d-2642": "man-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe-200d-2642": "man-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc-200d-2642": "man-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd-200d-2642": "man-mountain-biking-medium-skin-tone",
  "1f468-200d-1f4bc": "man-office-worker",
  "1f468-1f3ff-200d-1f4bc": "man-office-worker-dark-skin-tone",
  "1f468-1f3fb-200d-1f4bc": "man-office-worker-light-skin-tone",
  "1f468-1f3fe-200d-1f4bc": "man-office-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f4bc": "man-office-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f4bc": "man-office-worker-medium-skin-tone",
  "1f468-200d-2708": "man-pilot",
  "1f468-1f3ff-200d-2708": "man-pilot-dark-skin-tone",
  "1f468-1f3fb-200d-2708": "man-pilot-light-skin-tone",
  "1f468-1f3fe-200d-2708": "man-pilot-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2708": "man-pilot-medium-light-skin-tone",
  "1f468-1f3fd-200d-2708": "man-pilot-medium-skin-tone",
  "1f93e-200d-2642": "man-playing-handball",
  "1f93e-1f3ff-200d-2642": "man-playing-handball-dark-skin-tone",
  "1f93e-1f3fb-200d-2642": "man-playing-handball-light-skin-tone",
  "1f93e-1f3fe-200d-2642": "man-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc-200d-2642": "man-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd-200d-2642": "man-playing-handball-medium-skin-tone",
  "1f93d-200d-2642": "man-playing-water-polo",
  "1f93d-1f3ff-200d-2642": "man-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb-200d-2642": "man-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe-200d-2642": "man-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc-200d-2642": "man-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd-200d-2642": "man-playing-water-polo-medium-skin-tone",
  "1f46e-200d-2642": "man-police-officer",
  "1f46e-1f3ff-200d-2642": "man-police-officer-dark-skin-tone",
  "1f46e-1f3fb-200d-2642": "man-police-officer-light-skin-tone",
  "1f46e-1f3fe-200d-2642": "man-police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc-200d-2642": "man-police-officer-medium-light-skin-tone",
  "1f46e-1f3fd-200d-2642": "man-police-officer-medium-skin-tone",
  "1f64e-200d-2642": "man-pouting",
  "1f64e-1f3ff-200d-2642": "man-pouting-dark-skin-tone",
  "1f64e-1f3fb-200d-2642": "man-pouting-light-skin-tone",
  "1f64e-1f3fe-200d-2642": "man-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc-200d-2642": "man-pouting-medium-light-skin-tone",
  "1f64e-1f3fd-200d-2642": "man-pouting-medium-skin-tone",
  "1f64b-200d-2642": "man-raising-hand",
  "1f64b-1f3ff-200d-2642": "man-raising-hand-dark-skin-tone",
  "1f64b-1f3fb-200d-2642": "man-raising-hand-light-skin-tone",
  "1f64b-1f3fe-200d-2642": "man-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc-200d-2642": "man-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd-200d-2642": "man-raising-hand-medium-skin-tone",
  "1f468-200d-1f9b0": "man-red-hair",
  "1f6a3-200d-2642": "man-rowing-boat",
  "1f6a3-1f3ff-200d-2642": "man-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb-200d-2642": "man-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe-200d-2642": "man-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc-200d-2642": "man-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd-200d-2642": "man-rowing-boat-medium-skin-tone",
  "1f3c3-200d-2642": "man-running",
  "1f3c3-1f3ff-200d-2642": "man-running-dark-skin-tone",
  "1f3c3-200d-2642-200d-27a1": "man-running-facing-right",
  "1f3c3-1f3ff-200d-2642-200d-27a1": "man-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-2642-200d-27a1": "man-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-2642-200d-27a1": "man-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2642-200d-27a1": "man-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2642-200d-27a1": "man-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb-200d-2642": "man-running-light-skin-tone",
  "1f3c3-1f3fe-200d-2642": "man-running-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2642": "man-running-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2642": "man-running-medium-skin-tone",
  "1f468-200d-1f52c": "man-scientist",
  "1f468-1f3ff-200d-1f52c": "man-scientist-dark-skin-tone",
  "1f468-1f3fb-200d-1f52c": "man-scientist-light-skin-tone",
  "1f468-1f3fe-200d-1f52c": "man-scientist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f52c": "man-scientist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f52c": "man-scientist-medium-skin-tone",
  "1f937-200d-2642": "man-shrugging",
  "1f937-1f3ff-200d-2642": "man-shrugging-dark-skin-tone",
  "1f937-1f3fb-200d-2642": "man-shrugging-light-skin-tone",
  "1f937-1f3fe-200d-2642": "man-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc-200d-2642": "man-shrugging-medium-light-skin-tone",
  "1f937-1f3fd-200d-2642": "man-shrugging-medium-skin-tone",
  "1f468-200d-1f3a4": "man-singer",
  "1f468-1f3ff-200d-1f3a4": "man-singer-dark-skin-tone",
  "1f468-1f3fb-200d-1f3a4": "man-singer-light-skin-tone",
  "1f468-1f3fe-200d-1f3a4": "man-singer-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3a4": "man-singer-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3a4": "man-singer-medium-skin-tone",
  "1f9cd-200d-2642": "man-standing",
  "1f9cd-1f3ff-200d-2642": "man-standing-dark-skin-tone",
  "1f9cd-1f3fb-200d-2642": "man-standing-light-skin-tone",
  "1f9cd-1f3fe-200d-2642": "man-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc-200d-2642": "man-standing-medium-light-skin-tone",
  "1f9cd-1f3fd-200d-2642": "man-standing-medium-skin-tone",
  "1f468-200d-1f393": "man-student",
  "1f468-1f3ff-200d-1f393": "man-student-dark-skin-tone",
  "1f468-1f3fb-200d-1f393": "man-student-light-skin-tone",
  "1f468-1f3fe-200d-1f393": "man-student-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f393": "man-student-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f393": "man-student-medium-skin-tone",
  "1f9b8-200d-2642": "man-superhero",
  "1f9b8-1f3ff-200d-2642": "man-superhero-dark-skin-tone",
  "1f9b8-1f3fb-200d-2642": "man-superhero-light-skin-tone",
  "1f9b8-1f3fe-200d-2642": "man-superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc-200d-2642": "man-superhero-medium-light-skin-tone",
  "1f9b8-1f3fd-200d-2642": "man-superhero-medium-skin-tone",
  "1f9b9-200d-2642": "man-supervillain",
  "1f9b9-1f3ff-200d-2642": "man-supervillain-dark-skin-tone",
  "1f9b9-1f3fb-200d-2642": "man-supervillain-light-skin-tone",
  "1f9b9-1f3fe-200d-2642": "man-supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc-200d-2642": "man-supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd-200d-2642": "man-supervillain-medium-skin-tone",
  "1f3c4-200d-2642": "man-surfing",
  "1f3c4-1f3ff-200d-2642": "man-surfing-dark-skin-tone",
  "1f3c4-1f3fb-200d-2642": "man-surfing-light-skin-tone",
  "1f3c4-1f3fe-200d-2642": "man-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc-200d-2642": "man-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd-200d-2642": "man-surfing-medium-skin-tone",
  "1f3ca-200d-2642": "man-swimming",
  "1f3ca-1f3ff-200d-2642": "man-swimming-dark-skin-tone",
  "1f3ca-1f3fb-200d-2642": "man-swimming-light-skin-tone",
  "1f3ca-1f3fe-200d-2642": "man-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc-200d-2642": "man-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd-200d-2642": "man-swimming-medium-skin-tone",
  "1f468-200d-1f3eb": "man-teacher",
  "1f468-1f3ff-200d-1f3eb": "man-teacher-dark-skin-tone",
  "1f468-1f3fb-200d-1f3eb": "man-teacher-light-skin-tone",
  "1f468-1f3fe-200d-1f3eb": "man-teacher-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3eb": "man-teacher-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3eb": "man-teacher-medium-skin-tone",
  "1f468-200d-1f4bb": "man-technologist",
  "1f468-1f3ff-200d-1f4bb": "man-technologist-dark-skin-tone",
  "1f468-1f3fb-200d-1f4bb": "man-technologist-light-skin-tone",
  "1f468-1f3fe-200d-1f4bb": "man-technologist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f4bb": "man-technologist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f4bb": "man-technologist-medium-skin-tone",
  "1f481-200d-2642": "man-tipping-hand",
  "1f481-1f3ff-200d-2642": "man-tipping-hand-dark-skin-tone",
  "1f481-1f3fb-200d-2642": "man-tipping-hand-light-skin-tone",
  "1f481-1f3fe-200d-2642": "man-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc-200d-2642": "man-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd-200d-2642": "man-tipping-hand-medium-skin-tone",
  "1f9db-200d-2642": "man-vampire",
  "1f9db-1f3ff-200d-2642": "man-vampire-dark-skin-tone",
  "1f9db-1f3fb-200d-2642": "man-vampire-light-skin-tone",
  "1f9db-1f3fe-200d-2642": "man-vampire-medium-dark-skin-tone",
  "1f9db-1f3fc-200d-2642": "man-vampire-medium-light-skin-tone",
  "1f9db-1f3fd-200d-2642": "man-vampire-medium-skin-tone",
  "1f6b6-200d-2642": "man-walking",
  "1f6b6-1f3ff-200d-2642": "man-walking-dark-skin-tone",
  "1f6b6-200d-2642-200d-27a1": "man-walking-facing-right",
  "1f6b6-1f3ff-200d-2642-200d-27a1": "man-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-2642-200d-27a1": "man-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-2642-200d-27a1": "man-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2642-200d-27a1": "man-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2642-200d-27a1": "man-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb-200d-2642": "man-walking-light-skin-tone",
  "1f6b6-1f3fe-200d-2642": "man-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2642": "man-walking-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2642": "man-walking-medium-skin-tone",
  "1f473-200d-2642": "man-wearing-turban",
  "1f473-1f3ff-200d-2642": "man-wearing-turban-dark-skin-tone",
  "1f473-1f3fb-200d-2642": "man-wearing-turban-light-skin-tone",
  "1f473-1f3fe-200d-2642": "man-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc-200d-2642": "man-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd-200d-2642": "man-wearing-turban-medium-skin-tone",
  "1f468-200d-1f9b3": "man-white-hair",
  "1f470-200d-2642": "man-with-veil",
  "1f470-1f3ff-200d-2642": "man-with-veil-dark-skin-tone",
  "1f470-1f3fb-200d-2642": "man-with-veil-light-skin-tone",
  "1f470-1f3fe-200d-2642": "man-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc-200d-2642": "man-with-veil-medium-light-skin-tone",
  "1f470-1f3fd-200d-2642": "man-with-veil-medium-skin-tone",
  "1f468-200d-1f9af": "man-with-white-cane",
  "1f468-1f3ff-200d-1f9af": "man-with-white-cane-dark-skin-tone",
  "1f468-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right",
  "1f468-1f3ff-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9af": "man-with-white-cane-light-skin-tone",
  "1f468-1f3fe-200d-1f9af": "man-with-white-cane-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9af": "man-with-white-cane-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9af": "man-with-white-cane-medium-skin-tone",
  "1f9df-200d-2642": "man-zombie",
  "1f96d": "mango",
  "1f45e": "mans-shoe",
  "1f570": "mantelpiece-clock",
  "1f9bd": "manual-wheelchair",
  "1f5fe": "map-of-japan",
  "1f341": "maple-leaf",
  "1fa87": "maracas",
  "1f94b": "martial-arts-uniform",
  "1f9c9": "mate",
  "1f356": "meat-on-bone",
  "1f9d1-200d-1f527": "mechanic",
  "1f9d1-1f3ff-200d-1f527": "mechanic-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f527": "mechanic-light-skin-tone",
  "1f9d1-1f3fe-200d-1f527": "mechanic-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f527": "mechanic-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f527": "mechanic-medium-skin-tone",
  "1f9be": "mechanical-arm",
  "1f9bf": "mechanical-leg",
  "1f4e3": "megaphone",
  "1f348": "melon",
  "1fae0": "melting-face",
  "1f4dd": "memo",
  "1f46c": "men-holding-hands",
  "1f46c-1f3ff": "men-holding-hands-dark-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46c-1f3fb": "men-holding-hands-light-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46c-1f3fe": "men-holding-hands-medium-dark-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46c-1f3fc": "men-holding-hands-medium-light-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46c-1f3fd": "men-holding-hands-medium-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f46f-200d-2642": "men-with-bunny-ears",
  "1f93c-200d-2642": "men-wrestling",
  "1f93c-1f3ff-200d-2642": "men-wrestling-dark-skin-tone",
  "1f93c-1f3fb-200d-2642": "men-wrestling-light-skin-tone",
  "1f93c-1f3fe-200d-2642": "men-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc-200d-2642": "men-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd-200d-2642": "men-wrestling-medium-skin-tone",
  "2764-200d-1fa79": "mending-heart",
  "1f54e": "menorah",
  "1f6b9": "mens-room",
  "1f9dc-200d-2640": "mermaid",
  "1f9dc-1f3ff-200d-2640": "mermaid-dark-skin-tone",
  "1f9dc-1f3fb-200d-2640": "mermaid-light-skin-tone",
  "1f9dc-1f3fe-200d-2640": "mermaid-medium-dark-skin-tone",
  "1f9dc-1f3fc-200d-2640": "mermaid-medium-light-skin-tone",
  "1f9dc-1f3fd-200d-2640": "mermaid-medium-skin-tone",
  "1f9dc-200d-2642": "merman",
  "1f9dc-1f3ff-200d-2642": "merman-dark-skin-tone",
  "1f9dc-1f3fb-200d-2642": "merman-light-skin-tone",
  "1f9dc-1f3fe-200d-2642": "merman-medium-dark-skin-tone",
  "1f9dc-1f3fc-200d-2642": "merman-medium-light-skin-tone",
  "1f9dc-1f3fd-200d-2642": "merman-medium-skin-tone",
  "1f9dc": "merperson",
  "1f9dc-1f3ff": "merperson-dark-skin-tone",
  "1f9dc-1f3fb": "merperson-light-skin-tone",
  "1f9dc-1f3fe": "merperson-medium-dark-skin-tone",
  "1f9dc-1f3fc": "merperson-medium-light-skin-tone",
  "1f9dc-1f3fd": "merperson-medium-skin-tone",
  "1f687": "metro",
  "1f9a0": "microbe",
  "1f3a4": "microphone",
  "1f52c": "microscope",
  "1f595": "middle-finger",
  "1f595-1f3ff": "middle-finger-dark-skin-tone",
  "1f595-1f3fb": "middle-finger-light-skin-tone",
  "1f595-1f3fe": "middle-finger-medium-dark-skin-tone",
  "1f595-1f3fc": "middle-finger-medium-light-skin-tone",
  "1f595-1f3fd": "middle-finger-medium-skin-tone",
  "1fa96": "military-helmet",
  "1f396": "military-medal",
  "1f30c": "milky-way",
  "1f690": "minibus",
  "1fa9e": "mirror",
  "1faa9": "mirror-ball",
  "1f5ff": "moai",
  "1f4f1": "mobile-phone",
  "1f4f4": "mobile-phone-off",
  "1f4f2": "mobile-phone-with-arrow",
  "1f4b0": "money-bag",
  "1f911": "money-mouth-face",
  "1f4b8": "money-with-wings",
  "1f412": "monkey",
  "1f435": "monkey-face",
  "1f69d": "monorail",
  "1f96e": "moon-cake",
  "1f391": "moon-viewing-ceremony",
  "1face": "moose",
  "1f54c": "mosque",
  "1f99f": "mosquito",
  "1f6e5": "motor-boat",
  "1f6f5": "motor-scooter",
  "1f3cd": "motorcycle",
  "1f9bc": "motorized-wheelchair",
  "1f6e3": "motorway",
  "1f5fb": "mount-fuji",
  "26f0": "mountain",
  "1f6a0": "mountain-cableway",
  "1f69e": "mountain-railway",
  "1f401": "mouse",
  "1f42d": "mouse-face",
  "1faa4": "mouse-trap",
  "1f444": "mouth",
  "1f3a5": "movie-camera",
  "1f936": "mrs-claus",
  "1f936-1f3ff": "mrs-claus-dark-skin-tone",
  "1f936-1f3fb": "mrs-claus-light-skin-tone",
  "1f936-1f3fe": "mrs-claus-medium-dark-skin-tone",
  "1f936-1f3fc": "mrs-claus-medium-light-skin-tone",
  "1f936-1f3fd": "mrs-claus-medium-skin-tone",
  "1f344": "mushroom",
  "1f3b9": "musical-keyboard",
  "1f3b5": "musical-note",
  "1f3b6": "musical-notes",
  "1f3bc": "musical-score",
  "1f507": "muted-speaker",
  "1f9d1-200d-1f384": "mx-claus",
  "1f9d1-1f3ff-200d-1f384": "mx-claus-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f384": "mx-claus-light-skin-tone",
  "1f9d1-1f3fe-200d-1f384": "mx-claus-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f384": "mx-claus-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f384": "mx-claus-medium-skin-tone",
  "1f485": "nail-polish",
  "1f485-1f3ff": "nail-polish-dark-skin-tone",
  "1f485-1f3fb": "nail-polish-light-skin-tone",
  "1f485-1f3fe": "nail-polish-medium-dark-skin-tone",
  "1f485-1f3fc": "nail-polish-medium-light-skin-tone",
  "1f485-1f3fd": "nail-polish-medium-skin-tone",
  "1f4db": "name-badge",
  "1f3de": "national-park",
  "1f922": "nauseated-face",
  "1f9ff": "nazar-amulet",
  "1f454": "necktie",
  "1f913": "nerd-face",
  "1faba": "nest-with-eggs",
  "1fa86": "nesting-dolls",
  "1f610": "neutral-face",
  "1f195": "new-button",
  "1f311": "new-moon",
  "1f31a": "new-moon-face",
  "1f4f0": "newspaper",
  "23ed": "next-track-button",
  "1f196": "ng-button",
  "1f303": "night-with-stars",
  "1f558": "nine-oclock",
  "1f564": "nine-thirty",
  "1f977": "ninja",
  "1f977-1f3ff": "ninja-dark-skin-tone",
  "1f977-1f3fb": "ninja-light-skin-tone",
  "1f977-1f3fe": "ninja-medium-dark-skin-tone",
  "1f977-1f3fc": "ninja-medium-light-skin-tone",
  "1f977-1f3fd": "ninja-medium-skin-tone",
  "1f6b3": "no-bicycles",
  "26d4": "no-entry",
  "1f6af": "no-littering",
  "1f4f5": "no-mobile-phones",
  "1f51e": "no-one-under-eighteen",
  "1f6b7": "no-pedestrians",
  "1f6ad": "no-smoking",
  "1f6b1": "non-potable-water",
  "1f443": "nose",
  "1f443-1f3ff": "nose-dark-skin-tone",
  "1f443-1f3fb": "nose-light-skin-tone",
  "1f443-1f3fe": "nose-medium-dark-skin-tone",
  "1f443-1f3fc": "nose-medium-light-skin-tone",
  "1f443-1f3fd": "nose-medium-skin-tone",
  "1f4d3": "notebook",
  "1f4d4": "notebook-with-decorative-cover",
  "1f529": "nut-and-bolt",
  "1f17e": "o-button-blood-type",
  "1f419": "octopus",
  "1f362": "oden",
  "1f3e2": "office-building",
  "1f9d1-200d-1f4bc": "office-worker",
  "1f9d1-1f3ff-200d-1f4bc": "office-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f4bc": "office-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-1f4bc": "office-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f4bc": "office-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f4bc": "office-worker-medium-skin-tone",
  "1f479": "ogre",
  "1f6e2": "oil-drum",
  "1f197": "ok-button",
  "1f44c": "ok-hand",
  "1f44c-1f3ff": "ok-hand-dark-skin-tone",
  "1f44c-1f3fb": "ok-hand-light-skin-tone",
  "1f44c-1f3fe": "ok-hand-medium-dark-skin-tone",
  "1f44c-1f3fc": "ok-hand-medium-light-skin-tone",
  "1f44c-1f3fd": "ok-hand-medium-skin-tone",
  "1f5dd": "old-key",
  "1f474": "old-man",
  "1f474-1f3ff": "old-man-dark-skin-tone",
  "1f474-1f3fb": "old-man-light-skin-tone",
  "1f474-1f3fe": "old-man-medium-dark-skin-tone",
  "1f474-1f3fc": "old-man-medium-light-skin-tone",
  "1f474-1f3fd": "old-man-medium-skin-tone",
  "1f475": "old-woman",
  "1f475-1f3ff": "old-woman-dark-skin-tone",
  "1f475-1f3fb": "old-woman-light-skin-tone",
  "1f475-1f3fe": "old-woman-medium-dark-skin-tone",
  "1f475-1f3fc": "old-woman-medium-light-skin-tone",
  "1f475-1f3fd": "old-woman-medium-skin-tone",
  "1f9d3": "older-person",
  "1f9d3-1f3ff": "older-person-dark-skin-tone",
  "1f9d3-1f3fb": "older-person-light-skin-tone",
  "1f9d3-1f3fe": "older-person-medium-dark-skin-tone",
  "1f9d3-1f3fc": "older-person-medium-light-skin-tone",
  "1f9d3-1f3fd": "older-person-medium-skin-tone",
  "1fad2": "olive",
  "1f549": "om",
  "1f51b": "on-exclamation-arrow",
  "1f698": "oncoming-automobile",
  "1f68d": "oncoming-bus",
  "1f44a": "oncoming-fist",
  "1f44a-1f3ff": "oncoming-fist-dark-skin-tone",
  "1f44a-1f3fb": "oncoming-fist-light-skin-tone",
  "1f44a-1f3fe": "oncoming-fist-medium-dark-skin-tone",
  "1f44a-1f3fc": "oncoming-fist-medium-light-skin-tone",
  "1f44a-1f3fd": "oncoming-fist-medium-skin-tone",
  "1f694": "oncoming-police-car",
  "1f696": "oncoming-taxi",
  "1f550": "one-oclock",
  "1fa71": "one-piece-swimsuit",
  "1f55c": "one-thirty",
  "1f9c5": "onion",
  "1f4d6": "open-book",
  "1f4c2": "open-file-folder",
  "1f450": "open-hands",
  "1f450-1f3ff": "open-hands-dark-skin-tone",
  "1f450-1f3fb": "open-hands-light-skin-tone",
  "1f450-1f3fe": "open-hands-medium-dark-skin-tone",
  "1f450-1f3fc": "open-hands-medium-light-skin-tone",
  "1f450-1f3fd": "open-hands-medium-skin-tone",
  "1f4ed": "open-mailbox-with-lowered-flag",
  "1f4ec": "open-mailbox-with-raised-flag",
  "26ce": "ophiuchus",
  "1f4bf": "optical-disk",
  "1f4d9": "orange-book",
  "1f7e0": "orange-circle",
  "1f9e1": "orange-heart",
  "1f7e7": "orange-square",
  "1f9a7": "orangutan",
  "1f9a6": "otter",
  "1f4e4": "outbox-tray",
  "1f989": "owl",
  "1f402": "ox",
  "1f9aa": "oyster",
  "1f17f": "p-button",
  "1f4e6": "package",
  "1f4c4": "page-facing-up",
  "1f4c3": "page-with-curl",
  "1f4df": "pager",
  "1f58c": "paintbrush",
  "1faf3": "palm-down-hand",
  "1faf3-1f3ff": "palm-down-hand-dark-skin-tone",
  "1faf3-1f3fb": "palm-down-hand-light-skin-tone",
  "1faf3-1f3fe": "palm-down-hand-medium-dark-skin-tone",
  "1faf3-1f3fc": "palm-down-hand-medium-light-skin-tone",
  "1faf3-1f3fd": "palm-down-hand-medium-skin-tone",
  "1f334": "palm-tree",
  "1faf4": "palm-up-hand",
  "1faf4-1f3ff": "palm-up-hand-dark-skin-tone",
  "1faf4-1f3fb": "palm-up-hand-light-skin-tone",
  "1faf4-1f3fe": "palm-up-hand-medium-dark-skin-tone",
  "1faf4-1f3fc": "palm-up-hand-medium-light-skin-tone",
  "1faf4-1f3fd": "palm-up-hand-medium-skin-tone",
  "1f932": "palms-up-together",
  "1f932-1f3ff": "palms-up-together-dark-skin-tone",
  "1f932-1f3fb": "palms-up-together-light-skin-tone",
  "1f932-1f3fe": "palms-up-together-medium-dark-skin-tone",
  "1f932-1f3fc": "palms-up-together-medium-light-skin-tone",
  "1f932-1f3fd": "palms-up-together-medium-skin-tone",
  "1f95e": "pancakes",
  "1f43c": "panda",
  "1f4ce": "paperclip",
  "1fa82": "parachute",
  "1f99c": "parrot",
  "303d": "part-alternation-mark",
  "1f389": "party-popper",
  "1f973": "partying-face",
  "1f6f3": "passenger-ship",
  "1f6c2": "passport-control",
  "23f8": "pause-button",
  "1f43e": "paw-prints",
  "1fadb": "pea-pod",
  "262e": "peace-symbol",
  "1f351": "peach",
  "1f99a": "peacock",
  "1f95c": "peanuts",
  "1f350": "pear",
  "1f58a": "pen",
  "270f": "pencil",
  "1f427": "penguin",
  "1f614": "pensive-face",
  "1f9d1-200d-1f91d-200d-1f9d1": "people-holding-hands",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-light-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-light-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1fac2": "people-hugging",
  "1f46f": "people-with-bunny-ears",
  "1f93c": "people-wrestling",
  "1f93c-1f3ff": "people-wrestling-dark-skin-tone",
  "1f93c-1f3fb": "people-wrestling-light-skin-tone",
  "1f93c-1f3fe": "people-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc": "people-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd": "people-wrestling-medium-skin-tone",
  "1f3ad": "performing-arts",
  "1f623": "persevering-face",
  "1f9d1": "person",
  "1f9d1-200d-1f9b2": "person-bald",
  "1f9d4": "person-beard",
  "1f6b4": "person-biking",
  "1f6b4-1f3ff": "person-biking-dark-skin-tone",
  "1f6b4-1f3fb": "person-biking-light-skin-tone",
  "1f6b4-1f3fe": "person-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc": "person-biking-medium-light-skin-tone",
  "1f6b4-1f3fd": "person-biking-medium-skin-tone",
  "1f471": "person-blond-hair",
  "26f9": "person-bouncing-ball",
  "26f9-1f3ff": "person-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb": "person-bouncing-ball-light-skin-tone",
  "26f9-1f3fe": "person-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc": "person-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd": "person-bouncing-ball-medium-skin-tone",
  "1f647": "person-bowing",
  "1f647-1f3ff": "person-bowing-dark-skin-tone",
  "1f647-1f3fb": "person-bowing-light-skin-tone",
  "1f647-1f3fe": "person-bowing-medium-dark-skin-tone",
  "1f647-1f3fc": "person-bowing-medium-light-skin-tone",
  "1f647-1f3fd": "person-bowing-medium-skin-tone",
  "1f938": "person-cartwheeling",
  "1f938-1f3ff": "person-cartwheeling-dark-skin-tone",
  "1f938-1f3fb": "person-cartwheeling-light-skin-tone",
  "1f938-1f3fe": "person-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc": "person-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd": "person-cartwheeling-medium-skin-tone",
  "1f9d7": "person-climbing",
  "1f9d7-1f3ff": "person-climbing-dark-skin-tone",
  "1f9d7-1f3fb": "person-climbing-light-skin-tone",
  "1f9d7-1f3fe": "person-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc": "person-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd": "person-climbing-medium-skin-tone",
  "1f9d1-200d-1f9b1": "person-curly-hair",
  "1f9d1-1f3ff": "person-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f9b2": "person-dark-skin-tone-bald",
  "1f9d4-1f3ff": "person-dark-skin-tone-beard",
  "1f471-1f3ff": "person-dark-skin-tone-blond-hair",
  "1f9d1-1f3ff-200d-1f9b1": "person-dark-skin-tone-curly-hair",
  "1f9d1-1f3ff-200d-1f9b0": "person-dark-skin-tone-red-hair",
  "1f9d1-1f3ff-200d-1f9b3": "person-dark-skin-tone-white-hair",
  "1f926": "person-facepalming",
  "1f926-1f3ff": "person-facepalming-dark-skin-tone",
  "1f926-1f3fb": "person-facepalming-light-skin-tone",
  "1f926-1f3fe": "person-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc": "person-facepalming-medium-light-skin-tone",
  "1f926-1f3fd": "person-facepalming-medium-skin-tone",
  "1f9d1-200d-1f37c": "person-feeding-baby",
  "1f9d1-1f3ff-200d-1f37c": "person-feeding-baby-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f37c": "person-feeding-baby-light-skin-tone",
  "1f9d1-1f3fe-200d-1f37c": "person-feeding-baby-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f37c": "person-feeding-baby-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f37c": "person-feeding-baby-medium-skin-tone",
  "1f93a": "person-fencing",
  "1f64d": "person-frowning",
  "1f64d-1f3ff": "person-frowning-dark-skin-tone",
  "1f64d-1f3fb": "person-frowning-light-skin-tone",
  "1f64d-1f3fe": "person-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc": "person-frowning-medium-light-skin-tone",
  "1f64d-1f3fd": "person-frowning-medium-skin-tone",
  "1f645": "person-gesturing-no",
  "1f645-1f3ff": "person-gesturing-no-dark-skin-tone",
  "1f645-1f3fb": "person-gesturing-no-light-skin-tone",
  "1f645-1f3fe": "person-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc": "person-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd": "person-gesturing-no-medium-skin-tone",
  "1f646": "person-gesturing-ok",
  "1f646-1f3ff": "person-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb": "person-gesturing-ok-light-skin-tone",
  "1f646-1f3fe": "person-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc": "person-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd": "person-gesturing-ok-medium-skin-tone",
  "1f487": "person-getting-haircut",
  "1f487-1f3ff": "person-getting-haircut-dark-skin-tone",
  "1f487-1f3fb": "person-getting-haircut-light-skin-tone",
  "1f487-1f3fe": "person-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc": "person-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd": "person-getting-haircut-medium-skin-tone",
  "1f486": "person-getting-massage",
  "1f486-1f3ff": "person-getting-massage-dark-skin-tone",
  "1f486-1f3fb": "person-getting-massage-light-skin-tone",
  "1f486-1f3fe": "person-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc": "person-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd": "person-getting-massage-medium-skin-tone",
  "1f3cc": "person-golfing",
  "1f3cc-1f3ff": "person-golfing-dark-skin-tone",
  "1f3cc-1f3fb": "person-golfing-light-skin-tone",
  "1f3cc-1f3fe": "person-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc": "person-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd": "person-golfing-medium-skin-tone",
  "1f6cc": "person-in-bed",
  "1f6cc-1f3ff": "person-in-bed-dark-skin-tone",
  "1f6cc-1f3fb": "person-in-bed-light-skin-tone",
  "1f6cc-1f3fe": "person-in-bed-medium-dark-skin-tone",
  "1f6cc-1f3fc": "person-in-bed-medium-light-skin-tone",
  "1f6cc-1f3fd": "person-in-bed-medium-skin-tone",
  "1f9d8": "person-in-lotus-position",
  "1f9d8-1f3ff": "person-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb": "person-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe": "person-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc": "person-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd": "person-in-lotus-position-medium-skin-tone",
  "1f9d1-200d-1f9bd": "person-in-manual-wheelchair",
  "1f9d1-1f3ff-200d-1f9bd": "person-in-manual-wheelchair-dark-skin-tone",
  "1f9d1-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right",
  "1f9d1-1f3ff-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9bd": "person-in-manual-wheelchair-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bd": "person-in-manual-wheelchair-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bd": "person-in-manual-wheelchair-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bd": "person-in-manual-wheelchair-medium-skin-tone",
  "1f9d1-200d-1f9bc": "person-in-motorized-wheelchair",
  "1f9d1-1f3ff-200d-1f9bc": "person-in-motorized-wheelchair-dark-skin-tone",
  "1f9d1-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right",
  "1f9d1-1f3ff-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9bc": "person-in-motorized-wheelchair-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bc": "person-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bc": "person-in-motorized-wheelchair-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bc": "person-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6": "person-in-steamy-room",
  "1f9d6-1f3ff": "person-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb": "person-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe": "person-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc": "person-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd": "person-in-steamy-room-medium-skin-tone",
  "1f574": "person-in-suit-levitating",
  "1f574-1f3ff": "person-in-suit-levitating-dark-skin-tone",
  "1f574-1f3fb": "person-in-suit-levitating-light-skin-tone",
  "1f574-1f3fe": "person-in-suit-levitating-medium-dark-skin-tone",
  "1f574-1f3fc": "person-in-suit-levitating-medium-light-skin-tone",
  "1f574-1f3fd": "person-in-suit-levitating-medium-skin-tone",
  "1f935": "person-in-tuxedo",
  "1f935-1f3ff": "person-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb": "person-in-tuxedo-light-skin-tone",
  "1f935-1f3fe": "person-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc": "person-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd": "person-in-tuxedo-medium-skin-tone",
  "1f939": "person-juggling",
  "1f939-1f3ff": "person-juggling-dark-skin-tone",
  "1f939-1f3fb": "person-juggling-light-skin-tone",
  "1f939-1f3fe": "person-juggling-medium-dark-skin-tone",
  "1f939-1f3fc": "person-juggling-medium-light-skin-tone",
  "1f939-1f3fd": "person-juggling-medium-skin-tone",
  "1f9ce": "person-kneeling",
  "1f9ce-1f3ff": "person-kneeling-dark-skin-tone",
  "1f9ce-200d-27a1": "person-kneeling-facing-right",
  "1f9ce-1f3ff-200d-27a1": "person-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-27a1": "person-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-27a1": "person-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-27a1": "person-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-27a1": "person-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb": "person-kneeling-light-skin-tone",
  "1f9ce-1f3fe": "person-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc": "person-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd": "person-kneeling-medium-skin-tone",
  "1f3cb": "person-lifting-weights",
  "1f3cb-1f3ff": "person-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb": "person-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe": "person-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc": "person-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd": "person-lifting-weights-medium-skin-tone",
  "1f9d1-1f3fb": "person-light-skin-tone",
  "1f9d1-1f3fb-200d-1f9b2": "person-light-skin-tone-bald",
  "1f9d4-1f3fb": "person-light-skin-tone-beard",
  "1f471-1f3fb": "person-light-skin-tone-blond-hair",
  "1f9d1-1f3fb-200d-1f9b1": "person-light-skin-tone-curly-hair",
  "1f9d1-1f3fb-200d-1f9b0": "person-light-skin-tone-red-hair",
  "1f9d1-1f3fb-200d-1f9b3": "person-light-skin-tone-white-hair",
  "1f9d1-1f3fe": "person-medium-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f9b2": "person-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe": "person-medium-dark-skin-tone-beard",
  "1f471-1f3fe": "person-medium-dark-skin-tone-blond-hair",
  "1f9d1-1f3fe-200d-1f9b1": "person-medium-dark-skin-tone-curly-hair",
  "1f9d1-1f3fe-200d-1f9b0": "person-medium-dark-skin-tone-red-hair",
  "1f9d1-1f3fe-200d-1f9b3": "person-medium-dark-skin-tone-white-hair",
  "1f9d1-1f3fc": "person-medium-light-skin-tone",
  "1f9d1-1f3fc-200d-1f9b2": "person-medium-light-skin-tone-bald",
  "1f9d4-1f3fc": "person-medium-light-skin-tone-beard",
  "1f471-1f3fc": "person-medium-light-skin-tone-blond-hair",
  "1f9d1-1f3fc-200d-1f9b1": "person-medium-light-skin-tone-curly-hair",
  "1f9d1-1f3fc-200d-1f9b0": "person-medium-light-skin-tone-red-hair",
  "1f9d1-1f3fc-200d-1f9b3": "person-medium-light-skin-tone-white-hair",
  "1f9d1-1f3fd": "person-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f9b2": "person-medium-skin-tone-bald",
  "1f9d4-1f3fd": "person-medium-skin-tone-beard",
  "1f471-1f3fd": "person-medium-skin-tone-blond-hair",
  "1f9d1-1f3fd-200d-1f9b1": "person-medium-skin-tone-curly-hair",
  "1f9d1-1f3fd-200d-1f9b0": "person-medium-skin-tone-red-hair",
  "1f9d1-1f3fd-200d-1f9b3": "person-medium-skin-tone-white-hair",
  "1f6b5": "person-mountain-biking",
  "1f6b5-1f3ff": "person-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb": "person-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe": "person-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc": "person-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd": "person-mountain-biking-medium-skin-tone",
  "1f93e": "person-playing-handball",
  "1f93e-1f3ff": "person-playing-handball-dark-skin-tone",
  "1f93e-1f3fb": "person-playing-handball-light-skin-tone",
  "1f93e-1f3fe": "person-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc": "person-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd": "person-playing-handball-medium-skin-tone",
  "1f93d": "person-playing-water-polo",
  "1f93d-1f3ff": "person-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb": "person-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe": "person-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc": "person-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd": "person-playing-water-polo-medium-skin-tone",
  "1f64e": "person-pouting",
  "1f64e-1f3ff": "person-pouting-dark-skin-tone",
  "1f64e-1f3fb": "person-pouting-light-skin-tone",
  "1f64e-1f3fe": "person-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc": "person-pouting-medium-light-skin-tone",
  "1f64e-1f3fd": "person-pouting-medium-skin-tone",
  "1f64b": "person-raising-hand",
  "1f64b-1f3ff": "person-raising-hand-dark-skin-tone",
  "1f64b-1f3fb": "person-raising-hand-light-skin-tone",
  "1f64b-1f3fe": "person-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc": "person-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd": "person-raising-hand-medium-skin-tone",
  "1f9d1-200d-1f9b0": "person-red-hair",
  "1f6a3": "person-rowing-boat",
  "1f6a3-1f3ff": "person-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb": "person-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe": "person-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc": "person-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd": "person-rowing-boat-medium-skin-tone",
  "1f3c3": "person-running",
  "1f3c3-1f3ff": "person-running-dark-skin-tone",
  "1f3c3-200d-27a1": "person-running-facing-right",
  "1f3c3-1f3ff-200d-27a1": "person-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-27a1": "person-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-27a1": "person-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-27a1": "person-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-27a1": "person-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb": "person-running-light-skin-tone",
  "1f3c3-1f3fe": "person-running-medium-dark-skin-tone",
  "1f3c3-1f3fc": "person-running-medium-light-skin-tone",
  "1f3c3-1f3fd": "person-running-medium-skin-tone",
  "1f937": "person-shrugging",
  "1f937-1f3ff": "person-shrugging-dark-skin-tone",
  "1f937-1f3fb": "person-shrugging-light-skin-tone",
  "1f937-1f3fe": "person-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc": "person-shrugging-medium-light-skin-tone",
  "1f937-1f3fd": "person-shrugging-medium-skin-tone",
  "1f9cd": "person-standing",
  "1f9cd-1f3ff": "person-standing-dark-skin-tone",
  "1f9cd-1f3fb": "person-standing-light-skin-tone",
  "1f9cd-1f3fe": "person-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc": "person-standing-medium-light-skin-tone",
  "1f9cd-1f3fd": "person-standing-medium-skin-tone",
  "1f3c4": "person-surfing",
  "1f3c4-1f3ff": "person-surfing-dark-skin-tone",
  "1f3c4-1f3fb": "person-surfing-light-skin-tone",
  "1f3c4-1f3fe": "person-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc": "person-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd": "person-surfing-medium-skin-tone",
  "1f3ca": "person-swimming",
  "1f3ca-1f3ff": "person-swimming-dark-skin-tone",
  "1f3ca-1f3fb": "person-swimming-light-skin-tone",
  "1f3ca-1f3fe": "person-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc": "person-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd": "person-swimming-medium-skin-tone",
  "1f6c0": "person-taking-bath",
  "1f6c0-1f3ff": "person-taking-bath-dark-skin-tone",
  "1f6c0-1f3fb": "person-taking-bath-light-skin-tone",
  "1f6c0-1f3fe": "person-taking-bath-medium-dark-skin-tone",
  "1f6c0-1f3fc": "person-taking-bath-medium-light-skin-tone",
  "1f6c0-1f3fd": "person-taking-bath-medium-skin-tone",
  "1f481": "person-tipping-hand",
  "1f481-1f3ff": "person-tipping-hand-dark-skin-tone",
  "1f481-1f3fb": "person-tipping-hand-light-skin-tone",
  "1f481-1f3fe": "person-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc": "person-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd": "person-tipping-hand-medium-skin-tone",
  "1f6b6": "person-walking",
  "1f6b6-1f3ff": "person-walking-dark-skin-tone",
  "1f6b6-200d-27a1": "person-walking-facing-right",
  "1f6b6-1f3ff-200d-27a1": "person-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-27a1": "person-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-27a1": "person-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-27a1": "person-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-27a1": "person-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb": "person-walking-light-skin-tone",
  "1f6b6-1f3fe": "person-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc": "person-walking-medium-light-skin-tone",
  "1f6b6-1f3fd": "person-walking-medium-skin-tone",
  "1f473": "person-wearing-turban",
  "1f473-1f3ff": "person-wearing-turban-dark-skin-tone",
  "1f473-1f3fb": "person-wearing-turban-light-skin-tone",
  "1f473-1f3fe": "person-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc": "person-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd": "person-wearing-turban-medium-skin-tone",
  "1f9d1-200d-1f9b3": "person-white-hair",
  "1fac5": "person-with-crown",
  "1fac5-1f3ff": "person-with-crown-dark-skin-tone",
  "1fac5-1f3fb": "person-with-crown-light-skin-tone",
  "1fac5-1f3fe": "person-with-crown-medium-dark-skin-tone",
  "1fac5-1f3fc": "person-with-crown-medium-light-skin-tone",
  "1fac5-1f3fd": "person-with-crown-medium-skin-tone",
  "1f472": "person-with-skullcap",
  "1f472-1f3ff": "person-with-skullcap-dark-skin-tone",
  "1f472-1f3fb": "person-with-skullcap-light-skin-tone",
  "1f472-1f3fe": "person-with-skullcap-medium-dark-skin-tone",
  "1f472-1f3fc": "person-with-skullcap-medium-light-skin-tone",
  "1f472-1f3fd": "person-with-skullcap-medium-skin-tone",
  "1f470": "person-with-veil",
  "1f470-1f3ff": "person-with-veil-dark-skin-tone",
  "1f470-1f3fb": "person-with-veil-light-skin-tone",
  "1f470-1f3fe": "person-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc": "person-with-veil-medium-light-skin-tone",
  "1f470-1f3fd": "person-with-veil-medium-skin-tone",
  "1f9d1-200d-1f9af": "person-with-white-cane",
  "1f9d1-1f3ff-200d-1f9af": "person-with-white-cane-dark-skin-tone",
  "1f9d1-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right",
  "1f9d1-1f3ff-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9af": "person-with-white-cane-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9af": "person-with-white-cane-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9af": "person-with-white-cane-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9af": "person-with-white-cane-medium-skin-tone",
  "1f9eb": "petri-dish",
  "1f426-200d-1f525": "phoenix",
  "26cf": "pick",
  "1f6fb": "pickup-truck",
  "1f967": "pie",
  "1f416": "pig",
  "1f437": "pig-face",
  "1f43d": "pig-nose",
  "1f4a9": "pile-of-poo",
  "1f48a": "pill",
  "1f9d1-200d-2708": "pilot",
  "1f9d1-1f3ff-200d-2708": "pilot-dark-skin-tone",
  "1f9d1-1f3fb-200d-2708": "pilot-light-skin-tone",
  "1f9d1-1f3fe-200d-2708": "pilot-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2708": "pilot-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2708": "pilot-medium-skin-tone",
  "1fa85": "pinata",
  "1f90c": "pinched-fingers",
  "1f90c-1f3ff": "pinched-fingers-dark-skin-tone",
  "1f90c-1f3fb": "pinched-fingers-light-skin-tone",
  "1f90c-1f3fe": "pinched-fingers-medium-dark-skin-tone",
  "1f90c-1f3fc": "pinched-fingers-medium-light-skin-tone",
  "1f90c-1f3fd": "pinched-fingers-medium-skin-tone",
  "1f90f": "pinching-hand",
  "1f90f-1f3ff": "pinching-hand-dark-skin-tone",
  "1f90f-1f3fb": "pinching-hand-light-skin-tone",
  "1f90f-1f3fe": "pinching-hand-medium-dark-skin-tone",
  "1f90f-1f3fc": "pinching-hand-medium-light-skin-tone",
  "1f90f-1f3fd": "pinching-hand-medium-skin-tone",
  "1f38d": "pine-decoration",
  "1f34d": "pineapple",
  "1f3d3": "ping-pong",
  "1fa77": "pink-heart",
  "1f3f4-200d-2620": "pirate-flag",
  "1f355": "pizza",
  "1faa7": "placard",
  "1f6d0": "place-of-worship",
  "25b6": "play-button",
  "23ef": "play-or-pause-button",
  "1f6dd": "playground-slide",
  "1f97a": "pleading-face",
  "1faa0": "plunger",
  "1f43b-200d-2744": "polar-bear",
  "1f693": "police-car",
  "1f6a8": "police-car-light",
  "1f46e": "police-officer",
  "1f46e-1f3ff": "police-officer-dark-skin-tone",
  "1f46e-1f3fb": "police-officer-light-skin-tone",
  "1f46e-1f3fe": "police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc": "police-officer-medium-light-skin-tone",
  "1f46e-1f3fd": "police-officer-medium-skin-tone",
  "1f429": "poodle",
  "1f3b1": "pool-8-ball",
  "1f37f": "popcorn",
  "1f3e4": "post-office",
  "1f4ef": "postal-horn",
  "1f4ee": "postbox",
  "1f372": "pot-of-food",
  "1f6b0": "potable-water",
  "1f954": "potato",
  "1fab4": "potted-plant",
  "1f357": "poultry-leg",
  "1f4b7": "pound-banknote",
  "1fad7": "pouring-liquid",
  "1f63e": "pouting-cat",
  "1f4ff": "prayer-beads",
  "1fac3": "pregnant-man",
  "1fac3-1f3ff": "pregnant-man-dark-skin-tone",
  "1fac3-1f3fb": "pregnant-man-light-skin-tone",
  "1fac3-1f3fe": "pregnant-man-medium-dark-skin-tone",
  "1fac3-1f3fc": "pregnant-man-medium-light-skin-tone",
  "1fac3-1f3fd": "pregnant-man-medium-skin-tone",
  "1fac4": "pregnant-person",
  "1fac4-1f3ff": "pregnant-person-dark-skin-tone",
  "1fac4-1f3fb": "pregnant-person-light-skin-tone",
  "1fac4-1f3fe": "pregnant-person-medium-dark-skin-tone",
  "1fac4-1f3fc": "pregnant-person-medium-light-skin-tone",
  "1fac4-1f3fd": "pregnant-person-medium-skin-tone",
  "1f930": "pregnant-woman",
  "1f930-1f3ff": "pregnant-woman-dark-skin-tone",
  "1f930-1f3fb": "pregnant-woman-light-skin-tone",
  "1f930-1f3fe": "pregnant-woman-medium-dark-skin-tone",
  "1f930-1f3fc": "pregnant-woman-medium-light-skin-tone",
  "1f930-1f3fd": "pregnant-woman-medium-skin-tone",
  "1f968": "pretzel",
  "1f934": "prince",
  "1f934-1f3ff": "prince-dark-skin-tone",
  "1f934-1f3fb": "prince-light-skin-tone",
  "1f934-1f3fe": "prince-medium-dark-skin-tone",
  "1f934-1f3fc": "prince-medium-light-skin-tone",
  "1f934-1f3fd": "prince-medium-skin-tone",
  "1f478": "princess",
  "1f478-1f3ff": "princess-dark-skin-tone",
  "1f478-1f3fb": "princess-light-skin-tone",
  "1f478-1f3fe": "princess-medium-dark-skin-tone",
  "1f478-1f3fc": "princess-medium-light-skin-tone",
  "1f478-1f3fd": "princess-medium-skin-tone",
  "1f5a8": "printer",
  "1f6ab": "prohibited",
  "1f7e3": "purple-circle",
  "1f49c": "purple-heart",
  "1f7ea": "purple-square",
  "1f45b": "purse",
  "1f4cc": "pushpin",
  "1f9e9": "puzzle-piece",
  "1f407": "rabbit",
  "1f430": "rabbit-face",
  "1f99d": "raccoon",
  "1f3ce": "racing-car",
  "1f4fb": "radio",
  "1f518": "radio-button",
  "1f683": "railway-car",
  "1f6e4": "railway-track",
  "1f308": "rainbow",
  "1f3f3-200d-1f308": "rainbow-flag",
  "1f91a": "raised-back-of-hand",
  "1f91a-1f3ff": "raised-back-of-hand-dark-skin-tone",
  "1f91a-1f3fb": "raised-back-of-hand-light-skin-tone",
  "1f91a-1f3fe": "raised-back-of-hand-medium-dark-skin-tone",
  "1f91a-1f3fc": "raised-back-of-hand-medium-light-skin-tone",
  "1f91a-1f3fd": "raised-back-of-hand-medium-skin-tone",
  "270a": "raised-fist",
  "270a-1f3ff": "raised-fist-dark-skin-tone",
  "270a-1f3fb": "raised-fist-light-skin-tone",
  "270a-1f3fe": "raised-fist-medium-dark-skin-tone",
  "270a-1f3fc": "raised-fist-medium-light-skin-tone",
  "270a-1f3fd": "raised-fist-medium-skin-tone",
  "270b": "raised-hand",
  "270b-1f3ff": "raised-hand-dark-skin-tone",
  "270b-1f3fb": "raised-hand-light-skin-tone",
  "270b-1f3fe": "raised-hand-medium-dark-skin-tone",
  "270b-1f3fc": "raised-hand-medium-light-skin-tone",
  "270b-1f3fd": "raised-hand-medium-skin-tone",
  "1f64c": "raising-hands",
  "1f64c-1f3ff": "raising-hands-dark-skin-tone",
  "1f64c-1f3fb": "raising-hands-light-skin-tone",
  "1f64c-1f3fe": "raising-hands-medium-dark-skin-tone",
  "1f64c-1f3fc": "raising-hands-medium-light-skin-tone",
  "1f64c-1f3fd": "raising-hands-medium-skin-tone",
  "1f40f": "ram",
  "1f400": "rat",
  "1fa92": "razor",
  "1f9fe": "receipt",
  "23fa": "record-button",
  "267b": "recycling-symbol",
  "1f34e": "red-apple",
  "1f534": "red-circle",
  "1f9e7": "red-envelope",
  "1f3ee": "red-paper-lantern",
  "1f7e5": "red-square",
  "1f53b": "red-triangle-pointed-down",
  "1f53a": "red-triangle-pointed-up",
  "00ae": "registered",
  "1f60c": "relieved-face",
  "1f397": "reminder-ribbon",
  "1f501": "repeat-button",
  "1f502": "repeat-single-button",
  "26d1": "rescue-workers-helmet",
  "1f6bb": "restroom",
  "25c0": "reverse-button",
  "1f49e": "revolving-hearts",
  "1f98f": "rhinoceros",
  "1f380": "ribbon",
  "1f359": "rice-ball",
  "1f358": "rice-cracker",
  "1f5ef": "right-anger-bubble",
  "27a1": "right-arrow",
  "21a9": "right-arrow-curving-left",
  "1f91c": "right-facing-fist",
  "1f91c-1f3ff": "right-facing-fist-dark-skin-tone",
  "1f91c-1f3fb": "right-facing-fist-light-skin-tone",
  "1f91c-1f3fe": "right-facing-fist-medium-dark-skin-tone",
  "1f91c-1f3fc": "right-facing-fist-medium-light-skin-tone",
  "1f91c-1f3fd": "right-facing-fist-medium-skin-tone",
  "1faf1": "rightwards-hand",
  "1faf1-1f3ff": "rightwards-hand-dark-skin-tone",
  "1faf1-1f3fb": "rightwards-hand-light-skin-tone",
  "1faf1-1f3fe": "rightwards-hand-medium-dark-skin-tone",
  "1faf1-1f3fc": "rightwards-hand-medium-light-skin-tone",
  "1faf1-1f3fd": "rightwards-hand-medium-skin-tone",
  "1faf8": "rightwards-pushing-hand",
  "1faf8-1f3ff": "rightwards-pushing-hand-dark-skin-tone",
  "1faf8-1f3fb": "rightwards-pushing-hand-light-skin-tone",
  "1faf8-1f3fe": "rightwards-pushing-hand-medium-dark-skin-tone",
  "1faf8-1f3fc": "rightwards-pushing-hand-medium-light-skin-tone",
  "1faf8-1f3fd": "rightwards-pushing-hand-medium-skin-tone",
  "1f48d": "ring",
  "1f6df": "ring-buoy",
  "1fa90": "ringed-planet",
  "1f360": "roasted-sweet-potato",
  "1f916": "robot",
  "1faa8": "rock",
  "1f680": "rocket",
  "1f9fb": "roll-of-paper",
  "1f5de": "rolled-up-newspaper",
  "1f3a2": "roller-coaster",
  "1f6fc": "roller-skate",
  "1f923": "rolling-on-the-floor-laughing",
  "1f413": "rooster",
  "1f339": "rose",
  "1f3f5": "rosette",
  "1f4cd": "round-pushpin",
  "1f3c9": "rugby-football",
  "1f3bd": "running-shirt",
  "1f45f": "running-shoe",
  "1f625": "sad-but-relieved-face",
  "1f9f7": "safety-pin",
  "1f9ba": "safety-vest",
  "26f5": "sailboat",
  "1f376": "sake",
  "1f9c2": "salt",
  "1fae1": "saluting-face",
  "1f96a": "sandwich",
  "1f385": "santa-claus",
  "1f385-1f3ff": "santa-claus-dark-skin-tone",
  "1f385-1f3fb": "santa-claus-light-skin-tone",
  "1f385-1f3fe": "santa-claus-medium-dark-skin-tone",
  "1f385-1f3fc": "santa-claus-medium-light-skin-tone",
  "1f385-1f3fd": "santa-claus-medium-skin-tone",
  "1f97b": "sari",
  "1f6f0": "satellite",
  "1f4e1": "satellite-antenna",
  "1f995": "sauropod",
  "1f3b7": "saxophone",
  "1f9e3": "scarf",
  "1f3eb": "school",
  "1f9d1-200d-1f52c": "scientist",
  "1f9d1-1f3ff-200d-1f52c": "scientist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f52c": "scientist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f52c": "scientist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f52c": "scientist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f52c": "scientist-medium-skin-tone",
  "264f": "scorpio",
  "1f982": "scorpion",
  "1fa9b": "screwdriver",
  "1f4dc": "scroll",
  "1f9ad": "seal",
  "1f4ba": "seat",
  "1f648": "see-no-evil-monkey",
  "1f331": "seedling",
  "1f933": "selfie",
  "1f933-1f3ff": "selfie-dark-skin-tone",
  "1f933-1f3fb": "selfie-light-skin-tone",
  "1f933-1f3fe": "selfie-medium-dark-skin-tone",
  "1f933-1f3fc": "selfie-medium-light-skin-tone",
  "1f933-1f3fd": "selfie-medium-skin-tone",
  "1f415-200d-1f9ba": "service-dog",
  "1f556": "seven-oclock",
  "1f562": "seven-thirty",
  "1faa1": "sewing-needle",
  "1fae8": "shaking-face",
  "1f958": "shallow-pan-of-food",
  "1f988": "shark",
  "1f367": "shaved-ice",
  "1f33e": "sheaf-of-rice",
  "1f6e1": "shield",
  "26e9": "shinto-shrine",
  "1f6a2": "ship",
  "1f320": "shooting-star",
  "1f6cd": "shopping-bags",
  "1f6d2": "shopping-cart",
  "1f370": "shortcake",
  "1fa73": "shorts",
  "1f6bf": "shower",
  "1f990": "shrimp",
  "1f500": "shuffle-tracks-button",
  "1f92b": "shushing-face",
  "1f918": "sign-of-the-horns",
  "1f918-1f3ff": "sign-of-the-horns-dark-skin-tone",
  "1f918-1f3fb": "sign-of-the-horns-light-skin-tone",
  "1f918-1f3fe": "sign-of-the-horns-medium-dark-skin-tone",
  "1f918-1f3fc": "sign-of-the-horns-medium-light-skin-tone",
  "1f918-1f3fd": "sign-of-the-horns-medium-skin-tone",
  "1f9d1-200d-1f3a4": "singer",
  "1f9d1-1f3ff-200d-1f3a4": "singer-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3a4": "singer-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3a4": "singer-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3a4": "singer-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3a4": "singer-medium-skin-tone",
  "1f555": "six-oclock",
  "1f561": "six-thirty",
  "1f6f9": "skateboard",
  "26f7": "skier",
  "1f3bf": "skis",
  "1f480": "skull",
  "1f9a8": "skunk",
  "1f6f7": "sled",
  "1f634": "sleeping-face",
  "1f62a": "sleepy-face",
  "1f641": "slightly-frowning-face",
  "1f642": "slightly-smiling-face",
  "1f3b0": "slot-machine",
  "1f9a5": "sloth",
  "1f6e9": "small-airplane",
  "1f539": "small-blue-diamond",
  "1f538": "small-orange-diamond",
  "1f63b": "smiling-cat-with-heart-eyes",
  "263a": "smiling-face",
  "1f607": "smiling-face-with-halo",
  "1f60d": "smiling-face-with-heart-eyes",
  "1f970": "smiling-face-with-hearts",
  "1f608": "smiling-face-with-horns",
  "1f917": "smiling-face-with-open-hands",
  "1f60a": "smiling-face-with-smiling-eyes",
  "1f60e": "smiling-face-with-sunglasses",
  "1f972": "smiling-face-with-tear",
  "1f60f": "smirking-face",
  "1f40c": "snail",
  "1f40d": "snake",
  "1f927": "sneezing-face",
  "1f3d4": "snow-capped-mountain",
  "1f3c2": "snowboarder",
  "1f3c2-1f3ff": "snowboarder-dark-skin-tone",
  "1f3c2-1f3fb": "snowboarder-light-skin-tone",
  "1f3c2-1f3fe": "snowboarder-medium-dark-skin-tone",
  "1f3c2-1f3fc": "snowboarder-medium-light-skin-tone",
  "1f3c2-1f3fd": "snowboarder-medium-skin-tone",
  "26c4": "snowman-without-snow",
  "1f9fc": "soap",
  "26bd": "soccer-ball",
  "1f9e6": "socks",
  "1f366": "soft-ice-cream",
  "1f94e": "softball",
  "1f51c": "soon-arrow",
  "1f198": "sos-button",
  "1f35d": "spaghetti",
  "1f387": "sparkler",
  "1f496": "sparkling-heart",
  "1f64a": "speak-no-evil-monkey",
  "1f50a": "speaker-high-volume",
  "1f508": "speaker-low-volume",
  "1f509": "speaker-medium-volume",
  "1f5e3": "speaking-head",
  "1f4ac": "speech-balloon",
  "1f6a4": "speedboat",
  "1f577": "spider",
  "1f578": "spider-web",
  "1f5d3": "spiral-calendar",
  "1f5d2": "spiral-notepad",
  "1f41a": "spiral-shell",
  "1f9fd": "sponge",
  "1f944": "spoon",
  "1f699": "sport-utility-vehicle",
  "1f3c5": "sports-medal",
  "1f433": "spouting-whale",
  "1f991": "squid",
  "1f61d": "squinting-face-with-tongue",
  "1f3df": "stadium",
  "2b50": "star",
  "262a": "star-and-crescent",
  "1f929": "star-struck",
  "1f689": "station",
  "1f5fd": "statue-of-liberty",
  "1f35c": "steaming-bowl",
  "1fa7a": "stethoscope",
  "23f9": "stop-button",
  "1f6d1": "stop-sign",
  "23f1": "stopwatch",
  "1f4cf": "straight-ruler",
  "1f353": "strawberry",
  "1f9d1-200d-1f393": "student",
  "1f9d1-1f3ff-200d-1f393": "student-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f393": "student-light-skin-tone",
  "1f9d1-1f3fe-200d-1f393": "student-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f393": "student-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f393": "student-medium-skin-tone",
  "1f399": "studio-microphone",
  "1f959": "stuffed-flatbread",
  "26c5": "sun-behind-cloud",
  "1f325": "sun-behind-large-cloud",
  "1f326": "sun-behind-rain-cloud",
  "1f324": "sun-behind-small-cloud",
  "1f31e": "sun-with-face",
  "1f33b": "sunflower",
  "1f576": "sunglasses",
  "1f305": "sunrise",
  "1f304": "sunrise-over-mountains",
  "1f307": "sunset",
  "1f9b8": "superhero",
  "1f9b8-1f3ff": "superhero-dark-skin-tone",
  "1f9b8-1f3fb": "superhero-light-skin-tone",
  "1f9b8-1f3fe": "superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc": "superhero-medium-light-skin-tone",
  "1f9b8-1f3fd": "superhero-medium-skin-tone",
  "1f9b9": "supervillain",
  "1f9b9-1f3ff": "supervillain-dark-skin-tone",
  "1f9b9-1f3fb": "supervillain-light-skin-tone",
  "1f9b9-1f3fe": "supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc": "supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd": "supervillain-medium-skin-tone",
  "1f363": "sushi",
  "1f69f": "suspension-railway",
  "1f9a2": "swan",
  "1f4a6": "sweat-droplets",
  "1f54d": "synagogue",
  "1f489": "syringe",
  "1f996": "t-rex",
  "1f455": "t-shirt",
  "1f32e": "taco",
  "1f961": "takeout-box",
  "1fad4": "tamale",
  "1f38b": "tanabata-tree",
  "1f34a": "tangerine",
  "1f695": "taxi",
  "1f9d1-200d-1f3eb": "teacher",
  "1f9d1-1f3ff-200d-1f3eb": "teacher-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3eb": "teacher-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3eb": "teacher-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3eb": "teacher-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3eb": "teacher-medium-skin-tone",
  "1f375": "teacup-without-handle",
  "1fad6": "teapot",
  "1f4c6": "tear-off-calendar",
  "1f9d1-200d-1f4bb": "technologist",
  "1f9d1-1f3ff-200d-1f4bb": "technologist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f4bb": "technologist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f4bb": "technologist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f4bb": "technologist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f4bb": "technologist-medium-skin-tone",
  "1f9f8": "teddy-bear",
  "260e": "telephone",
  "1f4de": "telephone-receiver",
  "1f52d": "telescope",
  "1f4fa": "television",
  "1f559": "ten-oclock",
  "1f565": "ten-thirty",
  "1f3be": "tennis",
  "26fa": "tent",
  "1f9ea": "test-tube",
  "1f321": "thermometer",
  "1f914": "thinking-face",
  "1fa74": "thong-sandal",
  "1f4ad": "thought-balloon",
  "1f9f5": "thread",
  "1f552": "three-oclock",
  "1f55e": "three-thirty",
  "1f44e": "thumbs-down",
  "1f44e-1f3ff": "thumbs-down-dark-skin-tone",
  "1f44e-1f3fb": "thumbs-down-light-skin-tone",
  "1f44e-1f3fe": "thumbs-down-medium-dark-skin-tone",
  "1f44e-1f3fc": "thumbs-down-medium-light-skin-tone",
  "1f44e-1f3fd": "thumbs-down-medium-skin-tone",
  "1f44d": "thumbs-up",
  "1f44d-1f3ff": "thumbs-up-dark-skin-tone",
  "1f44d-1f3fb": "thumbs-up-light-skin-tone",
  "1f44d-1f3fe": "thumbs-up-medium-dark-skin-tone",
  "1f44d-1f3fc": "thumbs-up-medium-light-skin-tone",
  "1f44d-1f3fd": "thumbs-up-medium-skin-tone",
  "1f3ab": "ticket",
  "1f405": "tiger",
  "1f42f": "tiger-face",
  "23f2": "timer-clock",
  "1f62b": "tired-face",
  "1f6bd": "toilet",
  "1f5fc": "tokyo-tower",
  "1f345": "tomato",
  "1f445": "tongue",
  "1f9f0": "toolbox",
  "1f9b7": "tooth",
  "1faa5": "toothbrush",
  "1f51d": "top-arrow",
  "1f3a9": "top-hat",
  "1f32a": "tornado",
  "1f5b2": "trackball",
  "1f69c": "tractor",
  "1f686": "train",
  "1f68a": "tram",
  "1f68b": "tram-car",
  "1f3f3-200d-26a7": "transgender-flag",
  "26a7": "transgender-symbol",
  "1f6a9": "triangular-flag",
  "1f4d0": "triangular-ruler",
  "1f531": "trident-emblem",
  "1f9cc": "troll",
  "1f68e": "trolleybus",
  "1f3c6": "trophy",
  "1f379": "tropical-drink",
  "1f420": "tropical-fish",
  "1f3ba": "trumpet",
  "1f337": "tulip",
  "1f943": "tumbler-glass",
  "1f983": "turkey",
  "1f422": "turtle",
  "1f55b": "twelve-oclock",
  "1f567": "twelve-thirty",
  "1f495": "two-hearts",
  "1f42b": "two-hump-camel",
  "1f551": "two-oclock",
  "1f55d": "two-thirty",
  "26f1": "umbrella-on-ground",
  "1f612": "unamused-face",
  "1f984": "unicorn",
  "fe82b": "unknown-flag",
  "1f513": "unlocked",
  "2b06": "up-arrow",
  "1f199": "up-exclamation-button",
  "1f643": "upside-down-face",
  "1f53c": "upwards-button",
  "1f9db": "vampire",
  "1f9db-1f3ff": "vampire-dark-skin-tone",
  "1f9db-1f3fb": "vampire-light-skin-tone",
  "1f9db-1f3fe": "vampire-medium-dark-skin-tone",
  "1f9db-1f3fc": "vampire-medium-light-skin-tone",
  "1f9db-1f3fd": "vampire-medium-skin-tone",
  "1f6a6": "vertical-traffic-light",
  "1f4f3": "vibration-mode",
  "270c": "victory-hand",
  "270c-1f3ff": "victory-hand-dark-skin-tone",
  "270c-1f3fb": "victory-hand-light-skin-tone",
  "270c-1f3fe": "victory-hand-medium-dark-skin-tone",
  "270c-1f3fc": "victory-hand-medium-light-skin-tone",
  "270c-1f3fd": "victory-hand-medium-skin-tone",
  "1f4f9": "video-camera",
  "1f3ae": "video-game",
  "1f4fc": "videocassette",
  "1f3bb": "violin",
  "264d": "virgo",
  "1f30b": "volcano",
  "1f3d0": "volleyball",
  "1f19a": "vs-button",
  "1f596": "vulcan-salute",
  "1f596-1f3ff": "vulcan-salute-dark-skin-tone",
  "1f596-1f3fb": "vulcan-salute-light-skin-tone",
  "1f596-1f3fe": "vulcan-salute-medium-dark-skin-tone",
  "1f596-1f3fc": "vulcan-salute-medium-light-skin-tone",
  "1f596-1f3fd": "vulcan-salute-medium-skin-tone",
  "1f9c7": "waffle",
  "1f318": "waning-crescent-moon",
  "1f316": "waning-gibbous-moon",
  "26a0": "warning",
  "1f5d1": "wastebasket",
  "231a": "watch",
  "1f403": "water-buffalo",
  "1f6be": "water-closet",
  "1f52b": "water-pistol",
  "1f30a": "water-wave",
  "1f349": "watermelon",
  "1f44b": "waving-hand",
  "1f44b-1f3ff": "waving-hand-dark-skin-tone",
  "1f44b-1f3fb": "waving-hand-light-skin-tone",
  "1f44b-1f3fe": "waving-hand-medium-dark-skin-tone",
  "1f44b-1f3fc": "waving-hand-medium-light-skin-tone",
  "1f44b-1f3fd": "waving-hand-medium-skin-tone",
  "1f312": "waxing-crescent-moon",
  "1f314": "waxing-gibbous-moon",
  "1f640": "weary-cat",
  "1f629": "weary-face",
  "1f492": "wedding",
  "1f40b": "whale",
  "1f6de": "wheel",
  "267f": "wheelchair-symbol",
  "1f9af": "white-cane",
  "26aa": "white-circle",
  "1f3f3": "white-flag",
  "1f4ae": "white-flower",
  "1f90d": "white-heart",
  "2b1c": "white-large-square",
  "25fd": "white-medium-small-square",
  "25fb": "white-medium-square",
  "25ab": "white-small-square",
  "1f533": "white-square-button",
  "1f940": "wilted-flower",
  "1f390": "wind-chime",
  "1f32c": "wind-face",
  "1fa9f": "window",
  "1f377": "wine-glass",
  "1fabd": "wing",
  "1f609": "winking-face",
  "1f61c": "winking-face-with-tongue",
  "1f6dc": "wireless",
  "1f43a": "wolf",
  "1f469": "woman",
  "1f46b": "woman-and-man-holding-hands",
  "1f46b-1f3ff": "woman-and-man-holding-hands-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46b-1f3fb": "woman-and-man-holding-hands-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46b-1f3fe": "woman-and-man-holding-hands-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46b-1f3fc": "woman-and-man-holding-hands-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46b-1f3fd": "woman-and-man-holding-hands-medium-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-1f3a8": "woman-artist",
  "1f469-1f3ff-200d-1f3a8": "woman-artist-dark-skin-tone",
  "1f469-1f3fb-200d-1f3a8": "woman-artist-light-skin-tone",
  "1f469-1f3fe-200d-1f3a8": "woman-artist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3a8": "woman-artist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3a8": "woman-artist-medium-skin-tone",
  "1f469-200d-1f680": "woman-astronaut",
  "1f469-1f3ff-200d-1f680": "woman-astronaut-dark-skin-tone",
  "1f469-1f3fb-200d-1f680": "woman-astronaut-light-skin-tone",
  "1f469-1f3fe-200d-1f680": "woman-astronaut-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f680": "woman-astronaut-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f680": "woman-astronaut-medium-skin-tone",
  "1f469-200d-1f9b2": "woman-bald",
  "1f9d4-200d-2640": "woman-beard",
  "1f6b4-200d-2640": "woman-biking",
  "1f6b4-1f3ff-200d-2640": "woman-biking-dark-skin-tone",
  "1f6b4-1f3fb-200d-2640": "woman-biking-light-skin-tone",
  "1f6b4-1f3fe-200d-2640": "woman-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc-200d-2640": "woman-biking-medium-light-skin-tone",
  "1f6b4-1f3fd-200d-2640": "woman-biking-medium-skin-tone",
  "1f471-200d-2640": "woman-blond-hair",
  "26f9-200d-2640": "woman-bouncing-ball",
  "26f9-1f3ff-200d-2640": "woman-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb-200d-2640": "woman-bouncing-ball-light-skin-tone",
  "26f9-1f3fe-200d-2640": "woman-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc-200d-2640": "woman-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd-200d-2640": "woman-bouncing-ball-medium-skin-tone",
  "1f647-200d-2640": "woman-bowing",
  "1f647-1f3ff-200d-2640": "woman-bowing-dark-skin-tone",
  "1f647-1f3fb-200d-2640": "woman-bowing-light-skin-tone",
  "1f647-1f3fe-200d-2640": "woman-bowing-medium-dark-skin-tone",
  "1f647-1f3fc-200d-2640": "woman-bowing-medium-light-skin-tone",
  "1f647-1f3fd-200d-2640": "woman-bowing-medium-skin-tone",
  "1f938-200d-2640": "woman-cartwheeling",
  "1f938-1f3ff-200d-2640": "woman-cartwheeling-dark-skin-tone",
  "1f938-1f3fb-200d-2640": "woman-cartwheeling-light-skin-tone",
  "1f938-1f3fe-200d-2640": "woman-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc-200d-2640": "woman-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd-200d-2640": "woman-cartwheeling-medium-skin-tone",
  "1f9d7-200d-2640": "woman-climbing",
  "1f9d7-1f3ff-200d-2640": "woman-climbing-dark-skin-tone",
  "1f9d7-1f3fb-200d-2640": "woman-climbing-light-skin-tone",
  "1f9d7-1f3fe-200d-2640": "woman-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc-200d-2640": "woman-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd-200d-2640": "woman-climbing-medium-skin-tone",
  "1f477-200d-2640": "woman-construction-worker",
  "1f477-1f3ff-200d-2640": "woman-construction-worker-dark-skin-tone",
  "1f477-1f3fb-200d-2640": "woman-construction-worker-light-skin-tone",
  "1f477-1f3fe-200d-2640": "woman-construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc-200d-2640": "woman-construction-worker-medium-light-skin-tone",
  "1f477-1f3fd-200d-2640": "woman-construction-worker-medium-skin-tone",
  "1f469-200d-1f373": "woman-cook",
  "1f469-1f3ff-200d-1f373": "woman-cook-dark-skin-tone",
  "1f469-1f3fb-200d-1f373": "woman-cook-light-skin-tone",
  "1f469-1f3fe-200d-1f373": "woman-cook-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f373": "woman-cook-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f373": "woman-cook-medium-skin-tone",
  "1f469-200d-1f9b1": "woman-curly-hair",
  "1f483": "woman-dancing",
  "1f483-1f3ff": "woman-dancing-dark-skin-tone",
  "1f483-1f3fb": "woman-dancing-light-skin-tone",
  "1f483-1f3fe": "woman-dancing-medium-dark-skin-tone",
  "1f483-1f3fc": "woman-dancing-medium-light-skin-tone",
  "1f483-1f3fd": "woman-dancing-medium-skin-tone",
  "1f469-1f3ff": "woman-dark-skin-tone",
  "1f469-1f3ff-200d-1f9b2": "woman-dark-skin-tone-bald",
  "1f9d4-1f3ff-200d-2640": "woman-dark-skin-tone-beard",
  "1f471-1f3ff-200d-2640": "woman-dark-skin-tone-blond-hair",
  "1f469-1f3ff-200d-1f9b1": "woman-dark-skin-tone-curly-hair",
  "1f469-1f3ff-200d-1f9b0": "woman-dark-skin-tone-red-hair",
  "1f469-1f3ff-200d-1f9b3": "woman-dark-skin-tone-white-hair",
  "1f575-200d-2640": "woman-detective",
  "1f575-1f3ff-200d-2640": "woman-detective-dark-skin-tone",
  "1f575-1f3fb-200d-2640": "woman-detective-light-skin-tone",
  "1f575-1f3fe-200d-2640": "woman-detective-medium-dark-skin-tone",
  "1f575-1f3fc-200d-2640": "woman-detective-medium-light-skin-tone",
  "1f575-1f3fd-200d-2640": "woman-detective-medium-skin-tone",
  "1f9dd-200d-2640": "woman-elf",
  "1f9dd-1f3ff-200d-2640": "woman-elf-dark-skin-tone",
  "1f9dd-1f3fb-200d-2640": "woman-elf-light-skin-tone",
  "1f9dd-1f3fe-200d-2640": "woman-elf-medium-dark-skin-tone",
  "1f9dd-1f3fc-200d-2640": "woman-elf-medium-light-skin-tone",
  "1f9dd-1f3fd-200d-2640": "woman-elf-medium-skin-tone",
  "1f926-200d-2640": "woman-facepalming",
  "1f926-1f3ff-200d-2640": "woman-facepalming-dark-skin-tone",
  "1f926-1f3fb-200d-2640": "woman-facepalming-light-skin-tone",
  "1f926-1f3fe-200d-2640": "woman-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc-200d-2640": "woman-facepalming-medium-light-skin-tone",
  "1f926-1f3fd-200d-2640": "woman-facepalming-medium-skin-tone",
  "1f469-200d-1f3ed": "woman-factory-worker",
  "1f469-1f3ff-200d-1f3ed": "woman-factory-worker-dark-skin-tone",
  "1f469-1f3fb-200d-1f3ed": "woman-factory-worker-light-skin-tone",
  "1f469-1f3fe-200d-1f3ed": "woman-factory-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3ed": "woman-factory-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3ed": "woman-factory-worker-medium-skin-tone",
  "1f9da-200d-2640": "woman-fairy",
  "1f9da-1f3ff-200d-2640": "woman-fairy-dark-skin-tone",
  "1f9da-1f3fb-200d-2640": "woman-fairy-light-skin-tone",
  "1f9da-1f3fe-200d-2640": "woman-fairy-medium-dark-skin-tone",
  "1f9da-1f3fc-200d-2640": "woman-fairy-medium-light-skin-tone",
  "1f9da-1f3fd-200d-2640": "woman-fairy-medium-skin-tone",
  "1f469-200d-1f33e": "woman-farmer",
  "1f469-1f3ff-200d-1f33e": "woman-farmer-dark-skin-tone",
  "1f469-1f3fb-200d-1f33e": "woman-farmer-light-skin-tone",
  "1f469-1f3fe-200d-1f33e": "woman-farmer-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f33e": "woman-farmer-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f33e": "woman-farmer-medium-skin-tone",
  "1f469-200d-1f37c": "woman-feeding-baby",
  "1f469-1f3ff-200d-1f37c": "woman-feeding-baby-dark-skin-tone",
  "1f469-1f3fb-200d-1f37c": "woman-feeding-baby-light-skin-tone",
  "1f469-1f3fe-200d-1f37c": "woman-feeding-baby-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f37c": "woman-feeding-baby-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f37c": "woman-feeding-baby-medium-skin-tone",
  "1f469-200d-1f692": "woman-firefighter",
  "1f469-1f3ff-200d-1f692": "woman-firefighter-dark-skin-tone",
  "1f469-1f3fb-200d-1f692": "woman-firefighter-light-skin-tone",
  "1f469-1f3fe-200d-1f692": "woman-firefighter-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f692": "woman-firefighter-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f692": "woman-firefighter-medium-skin-tone",
  "1f64d-200d-2640": "woman-frowning",
  "1f64d-1f3ff-200d-2640": "woman-frowning-dark-skin-tone",
  "1f64d-1f3fb-200d-2640": "woman-frowning-light-skin-tone",
  "1f64d-1f3fe-200d-2640": "woman-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc-200d-2640": "woman-frowning-medium-light-skin-tone",
  "1f64d-1f3fd-200d-2640": "woman-frowning-medium-skin-tone",
  "1f9de-200d-2640": "woman-genie",
  "1f645-200d-2640": "woman-gesturing-no",
  "1f645-1f3ff-200d-2640": "woman-gesturing-no-dark-skin-tone",
  "1f645-1f3fb-200d-2640": "woman-gesturing-no-light-skin-tone",
  "1f645-1f3fe-200d-2640": "woman-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc-200d-2640": "woman-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd-200d-2640": "woman-gesturing-no-medium-skin-tone",
  "1f646-200d-2640": "woman-gesturing-ok",
  "1f646-1f3ff-200d-2640": "woman-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb-200d-2640": "woman-gesturing-ok-light-skin-tone",
  "1f646-1f3fe-200d-2640": "woman-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc-200d-2640": "woman-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd-200d-2640": "woman-gesturing-ok-medium-skin-tone",
  "1f487-200d-2640": "woman-getting-haircut",
  "1f487-1f3ff-200d-2640": "woman-getting-haircut-dark-skin-tone",
  "1f487-1f3fb-200d-2640": "woman-getting-haircut-light-skin-tone",
  "1f487-1f3fe-200d-2640": "woman-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc-200d-2640": "woman-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd-200d-2640": "woman-getting-haircut-medium-skin-tone",
  "1f486-200d-2640": "woman-getting-massage",
  "1f486-1f3ff-200d-2640": "woman-getting-massage-dark-skin-tone",
  "1f486-1f3fb-200d-2640": "woman-getting-massage-light-skin-tone",
  "1f486-1f3fe-200d-2640": "woman-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc-200d-2640": "woman-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd-200d-2640": "woman-getting-massage-medium-skin-tone",
  "1f3cc-200d-2640": "woman-golfing",
  "1f3cc-1f3ff-200d-2640": "woman-golfing-dark-skin-tone",
  "1f3cc-1f3fb-200d-2640": "woman-golfing-light-skin-tone",
  "1f3cc-1f3fe-200d-2640": "woman-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc-200d-2640": "woman-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd-200d-2640": "woman-golfing-medium-skin-tone",
  "1f482-200d-2640": "woman-guard",
  "1f482-1f3ff-200d-2640": "woman-guard-dark-skin-tone",
  "1f482-1f3fb-200d-2640": "woman-guard-light-skin-tone",
  "1f482-1f3fe-200d-2640": "woman-guard-medium-dark-skin-tone",
  "1f482-1f3fc-200d-2640": "woman-guard-medium-light-skin-tone",
  "1f482-1f3fd-200d-2640": "woman-guard-medium-skin-tone",
  "1f469-200d-2695": "woman-health-worker",
  "1f469-1f3ff-200d-2695": "woman-health-worker-dark-skin-tone",
  "1f469-1f3fb-200d-2695": "woman-health-worker-light-skin-tone",
  "1f469-1f3fe-200d-2695": "woman-health-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2695": "woman-health-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-2695": "woman-health-worker-medium-skin-tone",
  "1f9d8-200d-2640": "woman-in-lotus-position",
  "1f9d8-1f3ff-200d-2640": "woman-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb-200d-2640": "woman-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe-200d-2640": "woman-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc-200d-2640": "woman-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd-200d-2640": "woman-in-lotus-position-medium-skin-tone",
  "1f469-200d-1f9bd": "woman-in-manual-wheelchair",
  "1f469-1f3ff-200d-1f9bd": "woman-in-manual-wheelchair-dark-skin-tone",
  "1f469-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right",
  "1f469-1f3ff-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9bd": "woman-in-manual-wheelchair-light-skin-tone",
  "1f469-1f3fe-200d-1f9bd": "woman-in-manual-wheelchair-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bd": "woman-in-manual-wheelchair-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bd": "woman-in-manual-wheelchair-medium-skin-tone",
  "1f469-200d-1f9bc": "woman-in-motorized-wheelchair",
  "1f469-1f3ff-200d-1f9bc": "woman-in-motorized-wheelchair-dark-skin-tone",
  "1f469-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right",
  "1f469-1f3ff-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9bc": "woman-in-motorized-wheelchair-light-skin-tone",
  "1f469-1f3fe-200d-1f9bc": "woman-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bc": "woman-in-motorized-wheelchair-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bc": "woman-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6-200d-2640": "woman-in-steamy-room",
  "1f9d6-1f3ff-200d-2640": "woman-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb-200d-2640": "woman-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe-200d-2640": "woman-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc-200d-2640": "woman-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd-200d-2640": "woman-in-steamy-room-medium-skin-tone",
  "1f935-200d-2640": "woman-in-tuxedo",
  "1f935-1f3ff-200d-2640": "woman-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb-200d-2640": "woman-in-tuxedo-light-skin-tone",
  "1f935-1f3fe-200d-2640": "woman-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc-200d-2640": "woman-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd-200d-2640": "woman-in-tuxedo-medium-skin-tone",
  "1f469-200d-2696": "woman-judge",
  "1f469-1f3ff-200d-2696": "woman-judge-dark-skin-tone",
  "1f469-1f3fb-200d-2696": "woman-judge-light-skin-tone",
  "1f469-1f3fe-200d-2696": "woman-judge-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2696": "woman-judge-medium-light-skin-tone",
  "1f469-1f3fd-200d-2696": "woman-judge-medium-skin-tone",
  "1f939-200d-2640": "woman-juggling",
  "1f939-1f3ff-200d-2640": "woman-juggling-dark-skin-tone",
  "1f939-1f3fb-200d-2640": "woman-juggling-light-skin-tone",
  "1f939-1f3fe-200d-2640": "woman-juggling-medium-dark-skin-tone",
  "1f939-1f3fc-200d-2640": "woman-juggling-medium-light-skin-tone",
  "1f939-1f3fd-200d-2640": "woman-juggling-medium-skin-tone",
  "1f9ce-200d-2640": "woman-kneeling",
  "1f9ce-1f3ff-200d-2640": "woman-kneeling-dark-skin-tone",
  "1f9ce-200d-2640-200d-27a1": "woman-kneeling-facing-right",
  "1f9ce-1f3ff-200d-2640-200d-27a1": "woman-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-2640-200d-27a1": "woman-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb-200d-2640": "woman-kneeling-light-skin-tone",
  "1f9ce-1f3fe-200d-2640": "woman-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2640": "woman-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2640": "woman-kneeling-medium-skin-tone",
  "1f3cb-200d-2640": "woman-lifting-weights",
  "1f3cb-1f3ff-200d-2640": "woman-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb-200d-2640": "woman-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe-200d-2640": "woman-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc-200d-2640": "woman-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd-200d-2640": "woman-lifting-weights-medium-skin-tone",
  "1f469-1f3fb": "woman-light-skin-tone",
  "1f469-1f3fb-200d-1f9b2": "woman-light-skin-tone-bald",
  "1f9d4-1f3fb-200d-2640": "woman-light-skin-tone-beard",
  "1f471-1f3fb-200d-2640": "woman-light-skin-tone-blond-hair",
  "1f469-1f3fb-200d-1f9b1": "woman-light-skin-tone-curly-hair",
  "1f469-1f3fb-200d-1f9b0": "woman-light-skin-tone-red-hair",
  "1f469-1f3fb-200d-1f9b3": "woman-light-skin-tone-white-hair",
  "1f9d9-200d-2640": "woman-mage",
  "1f9d9-1f3ff-200d-2640": "woman-mage-dark-skin-tone",
  "1f9d9-1f3fb-200d-2640": "woman-mage-light-skin-tone",
  "1f9d9-1f3fe-200d-2640": "woman-mage-medium-dark-skin-tone",
  "1f9d9-1f3fc-200d-2640": "woman-mage-medium-light-skin-tone",
  "1f9d9-1f3fd-200d-2640": "woman-mage-medium-skin-tone",
  "1f469-200d-1f527": "woman-mechanic",
  "1f469-1f3ff-200d-1f527": "woman-mechanic-dark-skin-tone",
  "1f469-1f3fb-200d-1f527": "woman-mechanic-light-skin-tone",
  "1f469-1f3fe-200d-1f527": "woman-mechanic-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f527": "woman-mechanic-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f527": "woman-mechanic-medium-skin-tone",
  "1f469-1f3fe": "woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f9b2": "woman-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe-200d-2640": "woman-medium-dark-skin-tone-beard",
  "1f471-1f3fe-200d-2640": "woman-medium-dark-skin-tone-blond-hair",
  "1f469-1f3fe-200d-1f9b1": "woman-medium-dark-skin-tone-curly-hair",
  "1f469-1f3fe-200d-1f9b0": "woman-medium-dark-skin-tone-red-hair",
  "1f469-1f3fe-200d-1f9b3": "woman-medium-dark-skin-tone-white-hair",
  "1f469-1f3fc": "woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f9b2": "woman-medium-light-skin-tone-bald",
  "1f9d4-1f3fc-200d-2640": "woman-medium-light-skin-tone-beard",
  "1f471-1f3fc-200d-2640": "woman-medium-light-skin-tone-blond-hair",
  "1f469-1f3fc-200d-1f9b1": "woman-medium-light-skin-tone-curly-hair",
  "1f469-1f3fc-200d-1f9b0": "woman-medium-light-skin-tone-red-hair",
  "1f469-1f3fc-200d-1f9b3": "woman-medium-light-skin-tone-white-hair",
  "1f469-1f3fd": "woman-medium-skin-tone",
  "1f469-1f3fd-200d-1f9b2": "woman-medium-skin-tone-bald",
  "1f9d4-1f3fd-200d-2640": "woman-medium-skin-tone-beard",
  "1f471-1f3fd-200d-2640": "woman-medium-skin-tone-blond-hair",
  "1f469-1f3fd-200d-1f9b1": "woman-medium-skin-tone-curly-hair",
  "1f469-1f3fd-200d-1f9b0": "woman-medium-skin-tone-red-hair",
  "1f469-1f3fd-200d-1f9b3": "woman-medium-skin-tone-white-hair",
  "1f6b5-200d-2640": "woman-mountain-biking",
  "1f6b5-1f3ff-200d-2640": "woman-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb-200d-2640": "woman-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe-200d-2640": "woman-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc-200d-2640": "woman-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd-200d-2640": "woman-mountain-biking-medium-skin-tone",
  "1f469-200d-1f4bc": "woman-office-worker",
  "1f469-1f3ff-200d-1f4bc": "woman-office-worker-dark-skin-tone",
  "1f469-1f3fb-200d-1f4bc": "woman-office-worker-light-skin-tone",
  "1f469-1f3fe-200d-1f4bc": "woman-office-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f4bc": "woman-office-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f4bc": "woman-office-worker-medium-skin-tone",
  "1f469-200d-2708": "woman-pilot",
  "1f469-1f3ff-200d-2708": "woman-pilot-dark-skin-tone",
  "1f469-1f3fb-200d-2708": "woman-pilot-light-skin-tone",
  "1f469-1f3fe-200d-2708": "woman-pilot-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2708": "woman-pilot-medium-light-skin-tone",
  "1f469-1f3fd-200d-2708": "woman-pilot-medium-skin-tone",
  "1f93e-200d-2640": "woman-playing-handball",
  "1f93e-1f3ff-200d-2640": "woman-playing-handball-dark-skin-tone",
  "1f93e-1f3fb-200d-2640": "woman-playing-handball-light-skin-tone",
  "1f93e-1f3fe-200d-2640": "woman-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc-200d-2640": "woman-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd-200d-2640": "woman-playing-handball-medium-skin-tone",
  "1f93d-200d-2640": "woman-playing-water-polo",
  "1f93d-1f3ff-200d-2640": "woman-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb-200d-2640": "woman-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe-200d-2640": "woman-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc-200d-2640": "woman-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd-200d-2640": "woman-playing-water-polo-medium-skin-tone",
  "1f46e-200d-2640": "woman-police-officer",
  "1f46e-1f3ff-200d-2640": "woman-police-officer-dark-skin-tone",
  "1f46e-1f3fb-200d-2640": "woman-police-officer-light-skin-tone",
  "1f46e-1f3fe-200d-2640": "woman-police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc-200d-2640": "woman-police-officer-medium-light-skin-tone",
  "1f46e-1f3fd-200d-2640": "woman-police-officer-medium-skin-tone",
  "1f64e-200d-2640": "woman-pouting",
  "1f64e-1f3ff-200d-2640": "woman-pouting-dark-skin-tone",
  "1f64e-1f3fb-200d-2640": "woman-pouting-light-skin-tone",
  "1f64e-1f3fe-200d-2640": "woman-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc-200d-2640": "woman-pouting-medium-light-skin-tone",
  "1f64e-1f3fd-200d-2640": "woman-pouting-medium-skin-tone",
  "1f64b-200d-2640": "woman-raising-hand",
  "1f64b-1f3ff-200d-2640": "woman-raising-hand-dark-skin-tone",
  "1f64b-1f3fb-200d-2640": "woman-raising-hand-light-skin-tone",
  "1f64b-1f3fe-200d-2640": "woman-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc-200d-2640": "woman-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd-200d-2640": "woman-raising-hand-medium-skin-tone",
  "1f469-200d-1f9b0": "woman-red-hair",
  "1f6a3-200d-2640": "woman-rowing-boat",
  "1f6a3-1f3ff-200d-2640": "woman-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb-200d-2640": "woman-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe-200d-2640": "woman-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc-200d-2640": "woman-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd-200d-2640": "woman-rowing-boat-medium-skin-tone",
  "1f3c3-200d-2640": "woman-running",
  "1f3c3-1f3ff-200d-2640": "woman-running-dark-skin-tone",
  "1f3c3-200d-2640-200d-27a1": "woman-running-facing-right",
  "1f3c3-1f3ff-200d-2640-200d-27a1": "woman-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-2640-200d-27a1": "woman-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-2640-200d-27a1": "woman-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2640-200d-27a1": "woman-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2640-200d-27a1": "woman-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb-200d-2640": "woman-running-light-skin-tone",
  "1f3c3-1f3fe-200d-2640": "woman-running-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2640": "woman-running-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2640": "woman-running-medium-skin-tone",
  "1f469-200d-1f52c": "woman-scientist",
  "1f469-1f3ff-200d-1f52c": "woman-scientist-dark-skin-tone",
  "1f469-1f3fb-200d-1f52c": "woman-scientist-light-skin-tone",
  "1f469-1f3fe-200d-1f52c": "woman-scientist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f52c": "woman-scientist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f52c": "woman-scientist-medium-skin-tone",
  "1f937-200d-2640": "woman-shrugging",
  "1f937-1f3ff-200d-2640": "woman-shrugging-dark-skin-tone",
  "1f937-1f3fb-200d-2640": "woman-shrugging-light-skin-tone",
  "1f937-1f3fe-200d-2640": "woman-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc-200d-2640": "woman-shrugging-medium-light-skin-tone",
  "1f937-1f3fd-200d-2640": "woman-shrugging-medium-skin-tone",
  "1f469-200d-1f3a4": "woman-singer",
  "1f469-1f3ff-200d-1f3a4": "woman-singer-dark-skin-tone",
  "1f469-1f3fb-200d-1f3a4": "woman-singer-light-skin-tone",
  "1f469-1f3fe-200d-1f3a4": "woman-singer-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3a4": "woman-singer-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3a4": "woman-singer-medium-skin-tone",
  "1f9cd-200d-2640": "woman-standing",
  "1f9cd-1f3ff-200d-2640": "woman-standing-dark-skin-tone",
  "1f9cd-1f3fb-200d-2640": "woman-standing-light-skin-tone",
  "1f9cd-1f3fe-200d-2640": "woman-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc-200d-2640": "woman-standing-medium-light-skin-tone",
  "1f9cd-1f3fd-200d-2640": "woman-standing-medium-skin-tone",
  "1f469-200d-1f393": "woman-student",
  "1f469-1f3ff-200d-1f393": "woman-student-dark-skin-tone",
  "1f469-1f3fb-200d-1f393": "woman-student-light-skin-tone",
  "1f469-1f3fe-200d-1f393": "woman-student-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f393": "woman-student-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f393": "woman-student-medium-skin-tone",
  "1f9b8-200d-2640": "woman-superhero",
  "1f9b8-1f3ff-200d-2640": "woman-superhero-dark-skin-tone",
  "1f9b8-1f3fb-200d-2640": "woman-superhero-light-skin-tone",
  "1f9b8-1f3fe-200d-2640": "woman-superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc-200d-2640": "woman-superhero-medium-light-skin-tone",
  "1f9b8-1f3fd-200d-2640": "woman-superhero-medium-skin-tone",
  "1f9b9-200d-2640": "woman-supervillain",
  "1f9b9-1f3ff-200d-2640": "woman-supervillain-dark-skin-tone",
  "1f9b9-1f3fb-200d-2640": "woman-supervillain-light-skin-tone",
  "1f9b9-1f3fe-200d-2640": "woman-supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc-200d-2640": "woman-supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd-200d-2640": "woman-supervillain-medium-skin-tone",
  "1f3c4-200d-2640": "woman-surfing",
  "1f3c4-1f3ff-200d-2640": "woman-surfing-dark-skin-tone",
  "1f3c4-1f3fb-200d-2640": "woman-surfing-light-skin-tone",
  "1f3c4-1f3fe-200d-2640": "woman-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc-200d-2640": "woman-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd-200d-2640": "woman-surfing-medium-skin-tone",
  "1f3ca-200d-2640": "woman-swimming",
  "1f3ca-1f3ff-200d-2640": "woman-swimming-dark-skin-tone",
  "1f3ca-1f3fb-200d-2640": "woman-swimming-light-skin-tone",
  "1f3ca-1f3fe-200d-2640": "woman-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc-200d-2640": "woman-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd-200d-2640": "woman-swimming-medium-skin-tone",
  "1f469-200d-1f3eb": "woman-teacher",
  "1f469-1f3ff-200d-1f3eb": "woman-teacher-dark-skin-tone",
  "1f469-1f3fb-200d-1f3eb": "woman-teacher-light-skin-tone",
  "1f469-1f3fe-200d-1f3eb": "woman-teacher-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3eb": "woman-teacher-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3eb": "woman-teacher-medium-skin-tone",
  "1f469-200d-1f4bb": "woman-technologist",
  "1f469-1f3ff-200d-1f4bb": "woman-technologist-dark-skin-tone",
  "1f469-1f3fb-200d-1f4bb": "woman-technologist-light-skin-tone",
  "1f469-1f3fe-200d-1f4bb": "woman-technologist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f4bb": "woman-technologist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f4bb": "woman-technologist-medium-skin-tone",
  "1f481-200d-2640": "woman-tipping-hand",
  "1f481-1f3ff-200d-2640": "woman-tipping-hand-dark-skin-tone",
  "1f481-1f3fb-200d-2640": "woman-tipping-hand-light-skin-tone",
  "1f481-1f3fe-200d-2640": "woman-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc-200d-2640": "woman-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd-200d-2640": "woman-tipping-hand-medium-skin-tone",
  "1f9db-200d-2640": "woman-vampire",
  "1f9db-1f3ff-200d-2640": "woman-vampire-dark-skin-tone",
  "1f9db-1f3fb-200d-2640": "woman-vampire-light-skin-tone",
  "1f9db-1f3fe-200d-2640": "woman-vampire-medium-dark-skin-tone",
  "1f9db-1f3fc-200d-2640": "woman-vampire-medium-light-skin-tone",
  "1f9db-1f3fd-200d-2640": "woman-vampire-medium-skin-tone",
  "1f6b6-200d-2640": "woman-walking",
  "1f6b6-1f3ff-200d-2640": "woman-walking-dark-skin-tone",
  "1f6b6-200d-2640-200d-27a1": "woman-walking-facing-right",
  "1f6b6-1f3ff-200d-2640-200d-27a1": "woman-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-2640-200d-27a1": "woman-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-2640-200d-27a1": "woman-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2640-200d-27a1": "woman-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2640-200d-27a1": "woman-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb-200d-2640": "woman-walking-light-skin-tone",
  "1f6b6-1f3fe-200d-2640": "woman-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2640": "woman-walking-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2640": "woman-walking-medium-skin-tone",
  "1f473-200d-2640": "woman-wearing-turban",
  "1f473-1f3ff-200d-2640": "woman-wearing-turban-dark-skin-tone",
  "1f473-1f3fb-200d-2640": "woman-wearing-turban-light-skin-tone",
  "1f473-1f3fe-200d-2640": "woman-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc-200d-2640": "woman-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd-200d-2640": "woman-wearing-turban-medium-skin-tone",
  "1f469-200d-1f9b3": "woman-white-hair",
  "1f9d5": "woman-with-headscarf",
  "1f9d5-1f3ff": "woman-with-headscarf-dark-skin-tone",
  "1f9d5-1f3fb": "woman-with-headscarf-light-skin-tone",
  "1f9d5-1f3fe": "woman-with-headscarf-medium-dark-skin-tone",
  "1f9d5-1f3fc": "woman-with-headscarf-medium-light-skin-tone",
  "1f9d5-1f3fd": "woman-with-headscarf-medium-skin-tone",
  "1f470-200d-2640": "woman-with-veil",
  "1f470-1f3ff-200d-2640": "woman-with-veil-dark-skin-tone",
  "1f470-1f3fb-200d-2640": "woman-with-veil-light-skin-tone",
  "1f470-1f3fe-200d-2640": "woman-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc-200d-2640": "woman-with-veil-medium-light-skin-tone",
  "1f470-1f3fd-200d-2640": "woman-with-veil-medium-skin-tone",
  "1f469-200d-1f9af": "woman-with-white-cane",
  "1f469-1f3ff-200d-1f9af": "woman-with-white-cane-dark-skin-tone",
  "1f469-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right",
  "1f469-1f3ff-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9af": "woman-with-white-cane-light-skin-tone",
  "1f469-1f3fe-200d-1f9af": "woman-with-white-cane-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9af": "woman-with-white-cane-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9af": "woman-with-white-cane-medium-skin-tone",
  "1f9df-200d-2640": "woman-zombie",
  "1f462": "womans-boot",
  "1f45a": "womans-clothes",
  "1f452": "womans-hat",
  "1f461": "womans-sandal",
  "1f46d": "women-holding-hands",
  "1f46d-1f3ff": "women-holding-hands-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46d-1f3fb": "women-holding-hands-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46d-1f3fe": "women-holding-hands-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46d-1f3fc": "women-holding-hands-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46d-1f3fd": "women-holding-hands-medium-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f46f-200d-2640": "women-with-bunny-ears",
  "1f93c-200d-2640": "women-wrestling",
  "1f93c-1f3ff-200d-2640": "women-wrestling-dark-skin-tone",
  "1f93c-1f3fb-200d-2640": "women-wrestling-light-skin-tone",
  "1f93c-1f3fe-200d-2640": "women-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc-200d-2640": "women-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd-200d-2640": "women-wrestling-medium-skin-tone",
  "1f6ba": "womens-room",
  "1fab5": "wood",
  "1f974": "woozy-face",
  "1f5fa": "world-map",
  "1fab1": "worm",
  "1f61f": "worried-face",
  "1f381": "wrapped-gift",
  "1f527": "wrench",
  "270d": "writing-hand",
  "270d-1f3ff": "writing-hand-dark-skin-tone",
  "270d-1f3fb": "writing-hand-light-skin-tone",
  "270d-1f3fe": "writing-hand-medium-dark-skin-tone",
  "270d-1f3fc": "writing-hand-medium-light-skin-tone",
  "270d-1f3fd": "writing-hand-medium-skin-tone",
  "1fa7b": "x-ray",
  "1f9f6": "yarn",
  "1f971": "yawning-face",
  "1f7e1": "yellow-circle",
  "1f49b": "yellow-heart",
  "1f7e8": "yellow-square",
  "1f4b4": "yen-banknote",
  "262f": "yin-yang",
  "1fa80": "yo-yo",
  "1f92a": "zany-face",
  "1f993": "zebra",
  "1f910": "zipper-mouth-face",
  "1f9df": "zombie",
  "1f4a4": "zzz"
};
const RE_MATCH_EMOJIS = /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
async function applyEmojis(ctx, island) {
  const html = island.html;
  const matches = html.match(RE_MATCH_EMOJIS);
  if (!matches)
    return html;
  const replacements = await Promise.all(matches.map(async (match) => {
    const unicode = match.codePointAt(0).toString(16);
    const emoji = charMap[unicode];
    if (emoji) {
      const key = ["1", ctx.options.emojis, emoji].join(":");
      let svg;
      if (await emojiCache.hasItem(key))
        svg = await emojiCache.getItem(key);
      if (!svg) {
        svg = await $fetch(`https://api.iconify.design/${ctx.options.emojis}/${emoji}.svg`, {
          responseType: "text"
        });
        if (svg === "404")
          svg = void 0;
        if (svg)
          await emojiCache.setItem(key, svg);
      }
      if (svg)
        return `
${svg.replace("<svg ", '<svg data-emoji style="margin: 0 .05em 0 .15em; vertical-align: -0.1em;" ')}
`;
      return match;
    }
  }));
  const finalHtml = html.replace(RE_MATCH_EMOJIS, () => replacements.shift());
  const modified = finalHtml !== island.html;
  island.html = finalHtml;
  return modified;
}

async function applyInlineCss(ctx, island) {
  const { e } = ctx;
  let html = island.html;
  let css = island.head.style.map((s) => s.innerHTML).filter(Boolean).join("\n");
  const componentInlineStyles = island.head.link.filter((l) => l.href.startsWith("/_nuxt/components") && l.href.replaceAll("/", "").includes(ctx.options.component));
  if (!componentInlineStyles.length) {
    return false;
  }
  let linksToCss = [];
  {
    linksToCss = componentInlineStyles.length ? (await Promise.all(
      componentInlineStyles.map((l) => {
        const url = l.href.endsWith("lang.css") ? `${l.href}&hmr=false` : l.href;
        return e.$fetch(url, {
          responseType: "text",
          baseURL: useNitroOrigin(e)
        }).then((res) => {
          if (res.includes("__vite__css"))
            return res.match(/__vite__css = "([^"]+)"/)?.[1];
          return res.trim().split("\n").filter((l2) => !l2.startsWith("//")).join("\n").trim();
        }).catch(() => {
          return "";
        });
      })
    )).join("\n") : "";
    css = [linksToCss, css].join("\n");
  }
  if (!css.trim().length)
    return false;
  const cssInline = await useCssInline();
  if (!cssInline || cssInline?.__unenv__) {
    if (componentInlineStyles.length) {
      const logger = createConsola().withTag("Nuxt OG Image");
      logger.warn("To have inline styles applied you need to install either the `@css-inline/css-inline` or `@css-inline/css-inline-wasm` package.");
    }
    return false;
  }
  html = cssInline.inline(island.html, {
    loadRemoteStylesheets: false,
    extraCss: css
  });
  const classes = css.match(/\.([\w-]+)/g)?.map((c) => c.replace(".", ""));
  if (classes)
    html = html.replace(new RegExp(`class="(${classes.join("|")})"`, "g"), "");
  island.html = html;
  return true;
}

async function createVNodes(ctx) {
  let html = ctx.options.html;
  if (!html) {
    const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
    island.html = htmlDecodeQuotes(island.html);
    await applyInlineCss(ctx, island);
    await applyEmojis(ctx, island);
    html = island.html;
    if (html?.includes("<body>")) {
      html = html.match(/<body>([\s\S]*)<\/body>/)?.[1] || "";
    }
  }
  const template = `<div style="position: relative; display: flex; margin: 0 auto; width: ${ctx.options.width}px; height: ${ctx.options.height}px; overflow: hidden;">${html}</div>`;
  const satoriTree = html$2(template);
  walkSatoriTree(ctx, satoriTree, [
    emojis,
    classes,
    flex,
    encoding
  ]);
  await Promise.all(walkSatoriTree(ctx, satoriTree, [
    unocss,
    imageSrc
  ]));
  return satoriTree;
}

const fontPromises = {};
async function resolveFonts(event) {
  const { fonts } = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput([...event.options.fonts || [], ...fonts]);
  const localFontPromises = [];
  const preloadedFonts = [];
  if (fontCache) {
    for (const font of normalisedFonts) {
      if (await fontCache.hasItem(font.cacheKey)) {
        font.data = await fontCache.getItemRaw(font.cacheKey);
        preloadedFonts.push(font);
      } else {
        if (!fontPromises[font.cacheKey]) {
          fontPromises[font.cacheKey] = loadFont(event, font).then(async (_font) => {
            if (_font?.data)
              await fontCache?.setItemRaw(_font.cacheKey, _font.data);
            return _font;
          });
        }
        localFontPromises.push(fontPromises[font.cacheKey]);
      }
    }
  }
  const awaitedFonts = await Promise.all(localFontPromises);
  return [...preloadedFonts, ...awaitedFonts].map((_f) => {
    return { name: _f.name, data: _f.data, style: _f.style, weight: Number(_f.weight) };
  });
}
async function createSvg(event) {
  const { options } = event;
  const { satoriOptions: _satoriOptions } = useOgImageRuntimeConfig();
  const [satori, vnodes, fonts] = await Promise.all([
    useSatori(),
    createVNodes(event),
    resolveFonts(event)
  ]);
  await event._nitro.hooks.callHook("nuxt-og-image:satori:vnodes", vnodes, event);
  const satoriOptions = defu$1(options.satori, _satoriOptions, {
    fonts,
    tailwindConfig: { theme },
    embedFont: true,
    width: options.width,
    height: options.height
  });
  return satori(vnodes, satoriOptions).catch((err) => {
    return sendError(event.e, err, true);
  });
}
async function createPng(event) {
  const { resvgOptions } = useOgImageRuntimeConfig();
  const svg = await createSvg(event);
  const Resvg = await useResvg();
  const resvg = new Resvg(svg, defu$1(
    event.options.resvg,
    resvgOptions
  ));
  const pngData = resvg.render();
  return pngData.asPng();
}
async function createJpeg(event) {
  const { sharpOptions } = useOgImageRuntimeConfig();
  const png = await createPng(event);
  const sharp = await useSharp();
  return sharp(png, defu$1(event.options.sharp, sharpOptions)).jpeg().toBuffer();
}
const SatoriRenderer = {
  name: "satori",
  supportedFormats: ["png", "jpeg", "jpg", "json"],
  async createImage(e) {
    switch (e.extension) {
      case "png":
        return createPng(e);
      case "jpeg":
      case "jpg":
        return createJpeg(e);
    }
  },
  async debug(e) {
    const [vnodes, svg] = await Promise.all([
      createVNodes(e),
      createSvg(e)
    ]);
    return {
      vnodes,
      svg
    };
  }
};

const renderer$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createSvg: createSvg,
  default: SatoriRenderer
});

const chromePath = Launcher.getFirstInstallation();
async function createBrowser() {
  return playwrightCore.chromium.launch({
    headless: true,
    executablePath: chromePath
  });
}

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (false && !options.html) ;
    await page.setViewportSize({
      width: options.width || 1200,
      height: options.height || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

const renderer$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ChromiumRenderer
});

function createShikiHighlighter({
  langs = [],
  themes = [],
  bundledLangs = {},
  bundledThemes = {},
  getMdcConfigs,
  options: shikiOptions,
  engine
} = {}) {
  let shiki;
  let configs;
  async function _getShiki() {
    const { createHighlighterCore, addClassToHast, isSpecialLang, isSpecialTheme } = await import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/core.mjs');
    const { transformerNotationDiff, transformerNotationErrorLevel, transformerNotationFocus, transformerNotationHighlight } = await import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@shikijs+transformers@1.29.2/node_modules/@shikijs/transformers/dist/index.mjs');
    const shiki2 = await createHighlighterCore({
      langs,
      themes,
      engine
    });
    for await (const config of await getConfigs()) {
      await config.shiki?.setup?.(shiki2);
    }
    return {
      shiki: shiki2,
      addClassToHast,
      isSpecialLang,
      isSpecialTheme,
      transformers: [
        transformerNotationDiff(),
        transformerNotationErrorLevel(),
        transformerNotationFocus(),
        transformerNotationHighlight()
      ]
    };
  }
  async function getShiki() {
    if (!shiki) {
      shiki = _getShiki();
    }
    return shiki;
  }
  async function getConfigs() {
    if (!configs) {
      configs = Promise.resolve(getMdcConfigs?.() || []);
    }
    return configs;
  }
  const highlighter = async (code, lang, theme, options = {}) => {
    const {
      shiki: shiki2,
      addClassToHast,
      isSpecialLang,
      isSpecialTheme,
      transformers: baseTransformers
    } = await getShiki();
    const codeToHastOptions = {
      defaultColor: false,
      meta: {
        __raw: options.meta
      }
    };
    if (lang === "ts-type" || lang === "typescript-type") {
      lang = "typescript";
      codeToHastOptions.grammarContextCode = "let a:";
    } else if (lang === "vue-html" || lang === "vue-template") {
      lang = "vue";
      codeToHastOptions.grammarContextCode = "<template>";
    }
    const themesObject = { ...typeof theme === "string" ? { default: theme } : theme || {} };
    const loadedThemes = shiki2.getLoadedThemes();
    const loadedLanguages = shiki2.getLoadedLanguages();
    if (typeof lang === "string" && !loadedLanguages.includes(lang) && !isSpecialLang(lang)) {
      if (bundledLangs[lang]) {
        await shiki2.loadLanguage(bundledLangs[lang]);
      } else {
        {
          console.warn(`[@nuxtjs/mdc] Language "${lang}" is not loaded to the Shiki highlighter, fallback to plain text. Add the language to "mdc.highlight.langs" to fix this.`);
        }
        lang = "text";
      }
    }
    for (const [color, theme2] of Object.entries(themesObject)) {
      if (typeof theme2 === "string" && !loadedThemes.includes(theme2) && !isSpecialTheme(theme2)) {
        if (bundledThemes[theme2]) {
          await shiki2.loadTheme(bundledThemes[theme2]);
        } else {
          {
            console.warn(`[@nuxtjs/mdc] Theme "${theme2}" is not loaded to the Shiki highlighter. Add the theme to "mdc.highlight.themes" to fix this.`);
          }
          themesObject[color] = "none";
        }
      }
    }
    const transformers = [
      ...baseTransformers
    ];
    for (const config of await getConfigs()) {
      const newTransformers = typeof config.shiki?.transformers === "function" ? await config.shiki?.transformers(code, lang, theme, options) : config.shiki?.transformers || [];
      transformers.push(...newTransformers);
    }
    const root = shiki2.codeToHast(code.trimEnd(), {
      lang,
      ...codeToHastOptions,
      themes: themesObject,
      transformers: [
        ...transformers,
        {
          name: "mdc:highlight",
          line(node, line) {
            if (options.highlights?.includes(line))
              addClassToHast(node, "highlight");
            node.properties.line = line;
          }
        },
        {
          name: "mdc:newline",
          line(node) {
            if (code?.includes("\n")) {
              if (node.children.length === 0 || node.children.length === 1 && node.children[0].type === "element" && node.children[0].children.length === 1 && node.children[0].children[0].type === "text" && node.children[0].children[0].value === "") {
                node.children = [{
                  type: "element",
                  tagName: "span",
                  properties: {
                    emptyLinePlaceholder: true
                  },
                  children: [{ type: "text", value: "\n" }]
                }];
                return;
              }
              const last = node.children.at(-1);
              if (last?.type === "element" && last.tagName === "span") {
                const text = last.children.at(-1);
                if (text?.type === "text")
                  text.value += "\n";
              }
            }
          }
        }
      ]
    });
    const preEl = root.children[0];
    const codeEl = preEl.children[0];
    const wrapperStyle = shikiOptions?.wrapperStyle;
    preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
    const styles = [];
    Object.keys(themesObject).forEach((color) => {
      const colorScheme = color !== "default" ? `.${color}` : "";
      styles.push(
        wrapperStyle ? `${colorScheme} .shiki,` : "",
        `html .${color} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
      styles.push(
        `html${colorScheme} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
    });
    return {
      tree: codeEl.children,
      className: Array.isArray(preEl.properties.class) ? preEl.properties.class.join(" ") : preEl.properties.class,
      inlineStyle: preEl.properties.style,
      style: styles.join("")
    };
  };
  return highlighter;
}

const bundledLangs = {
"bat": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/bat.mjs'),
"batch": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/bat.mjs'),
"c": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/c.mjs'),
"cpp": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/cpp.mjs'),
"c++": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/cpp.mjs'),
"css": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/css.mjs'),
"diff": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/diff.mjs'),
"html": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/html.mjs'),
"ini": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/ini.mjs'),
"properties": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/ini.mjs'),
"java": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/java.mjs'),
"javascript": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/javascript.mjs'),
"js": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/javascript.mjs'),
"json": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/json.mjs'),
"log": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/log.mjs'),
"make": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/make.mjs'),
"makefile": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/make.mjs'),
"matlab": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/matlab.mjs'),
"markdown": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/markdown.mjs'),
"md": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/markdown.mjs'),
"mdc": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/mdc.mjs'),
"powershell": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/powershell.mjs'),
"ps": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/powershell.mjs'),
"ps1": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/powershell.mjs'),
"python": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/python.mjs'),
"py": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/python.mjs'),
"shellscript": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/shellscript.mjs'),
"bash": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/shellscript.mjs'),
"sh": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/shellscript.mjs'),
"shell": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/shellscript.mjs'),
"zsh": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/shellscript.mjs'),
"sql": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/sql.mjs'),
"ssh-config": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/ssh-config.mjs'),
"toml": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/toml.mjs'),
"typescript": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/typescript.mjs'),
"ts": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/typescript.mjs'),
"tsx": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/tsx.mjs'),
"vb": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/vb.mjs'),
"cmd": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/vb.mjs'),
"vue": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/vue.mjs'),
"xml": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/xml.mjs'),
"yaml": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/yaml.mjs'),
"yml": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/langs/yaml.mjs'),
};
const bundledThemes = {
"catppuccin-latte": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/themes/catppuccin-latte.mjs').then(r => r.default),
"one-dark-pro": () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/themes/one-dark-pro.mjs').then(r => r.default),
};
const options = {};
const engine = createWasmOnigEngine(() => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/shiki@1.29.2/node_modules/shiki/dist/wasm.mjs'));
const highlighter = createShikiHighlighter({ bundledLangs, bundledThemes, options, getMdcConfigs, engine });

const mdcHighlighter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createShikiHighlighter: createShikiHighlighter,
  default: highlighter
});

const sources$1 = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v2:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/archive"
            },
            {
                "loc": "/link"
            },
            {
                "loc": "/page"
            },
            {
                "loc": "/preview"
            },
            {
                "loc": "/201103/essay1-where"
            },
            {
                "loc": "/201408/have-a-strange-dream"
            },
            {
                "loc": "/201505/phone-2015"
            },
            {
                "loc": "/201606/school-stress"
            },
            {
                "loc": "/201805/windows-launch-anim"
            },
            {
                "loc": "/201907/score-query-leak"
            },
            {
                "loc": "/201908/zhilu-site-biography"
            },
            {
                "loc": "/202002/essay3"
            },
            {
                "loc": "/202002/essay4"
            },
            {
                "loc": "/202002/father-birthday"
            },
            {
                "loc": "/202006/school-diary"
            },
            {
                "loc": "/202010/life-is-dramatic"
            },
            {
                "loc": "/202105/virus-fakefolder"
            },
            {
                "loc": "/202110/exam-clock-develop"
            },
            {
                "loc": "/202110/noob-in-ctf"
            },
            {
                "loc": "/202111/message-heard"
            },
            {
                "loc": "/202201/school-thief"
            },
            {
                "loc": "/202209/ctf-nwpu"
            },
            {
                "loc": "/202210/thoughts-in-classroom"
            },
            {
                "loc": "/202211/linux-interview-2020"
            },
            {
                "loc": "/202212/linux-interview-2021"
            },
            {
                "loc": "/202301/linux-interview-2022"
            },
            {
                "loc": "/2023/linux-interview-2022"
            },
            {
                "loc": "/202302/c-strbuf"
            },
            {
                "loc": "/202303/linuxqq-crash"
            },
            {
                "loc": "/202304/vscode-simple-config"
            },
            {
                "loc": "/202305/archinstall-guide"
            },
            {
                "loc": "/202306/archlinux-configure"
            },
            {
                "loc": "/202307/archlinux-beautify"
            },
            {
                "loc": "/202308/light-backpack"
            },
            {
                "loc": "/202309/windows-setup-guide"
            },
            {
                "loc": "/202310/tailscale-incomplete-guide"
            },
            {
                "loc": "/202311/termux-guide"
            },
            {
                "loc": "/202311/xv6-lab-setup"
            },
            {
                "loc": "/202312/ssh-key-login"
            },
            {
                "loc": "/202401/milink-util"
            },
            {
                "loc": "/202401/moonlight-streaming-guide"
            },
            {
                "loc": "/202402/apps-websites-preference-2023"
            },
            {
                "loc": "/202402/carrier-overbilling"
            },
            {
                "loc": "/202402/link-util"
            },
            {
                "loc": "/202402/virus-trueupdate"
            },
            {
                "loc": "/202403/balancing-today-tomorrow"
            },
            {
                "loc": "/202403/boot-management"
            },
            {
                "loc": "/202403/helping-day"
            },
            {
                "loc": "/202404/archlinux-boot-repair"
            },
            {
                "loc": "/202404/magic-code"
            }
        ],
        "sourceType": "app"
    }
];

const globalSources = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sources: sources$1
});

const sources = {};

const childSources = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sources: sources
});

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2]?.match(/\/(.*)\/([dgimsuy]*)$/);
    return regex?.[1] ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid]?.where && !Array.isArray(memory[qid]?.where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, Number.parseInt(order || "0", 10)];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const query = /*#__PURE__*/Object.freeze({
  __proto__: null,
  decodeQueryParams: decodeQueryParams,
  getContentQuery: getContentQuery
});

async function serverSearchContent(event, filterQuery) {
  if (filterQuery) {
    return await serverQueryContent(event).where(filterQuery).find();
  } else {
    return await serverQueryContent(event).find();
  }
}
const HEADING = /^h([1-6])$/;
const isHeading = (tag) => HEADING.test(tag);
function splitPageIntoSections(page, { ignoredTags }) {
  const path = page._path ?? "";
  const sections = [{
    id: path,
    title: page.title || "",
    titles: [],
    content: (page.description || "").trim(),
    level: 1
  }];
  if (!page?.body?.children) {
    return sections;
  }
  let section = 1;
  let previousHeadingLevel = 0;
  const titles = [page.title ?? ""];
  for (const item of page.body.children) {
    const tag = item.tag || "";
    if (isHeading(tag)) {
      const currentHeadingLevel = Number(tag.match(HEADING)?.[1] ?? 0);
      const title = extractTextFromAst(item).trim();
      if (currentHeadingLevel === 1) {
        titles.splice(0, titles.length);
      } else if (currentHeadingLevel < previousHeadingLevel) {
        titles.splice(currentHeadingLevel - 1, titles.length - 1);
      } else if (currentHeadingLevel === previousHeadingLevel) {
        titles.pop();
      }
      sections.push({
        id: `${path}#${item.props?.id}`,
        title,
        titles: [...titles],
        content: "",
        level: currentHeadingLevel
      });
      titles.push(title);
      previousHeadingLevel = currentHeadingLevel;
      section += 1;
    } else {
      const content = extractTextFromAst(item, ignoredTags).trim();
      if (section === 1 && sections[section - 1]?.content === content) {
        continue;
      }
      sections[section - 1].content = `${sections[section - 1].content} ${content}`.trim();
    }
  }
  return sections;
}
function extractTextFromAst(node, ignoredTags = []) {
  let text = "";
  if (node.type === "text") {
    text += node.value || "";
  }
  if (ignoredTags.includes(node.tag ?? "")) {
    return "";
  }
  if (node.children?.length) {
    text += node.children.map((child) => extractTextFromAst(child, ignoredTags)).filter(Boolean).join("");
  }
  return text;
}

const search = /*#__PURE__*/Object.freeze({
  __proto__: null,
  serverSearchContent: serverSearchContent,
  splitPageIntoSections: splitPageIntoSections
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1]?.match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      if (dirConfig) {
        Object.assign(
          navItem,
          pickNavigationFields(dirConfig)
        );
      }
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...conf && pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  nav.forEach((item) => {
    item._file = item._file.split(".").slice(0, -1).join(".");
  });
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const navigation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createNav: createNav
});

const stats_get = defineEventHandler(async (event) => {
  const stats = {
    total: { posts: 0, words: 0 },
    annual: {},
    categories: [],
    tags: []
  };
  const posts = await serverQueryContent(event).find();
  const findOrCreateCategory = (name, tree) => {
    let category = tree.find((entry) => entry.name === name);
    if (!category) {
      category = { name, posts: 0 };
      tree.push(category);
    }
    return category;
  };
  for (const post of posts) {
    stats.total.posts++;
    stats.total.words += post.readingTime.words;
    if (!post.date)
      continue;
    const year = new Date(post.date).getFullYear();
    if (!stats.annual[year]) {
      stats.annual[year] = { posts: 0, words: 0 };
    }
    stats.annual[year].posts++;
    stats.annual[year].words += post.readingTime.words;
    const categories = post.categories || [];
    let currentLevel = stats.categories;
    for (const [index, categoryName] of categories.entries()) {
      if (typeof categoryName !== "string")
        continue;
      const category = findOrCreateCategory(categoryName, currentLevel);
      category.posts++;
      if (index < categories.length - 1) {
        if (!category.children)
          category.children = [];
        currentLevel = category.children;
      }
    }
    const tags = post.tags || [];
    tags.filter((tag) => typeof tag === "string").forEach((tag) => {
      if (!stats.tags.includes(tag))
        stats.tags.push(tag);
    });
  }
  return stats;
});

const stats_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: stats_get
});

var version = "3.2.1";

function getIsoDatetime(date) {
  if (!date)
    return date;
  if (typeof date === "string")
    date = new Date(date);
  return date.toISOString();
}

const runtimeConfig$1 = useRuntimeConfig();
const builder$1 = new XMLBuilder({
  attributeNamePrefix: "$",
  cdataPropName: "$",
  format: true,
  ignoreAttributes: false,
  textNodeName: "_"
});
function getUrl(path) {
  return new URL(path != null ? path : "", blogConfig.url).toString();
}
function renderContent(post) {
  return [
    post.image && `<img src="${post.image}" />`,
    post.description && `<p>${post.description}</p>`,
    `<a href="${getUrl(post._path)}">\u70B9\u51FB\u67E5\u770B\u5168\u6587</a>`
  ].join(" ");
}
const atom_xml_get = defineEventHandler(async (e) => {
  const posts = await serverQueryContent(e).where({ _original_dir: { $eq: "/posts" } }).sort({ updated: -1 }).limit(blogConfig.feed.limit).find();
  const entries = posts.map((post) => {
    var _a, _b, _c;
    return {
      id: getUrl(post._path),
      title: (_a = post.title) != null ? _a : "",
      updated: getIsoDatetime(post.updated),
      author: { name: post.author || blogConfig.author.name },
      content: {
        $type: "html",
        $: renderContent(post)
      },
      link: { $href: getUrl(post._path) },
      summary: post.description,
      category: { $term: (_b = post.categories) == null ? void 0 : _b[0] },
      published: (_c = getIsoDatetime(post.published)) != null ? _c : getIsoDatetime(post.date)
    };
  });
  const feed = {
    $xmlns: "http://www.w3.org/2005/Atom",
    id: blogConfig.url,
    title: blogConfig.title,
    updated: runtimeConfig$1.public.buildTime,
    description: blogConfig.description,
    // RSS 2.0
    author: {
      name: blogConfig.author.name,
      email: blogConfig.author.email,
      uri: blogConfig.author.homepage
    },
    link: [
      { $href: getUrl("atom.xml"), $rel: "self" },
      { $href: blogConfig.url, $rel: "alternate" }
    ],
    language: blogConfig.language,
    // RSS 2.0
    generator: {
      $uri: "https://github.com/L33Z22L11/blog-v3",
      $version: version,
      _: "Zhilu Blog"
    },
    icon: blogConfig.favicon,
    logo: blogConfig.author.avatar,
    // Ratio should be 2:1
    rights: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${blogConfig.author.name}`,
    subtitle: blogConfig.subtitle,
    entry: entries
  };
  return builder$1.build({
    "?xml": { $version: "1.0", $encoding: "UTF-8" },
    feed
  });
});

const atom_xml_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: atom_xml_get
});

function getGhAvatar(name, options) {
  if (!name)
    return "";
  if (!options)
    options = { size: 92 };
  if (options.preset === "icon")
    Object.assign(options, { size: 32, mask: "circle" });
  let url = `https://wsrv.nl/?url=github.com/${name}.png`;
  if (options.size)
    url += `%3fsize=${options.size}`;
  if (options.mask)
    url += `&mask=${options.mask}`;
  return url;
}

const friends = [{
  name: "\u76F8\u8C08\u751A\u591A",
  desc: "",
  entries: [{
    author: "GuuGuai",
    sitenick: "\u6742\u8BB0\u672C",
    title: "\u53E4\u602A\u6742\u8BB0\u672C",
    desc: "\u4E00\u4E2A\u4EC0\u4E48\u90FD\u53EF\u80FD\u4F1A\u5199\u7684\u535A\u5BA2",
    link: "https://gug.thisis.host/",
    feed: "https://gug.thisis.host/atom.xml",
    icon: "https://unavatar.webp.se/gug.thisis.host?w",
    avatar: "https://cdn.libravatar.org/avatar/646331bff8f19a0e05679c3cc0fc54d6?s=160",
    archs: ["Hexo", "Netlify"],
    date: "2024-01-29",
    comment: "\u9AD8\u4E2D\u540C\u5B66\uFF0C\u6280\u672F\u597D\u53CB\uFF0C\u7231\u597D\u756A\u5267/\u6298\u817E\u3002"
  }, {
    author: "isYangs",
    desc: "\u4E00\u4E2A\u524D\u7AEFBug\u6784\u9020\u5E08\u7684\u535A\u5BA2",
    link: "https://www.isyangs.cn/",
    feed: "https://www.isyangs.cn/feed.xml",
    icon: "https://www.isyangs.cn/favicon.svg",
    avatar: "https://7.isyangs.cn/8/655c9835780a0-8.jpg",
    archs: ["Vue", "\u56FD\u5185 CDN"],
    date: "2024-01-29",
    comment: "\u9AD8\u4E2D\u65F6\u8BA4\u8BC6\u7684\u5C0F\u5B66\u6821\u53CB\uFF0C\u76EE\u524D\u4ECE\u4E8B\u524D\u7AEF\u5F00\u53D1\u3002"
  }, {
    author: "KazariEX",
    sitenick: "\u5FAE\u5149\u6863\u6848",
    title: "BikariArchive",
    desc: "\u865A\u5E7B\u7684\u5E78\u798F",
    link: "https://bikari.top/",
    feed: "https://bikari.top/feed",
    icon: "https://bikari.top/image/favicon.ico",
    avatar: getGhAvatar("KazariEX"),
    archs: ["Nuxt", "\u670D\u52A1\u5668"],
    date: "2024-01-30",
    comment: "\u201C\u56DB\u90AE\u56DB\u7535\u201D\u76F4\u7CFB\u5B66\u957F\uFF0CVue\u76F8\u5173\u5F00\u53D1\u8005\uFF0C\u524D\u7AEF\u65B9\u9762\u6307\u5F15\u6211\u4E0D\u5C11\u3002"
  }, {
    author: "Ariasaka",
    sitenick: "\u5C0F\u7A9D",
    title: "Ariasaka\u306E\u5C0F\u7A9D",
    desc: "\u4EBA\u6709\u60B2\u6B22\u79BB\u5408 \u6708\u6709\u9634\u6674\u5706\u7F3A",
    link: "https://blog.yaria.top/",
    feed: "https://blog.yaria.top/feed",
    icon: "https://blog.yaria.top/favicon.ico",
    avatar: getGhAvatar("LYXOfficial"),
    archs: ["Next.js", "\u56FD\u5185 CDN"],
    date: "2024-07-12",
    comment: "\u521D\u4E2D\u751F\uFF0COIer\uFF0C\u6298\u817E\u535A\u5BA2\u3002"
  }, {
    author: "\u5524\u9752",
    sitenick: "Abloom",
    title: "\u5524\u9752\u6620\u8BB0",
    desc: "\u6211\u5D07\u62DC\u6D41\u6D6A\u3001\u53D8\u5316\u548C\u5E7B\u60F3",
    link: "https://eees.blog/",
    feed: "https://eees.blog/atom.xml",
    icon: "https://img.miasite.com/local/api/1/2024/12/EEES.png",
    avatar: getGhAvatar("Evereen2023"),
    archs: ["Hexo", "Vercel"],
    date: "2024-12-09",
    comment: "\u521D\u4E2D\u751F\uFF0C\u6280\u672F\u5B66\u4E60\u4E2D\u3002"
  }]
}, {
  name: "XUPTers",
  desc: "\u897F\u5B89\u90AE\u7535\u5927\u5B66\u7684\u6821\u53CB\u4EEC\u3002",
  entries: [{
    author: "\u534A\u5C9B\u7684\u5B64\u57CE",
    sitenick: "\u5C0F\u5C4B",
    title: "\u534A\u5C9B\u7684\u5C0F\u5C4B",
    desc: "\u4E0D\u77E5\u9053\u5199\u5565\uFF0C\u90A3\u5C31\u4E0D\u5199\u4E86\u3002\u54CE\u563F",
    link: "https://www.bandao.ltd/",
    feed: "https://www.bandao.ltd/atom.xml",
    icon: getGhAvatar("bandaoworld", { preset: "icon" }),
    avatar: getGhAvatar("bandaoworld"),
    archs: ["Hexo", "\u670D\u52A1\u5668"],
    date: "2024-02-02",
    comment: "\u5927\u5B66\u5B66\u957F\uFF0C\u7231\u597D\u6444\u5F71/\u542C\u6B4C\uFF0C\u4F1A\u4E00\u4E9BVue\u3002"
  }, {
    author: "\u5B66\u4E60\u7231\u6211",
    sitenick: "Studio",
    title: "StudyingLover's Blog",
    desc: "\u8981\u5077\u5077\u52AA\u529B\uFF0C\u4E0B\u56DE\u60CA\u8273\u6240\u6709\u4EBA",
    link: "https://www.studyinglover.com/",
    feed: "https://www.studyinglover.com/rss.xml",
    icon: getGhAvatar("StudyingLover", { preset: "icon" }),
    avatar: getGhAvatar("StudyingLover"),
    archs: ["Astro", "Vercel"],
    date: "2024-02-03",
    comment: "\u201C\u5B66\u4E60\u54E5\u201D"
  }, {
    author: "\xB7JiaHuann",
    title: "Liu Jiahuan's Blog",
    desc: "I Really Want to Stay At Your House.....",
    link: "https://www.jiahuan.top/",
    icon: "https://www.jiahuan.top/favicon.ico",
    avatar: getGhAvatar("JiaHuann"),
    archs: ["Next.js", "Vercel"],
    date: "2024-02-02",
    comment: "\u5B66\u957F\uFF0C\u4ECE\u4E8BeBPF\u65B9\u5411\u3002"
  }, {
    author: "Yuanfang",
    title: "\u5143\u82B3\u4F60\u600E\u4E48\u770B",
    desc: "\u743C\u697C\u6302\u6708\u9493\u6D41\u4E91\uFF0C\u68A6\u91CC\u7476\u53F0\u6682\u501F\u6625",
    link: "https://yuanfang.thisis.host/",
    icon: "https://yuanfang.thisis.host/images/logo.svg",
    avatar: getGhAvatar("zhendewokusi"),
    archs: ["Hexo", "Netlify"],
    date: "2024-01-29",
    comment: "\u5927\u5B66\u540C\u7EA7\uFF0CLinux\u5185\u6838\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "Ph0m",
    sitenick: "Space",
    title: "Ph0m's space",
    desc: "\u597D\u597D\u751F\u6D3B \u6162\u6162\u76F8\u9047",
    link: "https://blog.phom.space/",
    feed: "https://blog.phom.space/atom.xml",
    icon: getGhAvatar("Ph0m1", { preset: "icon" }),
    avatar: "https://pic.imgdb.cn/item/65e1df0c9f345e8d03bcdd6a.png",
    archs: ["Hexo", "Netlify"],
    date: "2024-03-02",
    comment: "\u5927\u5B66\u5B66\u5F1F\u3002"
  }, {
    author: "Future",
    title: "future's blog",
    desc: "Hang on to your dreams!",
    link: "https://future.thisis.host/",
    feed: "https://future.thisis.host/atom.xml",
    icon: "https://future.thisis.host/images/favicon-light-32.png",
    avatar: getGhAvatar("SIMple-lives"),
    archs: ["Hexo", "Cloudflare"],
    date: "2024-03-10",
    comment: "\u5927\u5B66\u5B66\u5F1F\u3002"
  }, {
    author: "tiny-sky",
    title: "tiny-sky\u7684\u4E2A\u4EBA\u535A\u5BA2",
    desc: "\u4EBA\u751F\u82E6\u77ED\uFF0C\u53CA\u65F6\u884C\u4E50",
    link: "https://tiny-sky.github.io/",
    icon: "https://tiny-sky.github.io/img/pwa/favicon.ico",
    avatar: getGhAvatar("tiny-sky"),
    archs: ["Hexo", "GitHub Pages"],
    date: "2024-04-03",
    comment: "\u5927\u5B66\u540C\u7EA7\uFF0C\u6570\u636E\u5E93\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "Shawn",
    sitenick: "\u7B14\u8BB0",
    title: "Shawn\u7684\u7B14\u8BB0",
    desc: "Where there is a will, there is a way.",
    link: "https://shawn.thisis.host/",
    feed: "https://shawn.thisis.host/atom.xml",
    icon: getGhAvatar("ShawnJeffersonWang", { preset: "icon" }),
    avatar: getGhAvatar("ShawnJeffersonWang"),
    archs: ["Hexo", "Cloudflare"],
    date: "2024-06-13",
    comment: "\u5927\u5B66\u540C\u7EA7\uFF0CGolang \u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "Kayle",
    sitenick: "\u5C0F\u7AD9",
    title: "Kayle\u5C0F\u7AD9",
    desc: "\u6B63\u5728\u5B66\u4E60\u5D4C\u5165\u5F0F",
    link: "https://www.kayle7.top/",
    feed: "https://www.kayle7.top/atom.xml",
    icon: "https://q1.qlogo.cn/g?b=qq&nk=1239625475&s=3",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1239625475&s=4",
    archs: ["Hexo", "Cloudflare"],
    date: "2024-06-27",
    comment: "\u5927\u5B66\u540C\u7EA7\uFF0C\u5D4C\u5165\u5F0F\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "\u6843\u6797\u996E\u9152",
    title: "\u6446\u70C2\u7684\u6843\u7684Blog",
    desc: "\u56DE\u4E0D\u53BB\u7684\u4F55\u6B62\u65F6\u95F4",
    link: "https://www.taolin.site/",
    feed: "https://www.taolin.site/rss.xml",
    icon: "https://www.taolin.site/favicon.ico",
    avatar: getGhAvatar("Taolinyinjiu"),
    archs: ["Astro", "Vercel"],
    date: "2024-07-16",
    comment: "\u5927\u5B66\u540C\u7EA7\uFF0C\u5D4C\u5165\u5F0F\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "Magic462",
    title: "MagicBlog",
    desc: "\u6211\u77E5\u6211\u559C\u4E50\uFF0C\u7EB5\u60C5\u8DCB\u6D89\u3002",
    link: "https://magic.thisis.host/",
    feed: "https://magic.thisis.host/atom.xml",
    icon: "https://q1.qlogo.cn/g?b=qq&nk=1623728267&s=3",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1623728267&s=4",
    archs: ["Hexo", "Cloudflare"],
    date: "2024-07-22",
    comment: "\u5927\u5B66\u5B66\u59B9\uFF0C\u524D\u7AEF\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "fault123",
    title: "fault`s blog",
    desc: "\u5B66\u4E60\uFF01\u5B66\u4E60\uFF01\u8FD8\u662F\u5B66\u4E60\uFF01\u5F53\u7136\u4E5F\u662F\u8981\u5403\u70B9\u597D\u4E1C\u897F\uFF01",
    link: "https://fault.thisis.host/",
    feed: "https://fault.thisis.host/atom.xml",
    icon: getGhAvatar("fault123", { preset: "icon" }),
    avatar: getGhAvatar("fault123"),
    archs: ["Hexo", "Netlify"],
    date: "2024-07-29",
    comment: "\u5927\u5B66\u540C\u7EA7\uFF0C\u7F51\u5B89\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "Monoceros406",
    title: "The Blog of Monoceros406",
    desc: "Reverse - \u667A\u90AE\u666E\u521B\u5DE5\u4F5C\u5BA4\u5B89\u5168\u7EC4/Nepnep\u8054\u5408\u6218\u961F",
    link: "https://monoceros406.github.io/",
    feed: "https://monoceros406.github.io/atom.xml",
    icon: getGhAvatar("Monoceros406", { preset: "icon" }),
    avatar: getGhAvatar("Monoceros406"),
    archs: ["Hexo", "GitHub Pages"],
    date: "2024-07-29",
    comment: "\u5927\u5B66\u5B66\u5F1F\uFF0C\u7F51\u5B89Reverse\u5B66\u4E60\u4E2D\u3002"
  }, {
    author: "\u4E91\u95F4\u4E16\u754C",
    title: "\u4E91\u95F4\u7684\u5C0F\u5C0F\u4E16\u754C",
    desc: "\u987A\u7740\u98CE\u7684\u65B9\u5411",
    link: "https://yunjianworld.fun/",
    feed: "https://yunjianworld.fun/atom.xml",
    icon: "https://yunjianworld.fun/img/fluid.png",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=2098600899&s=4",
    archs: ["Hexo", "Zebaur"],
    date: "2024-11-14",
    comment: "\u5927\u5B66\u5B66\u59B9\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u5B66\u4E60\u4E2D\u3002"
  }]
}, {
  name: "\u7F51\u4E0A\u90BB\u5C45",
  desc: "\u54D4\u2014\u2014\u5575\u2014\u2014\u7535\u6CE2\u901A\u8BAF\u4E2D\uFF0C\u6B22\u8FCE\u5E38\u6765\u4E32\u95E8\u3002",
  entries: [{
    author: "\u6069\u6CFD",
    sitenick: "Colsrch",
    title: "Colsrch\u7684\u5C0F\u7834\u7AD9",
    desc: "\u613F\u591A\u5E74\u4EE5\u540E\uFF0C\u6211\u53EF\u4EE5\u914C\u4E00\u676F\u6E05\u9152\uFF0C\u70C2\u9189\u5982\u6CE5\uFF0C\u68A6\u4E2D\u56DE\u5230\u6211\u4EEC\u7684\u66FE\u7ECF\u3002",
    link: "https://colsrch.cn/",
    feed: "https://colsrch.cn/atom.xml",
    icon: "https://unavatar.webp.se/colsrch.cn?w",
    avatar: "https://7.isyangs.cn/1/657976c27bea6-1.png",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-02-01",
    comment: "\u9E3D\u738B\uFF0C\u53BB\u54EA\u91CC\u53D1\u5C55\u4E86\uFF1F"
  }, {
    author: "\u5F20\u6D2AHeo",
    desc: "\u5206\u4EAB\u8BBE\u8BA1\u4E0E\u79D1\u6280\u751F\u6D3B",
    link: "https://blog.zhheo.com/",
    feed: "https://blog.zhheo.com/atom.xml",
    icon: "https://blog.zhheo.com/img/favicon4.0.webp",
    avatar: "https://bu.dusays.com/2022/12/28/63ac2812183aa.png",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-02-02",
    comment: "\u77E5\u540D\u535A\u4E3B\uFF0C\u5176\u535A\u5BA2\u8BBE\u8BA1\u98CE\u683C\u88AB\u4F17\u591A\u4EBA\u501F\u9274\u3002"
  }, {
    author: "\u65AC\u98A8\xB7\u5343\u96EA",
    sitenick: "\u98A8\u96EA\u57CE",
    desc: "\u6D69\u7E41\u661F\u7A7A\u4E0B\u7684\u4E00\u573A\u7A1A\u5AE9\u7684\u68A6",
    link: "https://blog.chyk.ink/",
    feed: "https://blog.chyk.ink/atom.xml",
    icon: getGhAvatar("chiyuki0325", { preset: "icon" }),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=3526514925&s=4",
    archs: ["Hexo", "Vercel"],
    date: "2024-03-03",
    comment: "Archlinux\uFF0C\u6298\u817E\uFF0C\u5927\u5B66\u751F\u3002"
  }, {
    author: "Revincx",
    sitenick: "\u5C0F\u7834\u7AD9",
    title: "Revincx\u7684\u5C0F\u7834\u7AD9",
    link: "https://blog.revincx.icu/",
    feed: "https://blog.revincx.icu/atom.xml",
    icon: "https://blog.revincx.icu/images/favico.png",
    avatar: "https://weavatar.com/avatar/20eed6a268787c9a751165bc1ec56e90",
    archs: ["Hexo", "Vercel"],
    date: "2024-02-05",
    comment: "\u6298\u817E\u3002"
  }, {
    author: "\u5C0F\u674E\u540C\u5B66",
    sitenick: "Coding",
    title: "\u5C0F\u674E\u540C\u5B66 Coding",
    desc: "\u4E00\u652F\u52AA\u529B\u53D8\u5F3A\u7684\u5C0F\u5F69\u7B14",
    link: "https://blog.xxfer.cn/",
    feed: "https://blog.xxfer.cn/rss.xml",
    icon: "https://blog.xxfer.cn/img/siteicon/128.png",
    avatar: "https://picsur.xxfer.cn/i/7303d79e-4736-41cf-b14f-d2b5597ad29b.webp",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-02-01",
    comment: "\u74DC\u5927\u7F51\u5B89\u5B66\u957F\u3002"
  }, {
    author: "\u77F3\u5934",
    sitenick: "\u94ED\u5FC3\u77F3\u523B",
    title: "\u94ED\u5FC3\u77F3\u523B",
    desc: "\u613F\u5C81\u5E76\u8C22\uFF0C\u4E0E\u53CB\u957F\u516E",
    link: "https://blog.kouseki.cn/",
    feed: "https://blog.kouseki.cn/rss.xml",
    icon: "https://blog.kouseki.cn/favicon.ico",
    avatar: "https://blog.kouseki.cn/imgs/avatar.webp",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-03-01",
    comment: "\u6298\u817EHexo\u535A\u5BA2\uFF0C\u53CB\u94FE\u9875\u9762\u86EE\u591A\u535A\u5BA2\u6298\u817E\u9009\u624B\u7684\u3002"
  }, {
    author: "\u685C\u7D3A\u72F8",
    sitenick: "\u90E8\u843D\u9601",
    title: "\u685C\u7D3A\u72F8\u306E\u90E8\u843D\u9601",
    desc: "\u4E00\u4E2A\u95F2\u804A\u840C\u65B0\u52A8\u6F2B\u6280\u672F\u4EA4\u6D41\u7AD9",
    link: "https://www.skira.top/",
    feed: "https://www.skira.top/feed.xml",
    icon: "https://www.skira.top/img/skira.ico",
    avatar: "https://www.skira.top/img/lemonsuka.webp",
    archs: ["Hexo", "Vercel"],
    date: "2024-02-01",
    comment: "\u641E\u673A\u53D1\u70E7\u53CB\uFF0C\u5C0F\u4F17\u7CFB\u7EDF\u7231\u597D\u8005\uFF0C\u524D\u7AEF\u7814\u7A76\u5458\u3002"
  }, {
    author: "Yunyi",
    title: "YUNYI BLOG",
    desc: "\u5F97\u95F2\u996E\u8336~~~",
    link: "https://www.yunyitang.me/",
    feed: "https://www.yunyitang.me/atom.xml",
    icon: "https://www.yunyitang.me/favicon/favicon.ico",
    avatar: "https://www.yunyitang.me/img/Avatar.png",
    archs: ["Hexo", "GitHub Pages"],
    date: "2024-02-18",
    comment: "\u5F88\u6709\u535A\u5BA2\u7684\u5473\u9053\u3002"
  }, {
    author: "L1nSn0w",
    title: "L1nSn0w's Site",
    desc: "\u65E0\u9650\u8FDB\u6B65.\u{1F388}",
    link: "https://linsnow.cn/",
    feed: "https://linsnow.cn/index.xml",
    icon: "https://unavatar.webp.se/linsnow.cn?w",
    avatar: getGhAvatar("lin-snow"),
    archs: ["Hugo", "\u670D\u52A1\u5668"],
    date: "2024-02-14",
    comment: "\u5E7F\u5DE5\u5B66\u5F1F\u3002"
  }, {
    author: "\u8302\u8302\u7269\u8BED",
    desc: "\u8302\u8302\u7684\u6210\u957F\u4E4B\u8DEF\uFF0C\u5305\u542B\u524D\u7AEF\u5E38\u7528\u77E5\u8BC6\u3001\u6E90\u7801\u9605\u8BFB\u7B14\u8BB0\u3001\u5404\u79CD\u5947\u6DEB\u6280\u5DE7\u3001\u65E5\u5E38\u63D0\u6548\u5DE5\u5177\u7B49",
    link: "https://notes.fe-mm.com/",
    icon: getGhAvatar("maomao1996", { preset: "icon" }),
    avatar: getGhAvatar("maomao1996"),
    archs: ["VitePress", "Netlify"],
    date: "2024-02-17"
  }, {
    author: "Naokuo",
    desc: "\u8BF7\u7ED9\u6211\u6765\u4EBF\u7897\u4E09\u9C9C\u9762",
    link: "https://blog.naokuo.top/",
    feed: "https://blog.naokuo.top/rss2.xml",
    icon: "https://blog.naokuo.top/favicon.ico",
    avatar: "https://blog.naokuo.top/img/author/author_512.webp",
    archs: ["Hexo", "Vercel"],
    date: "2024-02-18",
    comment: "\u6298\u817E\u535A\u5BA2\u3002"
  }, {
    author: "\u6653\u7A7A",
    sitenick: "\u7A7A\u57DF",
    title: "\u6653\u7A7Ablog",
    desc: "\u63A2\u7D22\u66F4\u5927\u7684\u4E16\u754C",
    link: "https://blog.moeworld.tech/",
    feed: "https://blog.moeworld.tech/feed/",
    icon: "https://blog.moeworld.tech/wp-content/uploads/2024/08/cropped-favicon-32x32.png",
    avatar: "https://blog.moeworld.tech/wp-content/themes/kratos-pjax-master/static/images/photo.jpg",
    archs: ["WordPress", "\u670D\u52A1\u5668"],
    date: "2024-02-25",
    comment: "\u6280\u672F\u6298\u817E\u7B14\u8BB0\u3002"
  }, {
    author: "Kegongteng",
    desc: "Blogger / Technophile / Student",
    link: "https://kegongteng.cn/",
    feed: "https://kegongteng.cn/atom",
    icon: "https://kegongteng.cn/favicon.ico",
    avatar: "https://bu.dusays.com/2023/12/23/65867c3357bb6.jpg",
    archs: ["Gridea", "Vercel"],
    date: "2024-02-25",
    comment: "\u6709\u4E0D\u9519\u60F3\u6CD5\u7684\u4E2D\u5B66\u751F\u3002"
  }, {
    author: "\u6D1B\u5BD2\u516E",
    title: "I'm Luochancy",
    desc: "\u8FD9\u662F\u4E2A\u732B\u732B\u7684\u535A\u5BA2\u55B5\uFF5E",
    link: "https://www.luochancy.com/",
    feed: "https://www.luochancy.com/feed",
    icon: "https://www.luochancy.com/wp-content/uploads/2023/10/cropped-231026_head_image-32x32.png",
    avatar: "https://www.luochancy.com/wp-content/uploads/2023/12/1904634_Ehaif6np.png",
    archs: ["WordPress", "Cloudflare"],
    date: "2024-03-01",
    comment: "\u9AD8\u4E2D\u751F\u3002"
  }, {
    author: "\u6E05\u7FBD\u98DE\u626C",
    title: "LiuShen's Blog",
    desc: "\u67F3\u5F71\u66F3\u66F3\uFF0C\u6E05\u9152\u5B64\u706F\uFF0C\u626C\u7B14\u6492\u58A8\uFF0C\u5FC3\u5883\u5982\u971C",
    link: "https://blog.liushen.fun/",
    feed: "https://blog.liushen.fun/atom.xml",
    icon: "https://blog.liushen.fun/info/avatar.ico",
    avatar: "https://weavatar.com/avatar/92c15d4a1d99a8ee04b986a14a5f7e009e574b3383fc575005947988ccf205e2",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-06-02",
    comment: "\u6B66\u7406\u5DE5\u5B66\u957F\uFF0C\u897F\u5B89\u8001\u4E61\u3002"
  }, {
    author: "\u6D6A\u6D77\u5BFC\u822A",
    link: "https://www.langhai.net/",
    icon: "https://www.langhai.net/assets/images/langhai-logo.png",
    avatar: "https://www.langhai.net/assets/images/langhai-logo.png",
    archs: ["Hugo", "Cloudflare"],
    date: "2024-06-04"
  }, {
    author: "awaae",
    sitenick: "\u5453\u8BED\u68A6\u8F69",
    desc: "\u7528\u5FC3\u4EAB\u53D7\u751F\u6D3B",
    link: "https://blog.awaae001.top/",
    feed: "https://blog.awaae001.top/atom.xml",
    icon: "https://unavatar.webp.se/blog.awaae001.top?w",
    avatar: "https://image.m-c.top/?/images/2024/01/13/Pqeh0v6VaK/ico.jpg",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-06-05",
    comment: "\u6709\u601D\u8003\u7684\u9AD8\u4E2D\u751F\u3002"
  }, {
    author: "\u6C3F\u6708",
    sitenick: "\u5BC2\u767D\u6C99\u6D32\u51B7",
    desc: "Et in Arcadia, ego.",
    link: "https://chuishen.xyz/",
    feed: "https://chuishen.xyz/atom.xml",
    icon: "https://chuishen.xyz/img/logo.png",
    avatar: "https://cravatar.cn/avatar/57ff1222a81493a0e72782530e77b269?s=160",
    archs: ["Hexo", "Vercel"],
    date: "2024-06-16",
    comment: "\u865A\u6784\u6587\u5B66\u3002"
  }, {
    author: "\u665A\u591C",
    desc: "\u505A\u597D\u91CF\u53D8\u7684\u51C6\u5907\uFF0C\u4FC3\u8FDB\u4E8B\u7269\u7684\u8D28\u53D8\u3002",
    link: "https://www.iczrx.cn/",
    feed: "https://www.iczrx.cn/feed/",
    icon: "https://www.iczrx.cn/favicon.ico",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1463656527&s=4",
    archs: ["Typecho", "\u670D\u52A1\u5668"],
    date: "2024-07-11",
    comment: "\u5206\u4EAB\u6298\u817E\u4E0E\u751F\u6D3B\u7684\u9AD8\u4E2D\u751F\u3002"
  }, {
    author: "\u592A\u9633\u53EF\u4EE5\u662F\u84DD\u8272",
    desc: "Live and learn. \u{1F331}",
    link: "https://blog.mletter.cn/",
    icon: "https://blog.mletter.cn/wechat.svg",
    avatar: "https://img13.360buyimg.com/ddimg/jfs/t1/239095/17/9691/19853/664d82dfF34a0990c/c4198876146be2d4.jpg",
    archs: ["Hexo", "Netlify"],
    date: "2024-07-11",
    comment: "\u5728\u8BFB\u8FD0\u7EF4\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u8BB0\u5F55\u6280\u672F\u548C\u751F\u6D3B\u65E5\u5E38\u3002"
  }, {
    author: "\u5929\u7FD4TNXG",
    sitenick: "\u7A7A\u95F4\u7AD9",
    title: "\u5929\u7FD4TNXG\u306E\u7A7A\u95F4\u7AD9",
    desc: "\u660E\u65E5\u5C1A\u672A\u5230\u6765\uFF0C\u5E0C\u671B\u51DD\u4E8E\u5FC3\u4E0A",
    link: "https://tnxgmoe.com/",
    feed: "https://tnxgmoe.com/feed",
    icon: "https://tnxgmoe.com/favicon.png",
    avatar: "https://api-space.tnxg.top/avatar?s=qq",
    archs: ["Mix Space", "Cloudflare"],
    date: "2024-07-11",
    comment: "\u897F\u5317\u5730\u533A\u9AD8\u4E2D\u751F\uFF0C\u5F00\u6E90\u7231\u597D\u8005\u3002"
  }, {
    author: "Winner365",
    sitenick: "\u4E91\u6808",
    title: "365\u4E91\u6808",
    desc: "\u521D\u9605\u4E0D\u660E\u8A00\u5916\u610F\uFF0C\u91CD\u6E29\u65B9\u89C9\u5B57\u4E2D\u60C5",
    link: "https://blog.365sites.top/",
    feed: "https://blog.365sites.top/rss.xml",
    icon: getGhAvatar("Winner365-China", { preset: "icon" }),
    avatar: "https://blog.365sites.top/upload/avatar.png",
    archs: ["Halo", "Cloudflare"],
    date: "2024-07-14",
    comment: "\u5B66\u751F\uFF0C\u6298\u817E\u535A\u5BA2\u3002"
  }, {
    author: "FloatSheep",
    title: "FloatSheep's Blog",
    desc: "On the other side of obstacles",
    link: "https://blog.hesiy.cn/",
    feed: "https://blog.hesiy.cn/posts/index.xml",
    icon: "https://blog.hesiy.cn/favicon.ico",
    avatar: getGhAvatar("FloatSheep"),
    archs: ["Hugo", "Deno Deploy"],
    date: "2024-07-24",
    comment: "\u559C\u6B22\u6298\u817E\u3002"
  }, {
    author: "Henry Moreau",
    title: "\u4E00\u7AD9 - Henry\u7684\u535A\u5BA2",
    desc: "Student / Designer / Dreamchaser",
    link: "https://blog.henrywhu.cn/",
    feed: "https://blog.henrywhu.cn/atom.xml",
    icon: "https://blog.henrywhu.cn/favicon.ico",
    avatar: "https://bu.dusays.com/2024/06/28/667e684e0adbe.png",
    archs: ["Gridea", "\u670D\u52A1\u5668"],
    date: "2024-07-24",
    comment: "\u9AD8\u4E2D\u751F\uFF0C\u5F88\u6709\u535A\u5BA2\u7684\u5473\u9053\u3002"
  }, {
    author: "Xlenco",
    sitenick: "\u5E0C\u4E50\u535A\u5BA2",
    desc: "\u4E92\u8054\u7F51\u4E2D\u7684\u9759\u8C27\u4E4B\u5730",
    link: "https://blog.xlenco.top/",
    feed: "https://blog.xlenco.top/atom.xml",
    icon: "https://weavatar.com/avatar/67254b346498965226e5c91ebff66a69570b97f224d2d061e504b4eade1f00fa",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=4",
    archs: ["Nuxt", "Vercel"],
    date: "2024-07-28",
    comment: "\u5B66\u751F\uFF0C\u7ECF\u9A8C\u5206\u4EAB\u3002"
  }, {
    author: "\u5341\u7396\u516B\u67D2",
    sitenick: "Z\u6B21\u5143",
    desc: "\u63A2\u7D22\u4EE3\u7801\u7684\u4E16\u754C\uFF0C\u8FFD\u5BFB\u751F\u6D3B\u7684\u8BD7\u7BC7",
    link: "https://blog.ahzoo.cn/",
    feed: "https://blog.ahzoo.cn/rss.xml",
    icon: "https://blog.ahzoo.cn/favicon.ico",
    avatar: "https://ahzoo.cn/img/avatar.webp",
    archs: ["Nuxt", "\u670D\u52A1\u5668"],
    date: "2024-08-02",
    comment: "Nuxt\u535A\u5BA2\uFF0C\u6280\u672F\u7B14\u8BB0\u3002"
  }, {
    author: "iMaeGoo",
    sitenick: "\u7A7A\u95F4\u7AD9",
    title: "\u8679\u58A8\u7A7A\u95F4\u7AD9",
    desc: "\u8679\u58A8\u7A7A\u95F4\u7AD9",
    link: "https://www.imaegoo.com/",
    feed: "https://www.imaegoo.com/atom.xml",
    icon: "https://www.imaegoo.com/favicon.ico",
    avatar: "https://www.imaegoo.com/images/avatar.jpg",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-08-19",
    comment: "\u524D\u7AEF\u6298\u817E\u3002"
  }, {
    author: "DuckXu",
    sitenick: "Notebook",
    title: "DuckXu's Notebook",
    desc: "DuckXu's Internet home",
    link: "https://i.duckxu.com/",
    feed: "https://i.duckxu.com/rss.xml",
    icon: "https://kycloud3.koyoo.cn/2024080228778202408022342057562.png",
    avatar: "https://media.duckxu.com/blogfiles/public/iduckxucom.jpg",
    archs: ["Typecho", "\u670D\u52A1\u5668"],
    date: "2024-08-20",
    comment: "\u5B66\u751F\uFF0C\u8BB0\u5F55\u751F\u6D3B\u601D\u8003\u3002"
  }, {
    author: "\u68A6\u7231\u5403\u9C7C",
    desc: "\u4F46\u613F\u65E5\u5B50\u6E05\u9759\u62AC\u5934\u9047\u89C1\u7684\u6EE1\u662F\u67D4\u60C5",
    link: "https://blog.bsgun.cn/",
    feed: "https://cdn.bsgun.cn/Hexo-static/img/favicon.ico",
    icon: "https://unavatar.webp.se/blog.bsgun.cn?w",
    avatar: "https://oss-cdn.bsgun.cn/logo/avatar.256.png",
    archs: ["Hexo", "\u56FD\u5185 CDN"],
    date: "2024-08-20",
    comment: "\u535A\u5BA2\u6298\u817E\u3002"
  }, {
    author: "\u5F90\u5F90\u7231coding",
    desc: "\u4E00\u4E2A\u7CBE\u7F8E\u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u8BB0\u5F55\u5E73\u65F6\u7684\u5B66\u4E60\u7B14\u8BB0",
    link: "https://www.xu69.com",
    // feed: 'https://www.xu69.com/rss.xml',
    icon: "https://www.xu69.com/xu-resource/ico.png",
    avatar: getGhAvatar("junxu821"),
    archs: ["Nuxt", "\u56FD\u5185 CDN"],
    date: "2024-09-01",
    comment: "\u524D\u7AEF\u6280\u672F\u7B14\u8BB0\uFF0C\u5E0C\u671B\u80FD\u505A\u597D\u54CD\u5E94\u5F0F\u3002"
  }, {
    author: "DengQN",
    title: "DengQN's Blog",
    desc: "\u666E\u901A\u7A0B\u5E8F\u5458",
    link: "https://dengqn.com/",
    feed: "https://dengqn.com/feed",
    icon: "https://dengqn.com/favicon.ico",
    avatar: "https://dengqn.com/image/headimg.png",
    archs: ["Vue", "\u670D\u52A1\u5668"],
    date: "2024-09-18",
    comment: "\u6280\u672F\u5410\u69FD\u548C\u8FD0\u7EF4\u8BB0\u5F55\u3002"
  }, {
    author: "LineXic",
    desc: "\u5FF5\u5FF5\u4E0D\u5FD8\uFF0C\u5FC5\u6709\u56DE\u54CD",
    link: "https://linexic.top/",
    feed: "https://linexic.top/atom.xml",
    icon: "https://linexic.top/logo.png",
    avatar: "https://linexic.top/avatar.webp",
    archs: ["Hexo", "Vercel"],
    date: "2024-10-02",
    comment: "\u524D\u7AEF\u5B66\u4E60\uFF0C\u9AD8\u4E2D\u751F\u6D3B\u3002"
  }, {
    author: "tinsir888",
    desc: "\u0397\u03BB\u03CD\u03C3\u03B9\u03B1 \u03A0\u03B5\u03B4\u03AF\u03B1",
    title: "min hjemmeside",
    link: "https://tinsir888.github.io/",
    feed: "https://tinsir888.github.io/atom.xml",
    icon: getGhAvatar("tinsir888", { preset: "icon" }),
    avatar: getGhAvatar("tinsir888"),
    archs: ["Hexo", "GitHub Pages"],
    date: "2024-10-18",
    comment: "\u8BA1\u7B97\u673A\u79D1\u5B66\uFF0C\u7559\u5B66\u751F\u6D3B\u3002"
  }, {
    author: "\u9E4A\u6960",
    sitenick: "\u5C0F\u7A9D",
    title: "\u9E4A\u6960\u306E\u5C0F\u7A9D",
    desc: "\u4E16\u754C\u90A3\u4E48\u5927\uFF0C\u6211\u60F3\u53BB\u770B\u770B",
    link: "https://blog.quenan.cn/",
    feed: "https://blog.quenan.cn/atom.xml",
    icon: "https://tuchuang.voooe.cn/images/2024/01/29/logo_icon.png",
    avatar: getGhAvatar("QNquenan"),
    archs: ["Hexo", "Vercel"],
    date: "2024-10-22",
    comment: "\u5B66\u751F\uFF0C\u6280\u672F\u5206\u4EAB\u3002"
  }, {
    author: "\u83DC\u56ED\u524D\u7AEF",
    desc: "\u524D\u7AEF\u5B66\u4E60\u7B14\u8BB0\u5206\u4EAB\u3001\u5C0F\u767D\u90FD\u80FD\u770B\u61C2\u7684\u7B14\u8BB0",
    link: "https://note.noxussj.top/?s=y9",
    icon: "https://note.noxussj.top/logo.png",
    avatar: getGhAvatar("noxussj2"),
    archs: ["VitePress", "\u56FD\u5185 CDN"],
    date: "2024-10-23",
    comment: "\u524D\u7AEF\u5B66\u4E60\u7B14\u8BB0\u3002",
    error: "2024\u5E7412\u6708\u8D77\u65E0\u6CD5\u8BBF\u95EE (504)"
  }, {
    author: "Redish101",
    title: "Redish101 Blog",
    desc: "\u5B66\u751F\uFF0C\u4EBA\uFF0C\u6D3B\u7684",
    link: "https://blog.redish101.top/",
    feed: "https://blog.redish101.top/feed",
    icon: getGhAvatar("Redish101", { preset: "icon" }),
    avatar: getGhAvatar("Redish101"),
    archs: ["Next.js", "Vercel"],
    date: "2024-10-27",
    comment: "\u6C5F\u6E56\u4EBA\u79F0\u6570\u636E\u5E93\uFF0C\u521D\u4E2D\u751F\uFF0C\u535A\u5BA2\u5F00\u53D1\u4E2D\u3002"
  }, {
    author: "Pinpe",
    sitenick: "\u4E91\u7AEF",
    title: "Pinpe\u7684\u4E91\u7AEF",
    desc: "\u4E00\u4E2A\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4E91\u6735\u3002",
    link: "https://pinpe.top/",
    feed: "https://blog.pinpe.top/feed/",
    icon: "https://blog.pinpe.top/wp-content/uploads/2025/01/cropped-b_4807379e998d36def2d307c2b65a7a39-32x32.jpg",
    avatar: "https://pinpe.top/head.jpg",
    archs: ["WordPress", "\u865A\u62DF\u4E3B\u673A"],
    date: "2024-10-31",
    comment: "\u5B66\u751F\uFF0C\u5947\u5999\u5E7B\u60F3\u548C\u601D\u8003\u3002"
  }, {
    author: "\u6D69\u701A\u661F\u6CB3",
    desc: "A Go Enthusiast",
    link: "https://haohanxinghe.com/",
    feed: "https://haohanxinghe.com/atom.xml",
    icon: "https://haohanxinghe.com/assets/images/avatar.jpg",
    avatar: getGhAvatar("codepzj"),
    archs: ["Hexo", "\u670D\u52A1\u5668"],
    date: "2024-10-31",
    comment: "Go\u8BED\u8A00\u5B66\u4E60\uFF0C\u6280\u672F\u5206\u4EAB\u3002"
  }, {
    author: "\u6C34\u6C35\u51AB",
    sitenick: "\u5FAE\u971E",
    desc: "\u6C34\u98CE\u6E05\uFF0C\u665A\u971E\u660E",
    link: "https://yuuu.org/",
    feed: "https://yuuu.org/atom.xml",
    icon: "https://cdn.yuuu.org/img/favicon-32x32.png",
    avatar: "https://cdn.yuuu.org/img/avatar.webp",
    archs: ["Hexo", "Vercel"],
    date: "2024-11-03",
    comment: "\u5B66\u751F\uFF0C\u6280\u672F\u5206\u4EAB\uFF0C\u751F\u6D3B\u3002"
  }, {
    author: "\u4E00\u7C92\u5FAE\u5C18",
    desc: "\u64B7\u5149\u4EE5\u671B\uFF0C\u7EB3\u661F\u4E8E\u77B3",
    link: "https://blog.667408.xyz/",
    feed: "https://blog.667408.xyz/atom.xml",
    icon: getGhAvatar("catxian", { preset: "icon" }),
    avatar: getGhAvatar("catxian"),
    archs: ["Hexo", "Cloudflare"],
    date: "2024-11-07",
    comment: "Hexo\u535A\u5BA2\u6298\u817E\uFF0C\u6280\u672F\u5206\u4EAB\u3002"
  }, {
    author: "Tianli",
    desc: "\u81EA\u77E5\u4E4B\u660E\u662F\u6700\u53EF\u8D35\u7684\u77E5\u8BC6\uFF01",
    link: "https://blog.tianli0.top/",
    feed: "https://blog.tianli0.top/rss.xml",
    icon: getGhAvatar("tianli0", { preset: "icon" }),
    avatar: getGhAvatar("tianli0"),
    archs: ["VitePress", "\u56FD\u5185 CDN"],
    date: "2024-12-04",
    comment: "\u6280\u672F\u5B66\u4E60\u7B14\u8BB0\uFF0CTianliGPT\u5F00\u53D1\u8005\u3002"
  }, {
    author: "\u82B1\u751F\u83B2\u5B50\u7CA5",
    desc: "\u4E0E\u4E16\u65E0\u4E89\uFF0C\u4E0D\u67D3\u4E8E\u6CE5",
    link: "https://blog.hslzz.cn/",
    icon: "https://blog.hslzz.cn/img/favicon.png",
    avatar: "https://blog.hslzz.cn/img/favicon.png",
    archs: ["Hexo", "Vercel"],
    date: "2025-01-03",
    comment: "Hexo\u535A\u5BA2\uFF0C\u8BB0\u5F97\u52A0\u66F4\u3002"
  }, {
    author: "\u4F0D\u5341\u4E03",
    sitenick: "everfu",
    desc: "\u4F60\u597D\u{1F44B}\uFF0C\u6211\u662F\u4F0D\u5341\u4E03\uFF0C\u4E00\u4E2A\u4E09\u6D41\u7F16\u7A0B\u72EE\u3002",
    link: "https://www.efu.me/",
    icon: getGhAvatar("everfu", { preset: "icon" }),
    avatar: getGhAvatar("everfu"),
    archs: ["Next.js", "Vercel"],
    date: "2025-01-12",
    comment: "Hexo Solitude \u4E3B\u9898\u4F5C\u8005\uFF0C\u7ECF\u5E38\u6362\u81EA\u5DF1\u7F51\u7AD9\u3002"
  }, {
    author: "\u9E22\u6800",
    sitenick: "\u4E07\u4E8B\u5C4B\u65E5\u8BB0",
    desc: "\u6BCF\u5929\u5199\u4E0B\u81EA\u5DF1\u7684\u559C\u6B22",
    link: "https://rjjr.cn/",
    feed: "https://rjjr.cn/index.php/feed/",
    icon: "https://cdn.motsuni.cn/1739176973_20250208101223856.png",
    avatar: "https://weavatar.com/avatar/1dc444f85a6673099a47170588bbc6d7?s=96",
    archs: ["WordPress", "\u56FD\u5185 CDN"],
    date: "2025-02-12",
    comment: "\u65E5\u5E38\u3001\u524D\u7AEF\u3001\u798F\u745E\u3002"
  }, {
    author: "\u963F\u5446",
    title: "\u963F\u5446\u7684\u535A\u5BA2",
    desc: "\u5206\u4EAB\uFF0C\u5B66\u4E60\u6709\u8DA3\u7684\u77E5\u8BC6",
    link: "https://adai.fun/",
    feed: "https://adai.fun/atom.xml",
    icon: "https://adai.fun/favicon.ico",
    avatar: "https://www.adai.fun/img/adai.png",
    archs: ["Hexo", "Vercel"],
    date: "2025-03-11",
    comment: "\u6280\u672F\u5206\u4EAB\u4E0E\u751F\u6D3B\u3002"
  }]
}];

const subscriptions = [{
  name: "\u6F2B\u6E38",
  desc: "\u7F51\u4E0A\u51B2\u6D6A\u65F6\u53D1\u73B0\u7684\u7CBE\u5F69\u5185\u5BB9\u4E0E\u5E38\u8BFB\u8BA2\u9605\uFF0C\u4E0E\u541B\u5171\u4EAB\u3002",
  entries: [{
    author: "\u98CE\u8BB0\u661F\u8FB0",
    desc: "\u70ED\u7231\u4F60\u6765\u8FC7\u7684\u6BCF\u5EA6\u6E29\u6696",
    feed: "https://www.thyuu.com/feed",
    link: "https://thyuu.com/",
    icon: "https://std.thyuu.com/logo.svg",
    avatar: "https://std.thyuu.com/logo.svg",
    archs: ["WordPress", "\u670D\u52A1\u5668"],
    date: "2024-02-01"
  }, {
    author: "\u9759\u304B\u306A\u68EE",
    desc: "\u81F4\u865A\u6781\uFF0C\u5B88\u9759\u7B03\u3002",
    link: "https://innei.in/",
    feed: "https://innei.in/feed",
    icon: "https://innei.in/innei.svg",
    avatar: getGhAvatar("Innei"),
    archs: ["Mix Space", "Cloudflare"],
    date: "2024-02-13"
  }, {
    author: "Randwind",
    title: "Randwind's Blog",
    desc: "\u4F60\u53EF\u4EE5\u671F\u5F85\u592A\u9633\u4ECE\u4E1C\u65B9\u5347\u8D77\uFF0C\u800C\u98CE\u5374\u968F\u5FC3\u6240\u6B32\u5730\u4ECE\u56DB\u9762\u516B\u65B9\u5439\u6765\u3002",
    link: "https://www.randwind.com/",
    feed: "https://randwind.com/feed.xml",
    icon: "https://wsrv.nl/?url=randwind.com/favicon.ico",
    avatar: "https://wsrv.nl/?url=randwind.com/favicon.ico",
    archs: ["Hugo", "Cloudflare"],
    date: "2024-02-03",
    comment: "\u4E00\u4E2A\u559C\u6B22\u6298\u817E\u7684 Web \u524D\u7AEF\u5F00\u53D1\u8005\u30022024-05-28 \u5173\u95ED\u53CB\u94FE\u529F\u80FD\u3002"
  }, {
    author: "Myth",
    desc: "\u8352\u5510\u65E0\u804A\u6B63\u7ECF\u6709\u8DA3\u7684\u5927\u5B66\u751F | \u4E1A\u4F59 Minecraft \u8150\u7AF9 | PTer",
    title: "Myth's Blog | Myth \u7684\u5C0F\u7AD9",
    link: "https://myth.cx/",
    feed: "https://myth.cx/index.xml",
    icon: "https://myth.cx/favicon.ico",
    avatar: "https://myth.cx/img/avatar_hu_a008ef868a8cf25a.png",
    archs: ["Hugo", "Cloudflare"],
    date: "2024-04-11"
  }, {
    author: "Dejavu",
    title: "Dejavu's Blog",
    link: "https://blog.dejavu.moe/",
    feed: "https://blog.dejavu.moe/index.xml",
    icon: "https://blog.dejavu.moe/favicon.ico",
    avatar: "https://blog.dejavu.moe/img/avatar_hu153f535f3685d84c2248f9e3bcb0c932_112544_288x288_fill_q75_h2_box_center_2.webp",
    archs: ["Hugo", "Cloudflare"],
    date: "2024-04-29"
  }, {
    author: "\u751C\u9C7C",
    sitenick: "Ayu",
    title: "\u751C\u9C7C/Ayu",
    desc: "\u4E09\u811A\u732B\u591A\u9762\u624B\uFF0C\u52AA\u529B\u5B66\u4E60\u4E16\u754C\u7684\u4E00\u5207\u3002",
    link: "https://ayu.land/",
    feed: "https://ayu.land/rss.zh.xml",
    icon: "https://ayu.land/bin/favicon.png",
    avatar: "https://ayu.land/favicon.png",
    archs: ["HTML", "Deno Deploy"],
    date: "2024-10-26"
  }, {
    author: "Anthony Fu",
    desc: "Hey, I am Anthony Fu, a fanatical open sourceror.",
    link: "https://antfu.me/",
    feed: "https://antfu.me/feed.xml",
    icon: "https://antfu.me/favicon.svg",
    avatar: getGhAvatar("antfu"),
    archs: ["Vue", "Netlify"],
    date: "2024-10-26"
  }, {
    author: "XAOXUU",
    desc: "\u98CE\u66B4\u524D\u5915",
    link: "https://xaoxuu.com/",
    feed: "https://xaoxuu.com/atom.xml",
    icon: "https://xaoxuu.com/assets/xaoxuu/favicon/favicon-32x32.png",
    avatar: getGhAvatar("xaoxuu"),
    archs: ["Hexo", "\u670D\u52A1\u5668"],
    date: "2024-10-26"
  }, {
    author: "\u7121\u540D",
    sitenick: "\u5C0F\u6808",
    title: "\u7121\u540D\u5C0F\u6808",
    desc: "\u5206\u4EAB\u6280\u672F\u4E0E\u79D1\u6280\u751F\u6D3B",
    link: "https://blog.imsyy.top/",
    feed: "https://blog.imsyy.top/rss.xml",
    icon: "https://unavatar.webp.se/blog.imsyy.top",
    avatar: getGhAvatar("imsyy"),
    archs: ["VitePress", "Cloudflare"],
    date: "2024-10-26"
  }, {
    author: "\u6C50\u7B3A",
    sitenick: "\u6700\u5C0F\u53EF\u8BFB",
    desc: "\u57FA\u672C\u65E0\u5BB3\uFF0C\u53EF\u80FD\u6709\u7528",
    link: "https://mvread.blog/",
    feed: "https://mvread.blog/feed",
    icon: "https://wsrv.nl/?url=mmbiz.qpic.cn/mmbiz_png/ObdOUIBwLwlt7jrOzKib6gUM83iaY6d6qLF4fH7AtAyL8mnic0jPicnFLdjXnduL5Pkj8Viah8RJAZzPwOWlj8995Qw/0",
    avatar: "https://cdnv2.ruguoapp.com/FufBpXB3Ax66mh9vkBEjTujMVLmPv3.jpg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/!300x300r/gravity/Center/crop/!300x300a0a0",
    archs: ["WordPress", "\u865A\u62DF\u4E3B\u673A"],
    date: "2024-10-29"
  }]
}];

const runtimeConfig = useRuntimeConfig();
const builder = new XMLBuilder({
  attributeNamePrefix: "$",
  format: true,
  ignoreAttributes: false
});
function mapEntry(item) {
  return {
    $text: item.title || item.sitenick || item.author,
    $type: "rss",
    $xmlUrl: item.feed,
    $created: new Date(item.date).toISOString(),
    $description: item.desc,
    $htmlUrl: item.link || item.feed
  };
}
function flattenGroups(groups) {
  return groups.flatMap((group) => group.entries.filter((entry) => entry.feed).map(mapEntry));
}
const zhilu_opml_get = defineEventHandler(async (_e) => {
  const outlines = [
    mapEntry(myFeed),
    ...flattenGroups(subscriptions),
    ...flattenGroups(friends)
  ];
  const opml = {
    $version: "2.0",
    head: {
      title: `${blogConfig.title}\u7684\u53CB\u94FE\u8BA2\u9605`,
      dateCreated: new Date(blogConfig.timeEstablished).toISOString(),
      dateModified: runtimeConfig.public.buildTime,
      ownerName: blogConfig.author.name,
      ownerEmail: blogConfig.author.email,
      ownerId: blogConfig.author.homepage,
      docs: "https://opml.org/spec2.opml"
    },
    body: { outline: outlines }
  };
  return builder.build({
    "?xml": { $version: "1.0", $encoding: "UTF-8" },
    opml
  });
});

const zhilu_opml_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: zhilu_opml_get
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getClientManifest = () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/macos/Documents/LongvanV2/AI-Blog/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const unheadOptions = {
  disableDefaults: true,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = !isRenderingIsland && PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createHead(unheadOptions);
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.entries.values()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link ||= [];
    islandHead.style ||= [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(_rendered.html),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const createHeadCore = createUnhead;

async function html(ctx) {
  const { options } = ctx;
  const { fonts } = useOgImageRuntimeConfig();
  if (!options.component) {
    throw createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Rendering an invalid component. Received options: ${JSON.stringify(options)}.`
    });
  }
  const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
  const head = createHeadCore();
  head.push(island.head);
  let defaultFontFamily = "sans-serif";
  const normalisedFonts = normaliseFontInput([...options.fonts || [], ...fonts]);
  const firstFont = normalisedFonts[0];
  if (firstFont)
    defaultFontFamily = firstFont.name.replaceAll("+", " ");
  await applyEmojis(ctx, island);
  let html2 = island.html;
  head.push({
    style: [
      {
        // default font is the first font family
        innerHTML: `body { font-family: '${defaultFontFamily}', sans-serif;  }`
      },
      {
        innerHTML: `body {
    transform: scale(${options.props?.scale || 1});
    transform-origin: top left;
    max-height: 100vh;
    position: relative;
    width: ${options.width}px;
    height: ${options.height}px;
    overflow: hidden;
    background-color: ${options.props?.colorMode === "dark" ? "#1b1b1b" : "#fff"};
}
div {
  display: flex;
}
div:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl) {
  display: flex;
  flex-direction: column;
}
div:not(:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl)) {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

svg[data-emoji] {
  display: inline-block;
}
`
      },
      ...fonts.map((font) => {
        return `
          @font-face {
            font-family: '${font.name.replaceAll("+", " ")}';
            font-style: normal;
            font-weight: ${font.weight};
            src: url('/__og-image__/font/${font.key}') format('truetype');
          }
          `;
      })
    ],
    meta: [
      {
        charset: "utf-8"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-wind.global.js"
      },
      {
        innerHTML: `
  window.__unocss = {
    theme: ${JSON.stringify(theme)},
    presets: [
      () => window.__unocss_runtime.presets.presetWind(),
    ],
  }
`
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"
      }
    ],
    link: [
      {
        // reset css to match svg output
        href: "https://cdn.jsdelivr.net/npm/gardevoir",
        rel: "stylesheet"
      }
    ]
  });
  html2 = html2.replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div data-v-inspector-ignore="true" style="position: relative; display: flex; margin: 0 auto; width: ${options.width}px; height: ${options.height}px; overflow: hidden;">${html2}</div>${headChunk.bodyTags}</body>
</html>`;
}

async function useOgImageBufferCache(ctx, options) {
  let enabled = false;
  prefixStorage(useStorage(), withTrailingSlash(options.baseCacheKey || "/"));
  ctx.key;
  let cachedItem = false;
  {
    setHeader(ctx.e, "Cache-Control", "no-cache, no-store, must-revalidate");
    setHeader(ctx.e, "Pragma", "no-cache");
    setHeader(ctx.e, "Expires", "0");
  }
  return {
    enabled,
    cachedItem,
    async update(item) {
      return;
    }
  };
}

async function fontEventHandler(e) {
  const path = parseURL(e.path).pathname;
  const { fonts } = useOgImageRuntimeConfig();
  const key = path.split("/font/")[1];
  if (key.includes(":")) {
    const font2 = fonts.find((f) => f.key === key);
    if (font2?.key && await assets.hasItem(font2.key)) {
      let fontData = await assets.getItem(font2.key);
      if (fontData instanceof Uint8Array) {
        const decoder = new TextDecoder();
        fontData = decoder.decode(fontData);
      }
      if (key.includes(".oft")) {
        setResponseHeader(e, "Content-Type", "font/otf");
      } else if (key.includes(".woff2")) {
        setResponseHeader(e, "Content-Type", "font/woff2");
      } else if (key.includes(".ttf")) {
        setResponseHeader(e, "Content-Type", "font/ttf");
      }
      return Buffer.from(fontData, "base64");
    }
  }
  const [_name, _weight] = key.split(".")[0].split("/");
  if (!_name || !_weight)
    return "Provide a font name and weight";
  const name = _name[0].toUpperCase() + _name.slice(1);
  const weight = Math.round(Number.parseInt(_weight) / 100) * 100;
  const config = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput(config.fonts);
  let font;
  if (typeof getQuery$1(e).font === "string")
    font = JSON.parse(getQuery$1(e).font);
  if (!font) {
    font = normalisedFonts.find((font2) => {
      return font2.name.toLowerCase() === name.toLowerCase() && weight === Number(font2.weight);
    });
  }
  if (!font) {
    return createError({
      statusCode: 404,
      statusMessage: `[Nuxt OG Image] Font ${name}:${weight} not found`
    });
  }
  const css = await globalThis.$fetch(`https://fonts.googleapis.com/css2?family=${name}:wght@${weight}`, {
    headers: {
      // Make sure it returns TTF.
      "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
    }
  });
  if (!css) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Invalid Google Font ${name}:${weight}`
    });
  }
  const ttfResource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (ttfResource?.[1])
    return proxyRequest(e, ttfResource[1], {});
  const woff2Resource = css.match(/src: url\((.+)\) format\('woff2'\)/);
  if (woff2Resource?.[1])
    return sendRedirect(e, woff2Resource[1]);
  return createError({
    statusCode: 500,
    statusMessage: `[Nuxt OG Image] Malformed Google Font CSS ${css}`
  });
}
async function imageEventHandler(e) {
  const ctx = await resolveContext(e);
  if (ctx instanceof H3Error)
    return ctx;
  const { isDebugJsonPayload, extension, options, renderer } = ctx;
  const { debug, baseCacheKey } = useOgImageRuntimeConfig();
  const compatibilityHints = [];
  if (isDebugJsonPayload) {
    const queryExtension = getQuery$1(e).extension || ctx.options.extension;
    if (["jpeg", "jpg"].includes(queryExtension) && options.renderer === "satori")
      compatibilityHints.push("Converting PNGs to JPEGs requires Sharp which only runs on Node based systems.");
    if (options.renderer === "chromium")
      compatibilityHints.push("Using Chromium to generate images is only supported in Node based environments. It's recommended to only use this if you're prerendering");
    setHeader(e, "Content-Type", "application/json");
    return {
      siteConfig: {
        url: e.context.siteConfig.get().url
      },
      compatibilityHints,
      cacheKey: ctx.key,
      options: ctx.options,
      ...options.renderer === "satori" ? await renderer.debug(ctx) : void 0
    };
  }
  switch (extension) {
    case "html":
      setHeader(e, "Content-Type", `text/html`);
      return html(ctx);
    case "svg":
      if (ctx.renderer.name !== "satori") {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/svg+xml`);
      return (await ctx.renderer.debug(ctx)).svg;
    case "png":
    case "jpeg":
    case "jpg":
      if (!renderer.supportedFormats.includes(extension)) {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/${extension === "jpg" ? "jpeg" : extension}`);
      break;
    default:
      return createError({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Invalid request for og.${extension}.`
      });
  }
  const cacheApi = await useOgImageBufferCache(ctx, {
    cacheMaxAgeSeconds: ctx.options.cacheMaxAgeSeconds,
    baseCacheKey
  });
  if (typeof cacheApi === "undefined")
    return;
  if (cacheApi instanceof H3Error)
    return cacheApi;
  let image = cacheApi.cachedItem;
  if (!image) {
    image = await renderer.createImage(ctx);
    if (image instanceof H3Error)
      return image;
    if (!image) {
      return createError({
        statusCode: 500,
        statusMessage: `Failed to generate og.${extension}.`
      });
    }
    await cacheApi.update(image);
  }
  return image;
}

const font = defineEventHandler(fontEventHandler);

const font$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: font
});

const compatibility = {"chromium":"chrome-launcher","satori":"node","resvg":"node","sharp":false,"css-inline":false};

const debug_json = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/json");
  const runtimeConfig = useOgImageRuntimeConfig();
  return {
    siteConfigUrl: useSiteConfig(e).url,
    componentNames,
    runtimeConfig,
    compatibility
  };
});

const debug_json$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: debug_json
});

const image = defineEventHandler(imageEventHandler);

const image$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: image
});

const node$2 = {
  initWasmPromise: Promise.resolve(),
  Resvg: Resvg
};

const node$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: node$2
});

const node = {
  initWasmPromise: Promise.resolve(),
  satori: _satori
};

const node$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: node
});

const empty = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: empty$1
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
