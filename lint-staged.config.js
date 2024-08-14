module.exports = {
  '*': [
    'pnpm biome format --write --no-errors-on-unmatched --files-ignore-unknown=true',
    'pnpm biome lint --no-errors-on-unmatched --files-ignore-unknown=true --apply-unsafe',
  ],
  '**/package.json': ['pnpm sort-package-json'],
  '*.sh': ['shellcheck'],
};
