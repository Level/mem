# Changelog

## [6.0.1] - 2021-10-02

### Fixed

- Bump dependencies to prevent dedupe ([`9c63a61`](https://github.com/Level/mem/commit/9c63a61)) (Vincent Weevers).

## [6.0.0] - 2021-10-01

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- **Breaking:** bump `level-packager` and `memdown` ([`d1fbde2`](https://github.com/Level/mem/commit/d1fbde2)) (Vincent Weevers)

### Removed

- **Breaking:** drop Node.js 6 and 8 ([`3cb1a32`](https://github.com/Level/mem/commit/3cb1a32)) (Vincent Weevers).

## [5.0.1] - 2019-09-08

### Fixed

- Bump `level-packager` to prevent dedupe (for [Level/community#79](https://github.com/Level/community/issues/79)) ([`baec173`](https://github.com/Level/mem/commit/baec173)) ([**@vweevers**](https://github.com/vweevers))

## [5.0.0] - 2019-09-06

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- **Breaking:** Upgrade `memdown` from `^4.0.0` to `^5.0.0` ([#56](https://github.com/Level/mem/issues/56)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `hallmark` devDependency from `^0.1.0` to `^2.0.0` ([#54](https://github.com/Level/mem/issues/54), [#58](https://github.com/Level/mem/issues/58)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `standard` devDependency from `^12.0.0` to `^14.0.0` ([#53](https://github.com/Level/mem/issues/53), [#57](https://github.com/Level/mem/issues/57)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `nyc` devDependency from `^13.2.0` to `^14.0.0` ([#52](https://github.com/Level/mem/issues/52)) ([**@vweevers**](https://github.com/vweevers))

## [4.0.0] - 2019-03-30

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- Upgrade `memdown` from `~3.0.0` to `^4.0.0` ([`35ccf15`](https://github.com/Level/mem/commit/35ccf15)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `level-packager` from `~4.0.0` to `^5.0.0` ([`3f3298e`](https://github.com/Level/mem/commit/3f3298e)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `standard` devDependency from `^11.0.1` to `^12.0.0` ([#45](https://github.com/Level/mem/issues/45)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Apply common project tweaks ([#47](https://github.com/Level/mem/issues/47), [#48](https://github.com/Level/mem/issues/48)) ([**@vweevers**](https://github.com/vweevers))

### Added

- Add `nyc` and `coveralls` ([#44](https://github.com/Level/mem/issues/44), [#49](https://github.com/Level/mem/issues/49)) ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@vweevers**](https://github.com/vweevers))

### Removed

- Remove node 9 ([`f139c37`](https://github.com/Level/mem/commit/f139c37)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Remove `contributors` from `package.json` ([`f09b950`](https://github.com/Level/mem/commit/f09b950)) ([**@vweevers**](https://github.com/vweevers))

## [3.0.1] - 2018-06-24

### Changed

- Upgrade `level-packager` from `~3.0.0` to `~4.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Use proper version range for `tape` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Tweak copyright years for less maintenance
- Use abstract tests from `level-packager` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add `standard` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove `.jshintrc` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [3.0.0] - 2018-05-23

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- Upgrade `memdown` to `~3.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `level-packager` to `~3.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add node 10 to Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `UPGRADING.md` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove node 4 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.0.0] - 2018-02-14

### Changed

- Upgrade `memdown` to `~2.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `level-packager` to `~2.1.1` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: normalize and tweak style ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: add node badge ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Switch to plain MIT license ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Travis: add 9 ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Travis: remove 0.12, 5 and 7 ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.0.2] - 2017-11-28

### Changed

- Update repository url in `package.json` ([**@juliangruber**](https://github.com/juliangruber))

## [1.0.1] - 2017-10-04

### Changed

- Upgrade `memdown` to `~1.4.1` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.0.0] - 2017-08-17

### Changed

- README: update logo and copyright ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: add Greenkeeper badge ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: update copyright year to 2017 ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `memdown` to `~1.2.4` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `level-packager` to `~1.2.1` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Travis: add 4, 5, 6, 7 and 8 ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Travis: remove 0.8 and 0.10 ([**@ghostbar**](https://github.com/ghostbar), [**@ralphtheninja**](https://github.com/ralphtheninja))

## [0.18.0] - 2013-12-05

### Changed

- Upgrade `memdown` to `~0.6.0` ([**@rvagg**](https://github.com/rvagg))
- Upgrade `level-packager` to `~0.18.0` ([**@rvagg**](https://github.com/rvagg))

### Added

- Add Travis ([**@rvagg**](https://github.com/rvagg))

## [0.17.0] - 2013-10-12

:seedling: Initial release.

[6.0.1]: https://github.com/Level/mem/releases/tag/v6.0.1

[6.0.0]: https://github.com/Level/mem/releases/tag/v6.0.0

[5.0.1]: https://github.com/Level/mem/releases/tag/v5.0.1

[5.0.0]: https://github.com/Level/mem/releases/tag/v5.0.0

[4.0.0]: https://github.com/Level/mem/releases/tag/v4.0.0

[3.0.1]: https://github.com/Level/mem/releases/tag/v3.0.1

[3.0.0]: https://github.com/Level/mem/releases/tag/v3.0.0

[2.0.0]: https://github.com/Level/mem/releases/tag/v2.0.0

[1.0.2]: https://github.com/Level/mem/releases/tag/v1.0.2

[1.0.1]: https://github.com/Level/mem/releases/tag/v1.0.1

[1.0.0]: https://github.com/Level/mem/releases/tag/v1.0.0

[0.18.0]: https://github.com/Level/mem/releases/tag/v0.18.0

[0.17.0]: https://github.com/Level/mem/releases/tag/0.17.0
