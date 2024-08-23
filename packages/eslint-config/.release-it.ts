export default {
  git: {
    commitMessage: 'chore: release eslint-config v${version}',
    tag: false,
    requireCleanWorkingDir: false
  },
  github: {
    release: false
  },
  hooks: {
    'before:init': 'pnpm build'
  },
  npm: {
    skipChecks: true
  }
};