import { getByText } from '@testing-library/dom';
import { Folder } from '@src/types/fileNode';
import NavItemName from '.';

describe('NavItemName', () => {
  it('should show the folder name', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [],
    };

    const el = NavItemName(node);

    getByText(el, 'Folder Name');
  });
});
