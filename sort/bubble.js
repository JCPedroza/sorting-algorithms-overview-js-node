const type = require('./sort.type')

const bubbleSort = (nums) => {
  type.check(nums)

  for (let loop = 0; loop < nums.length - 1; loop++) {
    let ordered = true

    for (let idx = 0; idx < nums.length - loop - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
        ordered = false
      }
    }

    if (ordered) return nums
  }

  return nums
}

module.exports = {
  fun: bubbleSort,
  id: 'optimized bubble sort'
}
