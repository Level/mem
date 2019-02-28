# Level-Mem-Sync

To build the synchronous version of level-mem:

```sh
npm install
./fix-deps.sj

# Check that everything worked
node patch/test.js

# Build the sync version
./node_modules/.bin/ncc build level-mem.js && mv dist/index.js level-mem-sync.js

# Check that the compiled version works
node patch/test2.js
```




