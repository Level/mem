level-mem
=========

<img alt="LevelDB Logo" height="100" src="http://leveldb.org/img/logo.svg">

**A convenience package bundling LevelUP & MemDOWN**

[![NPM](https://nodei.co/npm/level-mem.png)](https://nodei.co/npm/level-mem/)

[![Build Status](https://secure.travis-ci.org/Level/level-mem.png)](http://travis-ci.org/Level/level-mem) [![Greenkeeper badge](https://badges.greenkeeper.io/Level/level-mem.svg)](https://greenkeeper.io/)

This is a convenience package that bundles the current release of **[LevelUP](https://github.com/rvagg/node-levelup)** and **[MemDOWN](https://github.com/rvagg/node-memdown)** and exposes LevelUP on its export.

Use this package to avoid having to explicitly install MemDOWN when you want to use MemDOWN with LevelUP for non-persistent LevelUP data storage.

```js
var level = require('level-mem')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = level('w00t')

// 2) put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // ta da!
    console.log('name=' + value)
  })
})
```

See **[LevelUP](https://github.com/rvagg/node-levelup)** and **[MemDOWN](https://github.com/rvagg/node-memdown)** for more details.

<a name="contributing"></a>
Contributing
------------

**level-mem** is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/Level/level/blob/master/CONTRIBUTING.md) file for more details.

<a name="licence"></a>
Licence &amp; copyright
-------------------

Copyright (c) 2012-2017 Rod Vagg contributors (listed above).

**level-mem** is licensed under an MIT +no-false-attribs license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
