import { createSelector } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const selectTreeViewData = (userFiles) => {
  const result = {};

  for (let i = 0; i < userFiles.length; i++) {
    const userFile = userFiles[i];
    const { name, relativePath, id, extension } = userFile;
    const paths = relativePath.split('/');
    let j = 0;
    let currentLevel = result;
    while (paths[j] !== name) {
      const path = paths[j];

      // ถ้า currentLevel ไม่ใช่ Array (เป็น Object) และยังไม่มี id ให้สร้าง id ใหม่ และสร้าง children เป็น Array
      if (!Array.isArray(currentLevel) && !currentLevel.id) {
        currentLevel.id = uuidv4();
        currentLevel.name = path;
        currentLevel.children = [];
        currentLevel = currentLevel.children;
        j++;
        continue;
      }

      // ถ้า currentLevel ไม่ใช่ Array (เป็น Object) และมี children ให้เปลี่ยน currentLevel เป็น Array ของ children
      if (!Array.isArray(currentLevel) && currentLevel.children) {
        currentLevel = currentLevel.children;
        j++;
        continue;
      }

      // ถ้า currentLevel เป็น Array

      const subfolder = currentLevel.find((child) => child.name === path);
      if (subfolder) {
        currentLevel = subfolder.children;
        j++;
      } else {
        currentLevel.push({});
        currentLevel = currentLevel[currentLevel.length - 1];
      }
    }

    const fileData = { id, name, extension };
    currentLevel.push(fileData);
  }
  return result;
};

export default createSelector((state) => state.files.userFiles, selectTreeViewData);
