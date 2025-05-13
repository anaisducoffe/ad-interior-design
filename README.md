# ad-interior-design

Former showcase website using Svelte Framework and Bootstrap library.

## Compatibility Requirements

The app is compatible with sass version < 2.0.0 because of the deprecated legacy JS API in Dart sass 2.0.0 and @import rules and Global built-in functions are deprecated in Dart sass 3.0.0.
It is due to depency on bootstrap version 5.3.6. New bootstrap version 6 should introduce @use rules and remove @import, but release date is not announced yet.(on 13th May 2025)

Vite version should also be < 6.0.0 because of Sass version constraints.


## Link Deprecation Notice

The website is no longer active, so some links within the code may be inaccessible or outdated.


## Developing

Once you've installed dependencies with `npm install` start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy the app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
The app was formerly deployed using Vercel.
