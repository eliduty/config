export default {
  git: {
    commitMessage: 'chore: release tsconfig v${version}',
    tag: false,
    requireCleanWorkingDir: false
  },
  github: {
    release: false
  },
  npm: {
    skipChecks: true
  }
};
