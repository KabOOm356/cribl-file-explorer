import { getByText } from '@testing-library/dom';
import RowModified from '.';

describe('RowModified', () => {
  it('should create an element', () => {
    const el = RowModified({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'row-modified');
    expect(el).toHaveAttribute('data-folder-row', 'true');
  });

  it('should format the modified date', () => {
    const date = new Date();
    const el = RowModified({
      type: 'folder',
      name: 'test',
      modified: date,
      children: [],
    });

    getByText(el, new Intl.DateTimeFormat('en-US').format(date));
  });
});
