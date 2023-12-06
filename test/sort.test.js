const repo = require('../sort/sort.repo')
const { throws, deepEqual } = require('node:assert/strict')
const { describe, it } = require('node:test')

for (const { fun, id } of repo) {
  describe(`Sorting algorithm "${id}"`, async () => {
    it('throws with no argument', () => {
      throws(() => fun())
    })

    it('throws with non-array argument', () => {
      throws(() => fun(-1))
      throws(() => fun('str'))
      throws(() => fun(false))
      throws(() => fun({ a: 0 }))
    })

    it('sorts empty array', () => {
      deepEqual(fun([]), [])
    })

    it('sorts unary array', () => {
      deepEqual(fun([1]), [1])
    })

    it('sorts reversed array of length 5', () => {
      deepEqual(fun([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
    })
  })
}
