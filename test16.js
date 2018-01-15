const getDeps = tree => Object.keys(tree)
  .reduce((deps, name) => deps
      .concat([`${name}@${tree[name].version}`])
      .concat(tree[name].dependencies ? getDeps(tree[name].dependencies) : []),
  [])

module.exports = tree => !tree || !tree.dependencies ? [] : Array.from(new Set(getDeps(tree.dependencies))).sort()
