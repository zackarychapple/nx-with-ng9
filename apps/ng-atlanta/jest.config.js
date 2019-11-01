module.exports = {
  name: 'ng-atlanta',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-atlanta',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
