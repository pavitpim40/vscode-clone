import React from 'react'
import {TreeView,TreeItem} from '@mui/x-tree-view'
import {styled} from '@mui/material/styles'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import FolderIcon from '@mui/icons-material/Folder'
import {useAppSelector,useAppDispatch} from 'store/hooks'
import selectTreeViewData from 'store/selectors/select-tree-view-data/selectTreeViewData'
import { TreeViewNode } from 'types/Files'
import ExtensionIcon from '../extension-icon/ExtensionIcon'
import {openFile} from 'store/thunks/open-file/openFile'

const FileViewer = () => {
  const fileViewerData = useAppSelector(selectTreeViewData) as TreeViewNode;
  const dispatch = useAppDispatch();

  const onSelectNode = (node: TreeViewNode) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: TreeViewNode) => {
    const { id, name, extension } = node;
    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={name}
        onDoubleClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
        sx={{
          padding: '2px',
          color: (theme) => theme.font,
        }}
      >
        {Array.isArray(node.children) ? node.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  if (!Object.keys(fileViewerData).length) {
    return <EmptyMessage>No files</EmptyMessage>;
  }

  return (
    <TreeView
      sx={{ padding: '0px 10px 10px', height: '100%', width: '100%' }}
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
    >
      {renderTree(fileViewerData)}
    </TreeView>
  );
};

const EmptyMessage = styled('div')(({ theme }) => ({
  color: theme.font,
}));

export default FileViewer;