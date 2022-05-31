import { getByText } from '@testing-library/dom';
import RowName from '.';

describe('RowName', () => {
  it('should create an element', () => {
    const el = RowName({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'row-name');
    expect(el).toHaveAttribute('data-folder-row', 'true');
  });

  it('should show the name of the parameter', () => {
    const el = RowName({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    getByText(el, 'test');
  });
});
