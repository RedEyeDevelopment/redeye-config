# @redeye/config

Shared ESLint and TypeScript config for RedEye apps.

## Install

```bash
npm install --save-dev @redeyedevelopment/config
```

Add to `.npmrc` in your project:
```
@redeyedevelopment:registry=https://npm.pkg.github.com
```

## Usage

### TypeScript (`tsconfig.json`)
```json
{
  "extends": "@redeyedevelopment/config/tsconfig"
}
```

For Next.js apps:
```json
{
  "extends": "@redeyedevelopment/config/tsconfig/next"
}
```

### ESLint (`eslint.config.mjs`)
```js
import redeyeConfig from '@redeyedevelopment/config/eslint';

export default [
  ...redeyeConfig,
  // your overrides
];
```
