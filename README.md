# @redeye/config

Shared ESLint and TypeScript config for RedEye apps.

## Install

```bash
npm install --save-dev @redeye/config
```

Add to `.npmrc` in your project:
```
@redeye:registry=https://npm.pkg.github.com
```

## Usage

### TypeScript (`tsconfig.json`)
```json
{
  "extends": "@redeye/config/tsconfig"
}
```

For Next.js apps:
```json
{
  "extends": "@redeye/config/tsconfig/next"
}
```

### ESLint (`eslint.config.mjs`)
```js
import redeyeConfig from '@redeye/config/eslint';

export default [
  ...redeyeConfig,
  // your overrides
];
```
