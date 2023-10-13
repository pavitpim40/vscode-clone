import {
  initialState,
  setFiles,
  addActiveFile,
  removeActiveFile,
  setEditorActiveFile,
  updateFileCode,
  fileReducer,
} from './files';

describe('files slice', () => {
  it('should set user files when the action is setFiles', () => {
    const userFiles = [
      { id: '1', name: 'index.js', relativePath: 'src/index.js', code: "console.log('hello world')", extension: 'js' },
      { id: '2', name: 'index.html', relativePath: 'src/index.html', code: '<h1>Hello World</h1>', extension: 'html' },
    ];

    const expectedState = {
      ...initialState,
      userFiles,
      activeFilesIds: [],
    };

    expect(fileReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
  });

  it('should add active file when the action is addActiveFile', () => {
    const expectedState = {
      ...initialState,
      activeFilesIds: ['1'],
    };

    expect(fileReducer(initialState, addActiveFile('1'))).toEqual(expectedState);
  });

  it('should remove active file when the action is removeActiveFile', () => {
    const modifiedInitialState = {
      ...initialState,
      activeFilesIds: ['1'],
    };

    const expectedState = {
      ...initialState,
      activeFilesIds: [],
    };

    expect(fileReducer(modifiedInitialState, removeActiveFile('1'))).toEqual(expectedState);
  });

  it('should set editor active file id when the action is setEditorActiveFile', () => {
    const expectedState = {
      ...initialState,
      editorActiveFileId: '1',
    };

    expect(fileReducer(initialState, setEditorActiveFile('1'))).toEqual(expectedState);
  });

  it('should set the editor active file id to null when the action is setEditorActiveFile', () => {
    const expectedState = {
      ...initialState,
      editorActiveFileId: null,
    };

    expect(fileReducer(initialState, setEditorActiveFile(null))).toEqual(expectedState);
  });

  it('should update file code when the action is updateFileCode', () => {
    const payload = {
      fileId: '1',
      newCode: 'console.log("change")',
    };

    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'index.js',
          relativePath: 'src/index.js',
          code: "console.log('hello world')",
          extension: 'js',
        },
      ],
    };

    const expectedState = {
      ...modifiedInitialState,
      userFiles: [
        {
          id: '1',
          name: 'index.js',
          relativePath: 'src/index.js',
          code: 'console.log("change")',
          extension: 'js',
        },
      ],
    };

    expect(fileReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState);
  });

  it('should not update the state when the file is not found', () => {
    const payload = {
      fileId: '2',
      newCode: 'console.log("change")',
    };

    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'index.js',
          relativePath: 'src/index.js',
          code: "console.log('hello world')",
          extension: 'js',
        },
      ],
    };

    const expectedState = {
      ...modifiedInitialState,
    };

    expect(fileReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState);
  });
});
