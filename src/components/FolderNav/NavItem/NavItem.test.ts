import { Folder, File } from '@src/types/fileNode';
import {
  getByLabelText,
  getByTestId,
  getByText,
  queryByTestId,
  waitFor,
} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import NavItem from '.';

describe('NavItem', () => {
  it('should return null if the node is not a folder', () => {
    const node: File = {
      name: 'File Name',
      type: 'file',
      modified: new Date(),
      size: 0,
    };

    const el = NavItem(node);

    expect(el).toBeNull();
  });

  it('should show the root folder name', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [],
    };

    const el = NavItem(node);

    getByText(el!, 'Folder Name');
  });

  it('should not show the expand icon if there are no children', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [],
    };

    const el = NavItem(node);

    expect(queryByTestId(el!, 'nav-item-expand')).not.toBeInTheDocument();
  });

  it('should show the expand icon if there are children', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [
        {
          name: 'Child',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
      ],
    };

    const el = NavItem(node);

    getByTestId(el!, 'nav-item-expand');
  });

  it('should expand the children when the expand icon is clicked', async () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [
        {
          name: 'Child',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
      ],
    };

    const el = NavItem(node);

    await userEvent.click(getByLabelText(el!, 'Expand folder'));
    // Since jest isn't playing well with less, we have to check for the open class instead of the children to be visible
    await waitFor(() => expect(el).toHaveClass('open'));
  });

  it('should dispatch an event when the folder is clicked', async () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [],
    };

    let event: CustomEvent<Folder> | undefined;
    document.addEventListener('openFolder', (e) => {
      event = e as CustomEvent<Folder>;
    });

    const el = NavItem(node);

    await userEvent.click(getByText(el!, 'Folder Name'));

    await waitFor(() => expect(event).toBeDefined());
    expect(event!.detail).toBe(node);
  });
});
