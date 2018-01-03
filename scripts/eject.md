## Eject from CRNA/Expo to RN

```
npm run eject (ejects all variations to RN)

npm run remove (removes old node_modules, yarn.lock and android & ios folder after eject)

npm run upgrade (generates new ios & android folders and links the dependencies)

make required changes in `scr/boot/setup.js` (remove any references of expo)

change content of .babelrc file accordingly (same for all)

Add pluggins in .eslintrc for `typescript` variations.

Add pluggins in package.json for `typescript variations. (eslint pluggins)

make the required changes to scripts in package.json for typescript varitions
```
