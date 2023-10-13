import { removeActiveFile, setEditorActiveFile } from 'store/slices/file/files';
import { AppDispatch, RootState } from 'types/Store';

export const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const {
    files: { activeFilesIds, editorActiveFileId },
  } = getState();

  const activeFilesLength = activeFilesIds.length;

  if (activeFilesLength === 1) {
    dispatch(setEditorActiveFile(null));
  } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveFileId) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);
    dispatch(setEditorActiveFile(newActiveFileId));
  }

  dispatch(removeActiveFile(fileToCloseId));
};

const getNewActiveFileId = (activeFilesIds: string[], activeFilesLength: number, fileToCloseId: string) => {
  const fileToBeRemoveIndex = activeFilesIds.findIndex((id) => id === fileToCloseId);

  if (fileToBeRemoveIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemoveIndex - 1];
  }
  return activeFilesIds[fileToBeRemoveIndex + 1];
};
