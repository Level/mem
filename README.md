# level-mem

**A convenience package that bundles [`levelup`](https://github.com/Level/levelup), [`encoding-down`](https://github.com/Level/encoding-down) and [`memdown`](https://github.com/Level/memdown) and exposes `levelup` on its export.**

> :pushpin: This module will soon be [deprecated](https://github.com/Level/community/issues/113), because it is superseded by [`memory-level`](https://github.com/Level/memory-level).

[![level badge][level-badge]](https://github.com/Level/awesome)
[![npm](https://img.shields.io/npm/v/level-mem.svg)](https://www.npmjs.com/package/level-mem)
[![Node version](https://img.shields.io/node/v/level-mem.svg)](https://www.npmjs.com/package/level-mem)
[![Test](https://img.shields.io/github/workflow/status/Level/mem/Test?label=test)](https://github.com/Level/mem/actions/workflows/test.yml)
[![Coverage](https://img.shields.io/codecov/c/github/Level/mem?label=&logo=codecov&logoColor=fff)](https://codecov.io/gh/Level/mem)
[![Standard](https://img.shields.io/badge/standard-informational?logo=javascript&logoColor=fff)](https://standardjs.com)
[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)
[![Donate](https://img.shields.io/badge/donate-orange?logo=open-collective&logoColor=fff)](https://opencollective.com/level)

## Usage

Use this package to avoid having to explicitly install `memdown` when you want to use `memdown` with `levelup` for non-persistent `levelup` data storage.

```js
const level = require('level-mem')

// Create our in-memory database
const db = level()

// Put a key & value
await db.put('name', 'Level')

// Get value by key
const value = await db.get('name')
console.log(value)
```

See [`levelup`](https://github.com/Level/levelup) and [`memdown`](https://github.com/Level/memdown) for more details.

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

## Contributing

[`Level/mem`](https://github.com/Level/mem) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

Support us with a monthly donation on [Open Collective](https://opencollective.com/level) and help us continue our work.

## License

[MIT](LICENSE)

[level-badge]: https://leveljs.org/img/badge.svg
