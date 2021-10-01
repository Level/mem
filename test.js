'use strict'

const test = require('tape')
const level = require('.')

require('level-packager/abstract/base-test')(test, level)
require('level-packager/abstract/db-values-test')(test, level, true)
