# level-mem

**Superseded by [`memory-level`](https://github.com/Level/memory-level). Please see [Frequently Asked Questions](https://github.com/Level/community#faq).**

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
