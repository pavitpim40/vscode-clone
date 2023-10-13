import selectActiveFiles from './selectActiveFiles';

it('should return active files', () => {
  const userFiles = [
    { id: '1', name: 'index.js', relativePath: 'src/index.js', code: "console.log('hello world')", extension: 'js' },
    { id: '2', name: 'index.html', relativePath: 'src/index.html', code: '<h1>Hello World</h1>', extension: 'html' },
    { id: '3', name: 'index.css', relativePath: 'src/index.css', code: 'h1 { color: red; }', extension: 'css' },
  ];

  const activeFilesIds = ['3', '1'];

  const state = {
    // you can use .js for test only significant part of state
    files: {
      userFiles,
      activeFilesIds,
      editorActiveFileId: null,
    },
    // mock pass TS
    darkMode: false,
    // mock redux-persist for pass TS
    _persist: {
      version: -1,
      rehydrated: true,
    },
  };

  const expectedResult = [
    { id: '3', name: 'index.css', relativePath: 'src/index.css', code: 'h1 { color: red; }', extension: 'css' },
    { id: '1', name: 'index.js', relativePath: 'src/index.js', code: "console.log('hello world')", extension: 'js' },
  ];

  expect(selectActiveFiles(state)).toEqual(expectedResult);
});
