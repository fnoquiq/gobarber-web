module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        ':arrow_up_down:',
        ':art:',
        ':bug:',
        ':hammer:',
        ':heavy_check_mark:',
        ':memo:',
        ':rocket:',
        ':see_no_evil:',
        ':tada:'
      ]
    ],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'header-min-length': [2, 'always', 10],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', ['sentence-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', ['.']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
    }
  }
}
