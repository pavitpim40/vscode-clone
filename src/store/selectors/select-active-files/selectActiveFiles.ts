import { createSelector } from '@reduxjs/toolkit';
import { FileState } from 'store/slices/file/files';
import { UserFile } from 'types/Files';
import { RootState } from 'types/Store';

type UserFilesMap = {
  [key: string]: UserFile;
};

// const userFiles = [
//   { id: '1', code: 'whatever' },
//   { id: '2', code: 'HelloWorld' },
// ];

// const userFilesMap = {
//   '1': { id: '1', code: 'whatever' },
//   '2': { id: '2', code: 'HelloWorld' },
// };
const selectActiveFiles = (files: FileState) => {
  const { userFiles, activeFilesIds } = files;
  const userFilesMap = userFiles.reduce((acc, activeFile) => {
    acc[activeFile.id] = activeFile;
    return acc;
  }, {} as UserFilesMap);
  return activeFilesIds.map((id) => userFilesMap[id]);
};

export default createSelector((state: RootState) => state.files, selectActiveFiles);
