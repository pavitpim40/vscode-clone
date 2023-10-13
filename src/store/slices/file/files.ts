import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFile } from '../../../types/Files';

export interface FileState {
  userFiles: UserFile[];
  activeFilesIds: string[];
  editorActiveFileId: string | null;
}

export const initialState: FileState = {
  userFiles: [],
  activeFilesIds: [],
  editorActiveFileId: null,
};

const fileSlice = createSlice({
  initialState,
  name: 'files',
  reducers: {
    setFiles(state, action: PayloadAction<UserFile[]>) {
      state.userFiles = action.payload;
      state.activeFilesIds = [];
    },
    addActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds.push(action.payload);
    },
    removeActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds = state.activeFilesIds.filter((id) => id !== action.payload);
    },
    setEditorActiveFile(state, action: PayloadAction<string | null>) {
      state.editorActiveFileId = action.payload;
    },
    updateFileCode(state, action: PayloadAction<{ fileId: string; newCode: string }>) {
      const { fileId, newCode } = action.payload;
      const file = state.userFiles.find((file) => file.id === fileId);
      if (file) {
        file.code = newCode;
      }
    },
  },
});

export const { setFiles, addActiveFile, removeActiveFile, setEditorActiveFile, updateFileCode } = fileSlice.actions;

export const fileReducer = fileSlice.reducer;
