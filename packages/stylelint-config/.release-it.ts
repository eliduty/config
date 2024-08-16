export default {
  git: {
    commitMessage: 'chore: release stylelint-config v${version}',
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
