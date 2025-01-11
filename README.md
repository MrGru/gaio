# gaio

package management: [Bun](https://bun.sh/docs/installation)

To install dependencies:

```bash
bun install
```

Run test

```bash
bun run test # don't use shorthand bun test
```

Run showcase

```bash
bun gapp:start
```

Run ui

```bash
bun ui:start
```

## Config new project with nativewind

- add `tailwindcss`, `nativewind` dependencies
- add custom `metro.config.js`
- add custom `babel.config.js`
- add `tailwind.config.js` => content should include all the components used tailwind.

## Issues

1. Cached when run expo for multiple apps

- use flag `-c` to clear cache

## TODO

- env
- CI/CD
- hot update
- debugger
- testing: unit test (react native testing library), performance test (reassure), e2e test (maestro)
- themes
- react query
- network integration
- zod and react form hook
- dynamic forms
- state management
- storybook
- keyboard
- common components
