import { getByText, queryByText } from '@testing-library/dom';
import { Folder } from '@src/types/fileNode';
import NavItemChildren from '.';

describe('NavItemChildren', () => {
  it('should create a nav item for each child', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [
        {
          name: 'Child 1',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
        {
          name: 'Child 2',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
        {
          name: 'Child 3',
          type: 'folder',
          modified: new Date(),
          children: [],
        },
      ],
    };

    const el = NavItemChildren(node);

    getByText(el, 'Child 1');
    getByText(el, 'Child 2');
    getByText(el, 'Child 3');
  });

  it('should recursively create a nav item for each child', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [
        {
          name: 'Child',
          type: 'folder',
          modified: new Date(),
          children: [
            {
              name: 'Nested Child',
              type: 'folder',
              modified: new Date(),
              children: [
                {
                  name: 'Deep Nested Child',
                  type: 'folder',
                  modified: new Date(),
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    };

    const el = NavItemChildren(node);

    getByText(el, 'Child');
    getByText(el, 'Nested Child');
    getByText(el, 'Deep Nested Child');
  });

  it('should not create a nav item for a child if it is a file', () => {
    const node: Folder = {
      name: 'Folder Name',
      type: 'folder',
      modified: new Date(),
      children: [
        {
          name: 'Child',
          type: 'file',
          modified: new Date(),
          size: 1000,
        },
      ],
    };

    const el = NavItemChildren(node);

    expect(queryByText(el, 'Child')).not.toBeInTheDocument();
  });
});
