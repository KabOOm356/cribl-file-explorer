import { getByText } from '@testing-library/dom';
import RowSize from '.';

describe('RowSize', () => {
  it('should create an element', () => {
    const el = RowSize({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'row-size');
    expect(el).toHaveAttribute('data-folder-row', 'true');
  });

  it('should show the size if the parameter is a file', () => {
    const el = RowSize({
      type: 'file',
      name: 'test',
      modified: new Date(),
      size: 123,
    });

    getByText(el, '123 KB');
  });

  it('should show an empty string if the parameter is a folder', () => {
    const el = RowSize({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    expect(el.textContent).toBe('');
  });
});
