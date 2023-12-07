const type = require('./sort.type')

const selectionSort = (nums) => {
  type.check(nums)

  for (let loop = 0; loop < nums.length; loop++) {
    let idxMin = loop

    for (let idx = loop + 1; idx < nums.length; idx++) {
      if (nums[idx] < nums[idxMin]) {
        idxMin = idx
      }
    }

    [nums[loop], nums[idxMin]] = [nums[idxMin], nums[loop]]
  }

  return nums
}

module.exports = {
  fun: selectionSort,
  id: 'selection sort'
}
