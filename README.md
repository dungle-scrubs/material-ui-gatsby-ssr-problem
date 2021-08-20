# Issue

There seems to be an issue surrounding the use of `gatsby-plugin-material-ui` combined with Mui's accordion component.

The problem exists due to `browserlist` accessing the file system via `fs`, which Gatsby v3 doesn't like.

Therefore incremental builds are disabled.

Error:

```
warn Unsafe builtin method was used, future builds will need to rebuild all pages
warn WebpackError: Unsafe builtin usage fs.existsSync:
    at material-ui-gatsby-ssr-problem/node_modules/browserslist/node.js:38:1
    at material-ui-gatsby-ssr-problem/node_modules/browserslist/node.js:202:1
    at material-ui-gatsby-ssr-problem/node_modules/browserslist/node.js:49:1
    at material-ui-gatsby-ssr-problem/node_modules/browserslist/node.js:200:1
    at material-ui-gatsby-ssr-problem/node_modules/browserslist/index.js:433:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/browsers.js:54:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/browsers.js:42:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/supports.js:41:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/supports.js:86:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/supports.js:247:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/supports.js:245:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/supports.js:270:1
    at material-ui-gatsby-ssr-problem/node_modules/autoprefixer/lib/processor.js:67:1
    at material-ui-gatsby-ssr-problem/node_modules/postcss/lib/container.js:119:1
    at material-ui-gatsby-ssr-problem/node_modules/postcss/lib/container.js:55:1

  36 |     return filenessCache[file]
  37 |   }
> 38 |   var result = fs.existsSync(file) && fs.statSync(file).isFile()
     | ^
  39 |   if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
  40 |     filenessCache[file] = result
  41 |   }
```
