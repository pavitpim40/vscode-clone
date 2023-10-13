import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from 'store/hooks';
import { readFiles } from 'store/thunks/read-files/readFiles';

const OpenWorkspaceStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const InputFile = styled('input')({ display: 'none' });

const OpenWorkspaceButton = () => {
  const directoryInputRef = useRef(null);
  const dispatch = useAppDispatch();

  const onClick = () => {
    directoryInputRef.current.click();
  };

  const onFileUploaded = async () => {
    try {
      const files = directoryInputRef.current.files;
      await dispatch(readFiles(files));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <OpenWorkspaceStyledButton onClick={onClick}>Open WorkSpace</OpenWorkspaceStyledButton>
      <InputFile
        type="file"
        directory=""
        webkitdirectory=""
        multiple
        ref={directoryInputRef}
        onChange={onFileUploaded}
      />
    </div>
  );
};

export default OpenWorkspaceButton;
