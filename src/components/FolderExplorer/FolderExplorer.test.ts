import { getByText, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { FileNode } from '@src/types/fileNode';
import FolderExplorer from '.';

describe('FolderExplorer', () => {
  it('should show all header columns', () => {
    const el = FolderExplorer({
      type: 'folder',
      name: 'folder',
      modified: new Date(),
      children: [],
    });

    getByText(el, 'Name');
    getByText(el, 'Date Modified');
    getByText(el, 'File Size');
  });

  it('should show the children of the passed file node', () => {
    const el = FolderExplorer({
      type: 'folder',
      name: 'parent',
      modified: new Date(),
      children: [
        {
          type: 'folder',
          name: 'folder',
          children: [],
          modified: new Date(),
        },
        {
          type: 'file',
          name: 'file',
          modified: new Date(),
          size: 10,
        },
      ],
    });

    getByText(el, 'folder');
    getByText(el, 'file');
  });

  it('should respond to openFolder events', async () => {
    const subfolder: FileNode = {
      type: 'folder',
      name: 'folder',
      modified: new Date(),
      children: [
        {
          type: 'file',
          name: 'deep-file',
          modified: new Date(),
          size: 20,
        },
      ],
    };
    const el = FolderExplorer({
      type: 'folder',
      name: 'parent',
      modified: new Date(),
      children: [
        subfolder,
        {
          type: 'file',
          name: 'file',
          modified: new Date(),
          size: 10,
        },
      ],
    });

    document.dispatchEvent(
      new CustomEvent('openFolder', {
        detail: subfolder,
      })
    );

    await waitFor(() => getByText(el, 'deep-file'));
  });

  it('should open the folder when a folder is clicked', async () => {
    const el = FolderExplorer({
      type: 'folder',
      name: 'parent',
      modified: new Date(),
      children: [
        {
          type: 'folder',
          name: 'folder',
          children: [
            {
              type: 'file',
              name: 'deep-file',
              modified: new Date(),
              size: 20,
            },
          ],
          modified: new Date(),
        },
      ],
    });

    await userEvent.click(getByText(el, 'folder'));

    await waitFor(() => getByText(el, 'deep-file'));
  });
});
