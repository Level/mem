# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## Upcoming

Legacy range options have been removed ([Level/community#86](https://github.com/Level/community/issues/86)). If you previously did:

```js
db.createReadStream({ start: 'a', end: 'z' })
```

An error would now be thrown and you must instead do:

```js
db.createReadStream({ gte: 'a', lte: 'z' })
```

The same applies to `db.iterator()`, `db.createKeyStream()` and `db.createValueStream()`.

This release also drops support of legacy runtime environments ([Level/community#98](https://github.com/Level/community/issues/98)):

- Node.js 6 and 8
- Internet Explorer 11
- Safari 9-11
- Stock Android browser (AOSP).

Lastly, in browsers, the [`immediate`](https://github.com/calvinmetcalf/immediate) shim for `process.nextTick()` has been replaced has been replaced with [`queue-microtask`](https://github.com/feross/queue-microtask), except in streams.

## 5.0.0

Upgraded to [`memdown@5.0.0`](https://github.com/Level/memdown/blob/v5.0.0/UPGRADING.md#v5):

> Support of keys & values other than strings and Buffers has been dropped. Internally `memdown` now stores keys & values as Buffers which solves a number of compatibility issues ([Level/memdown#186](https://github.com/Level/memdown/issues/186)). If you pass in a key or value that isn't a string or Buffer, it will be irreversibly stringified.

## 4.0.0

Upgraded to [`memdown@4.0.0`](https://github.com/Level/memdown/blob/v4.0.0/UPGRADING.md#v4) and (through `level-packager@5`) [`levelup@4`](https://github.com/Level/levelup/blob/v4.0.0/UPGRADING.md#v4) and [`encoding-down@6`](https://github.com/Level/encoding-down/blob/v6.0.0/UPGRADING.md#v6). Please follow these links for more information. A quick summary: range options (e.g. `gt`) are now serialized the same as keys, `{ gt: undefined }` is not the same as `{}`, nullish values are now rejected and streams are backed by [`readable-stream@3`](https://github.com/nodejs/readable-stream#version-3xx).

Support of IE10 and node 9 has been dropped.

## 3.0.0

Dropped support for node 4. No other breaking changes.
