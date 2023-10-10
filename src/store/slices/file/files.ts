import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFile } from '../../../types/Files';

export interface FileState {
  userFiles: UserFile[];
  activeFileIds: string[];
  editorActiveFileId: string | null;
}

export const initialState: FileState = {
  userFiles: [],
  activeFileIds: [],
  editorActiveFileId: null,
};

const fileSlice = createSlice({
  initialState,
  name: 'file',
  reducers: {
    setFiles(state, action: PayloadAction<UserFile[]>) {
      state.userFiles = action.payload;
      state.activeFileIds = [];
    },
    addActiveFile(state, action: PayloadAction<string>) {
      state.activeFileIds.push(action.payload);
    },
    removeActiveFile(state, action: PayloadAction<string>) {
      state.activeFileIds = state.activeFileIds.filter((id) => id !== action.payload);
    },
    setEditorActiveFileId(state, action: PayloadAction<string | null>) {
      state.editorActiveFileId = action.payload;
    },
    updateFileCode(state, action: PayloadAction<{ filedId: string; newCode: string }>) {
      const { filedId, newCode } = action.payload;
      const file = state.userFiles.find((file) => file.id === filedId);
      if (file) {
        file.code = newCode;
      }
    },
  },
});

export const { setFiles, addActiveFile, removeActiveFile, setEditorActiveFileId, updateFileCode } = fileSlice.actions;

export const fileReducer = fileSlice.reducer;
