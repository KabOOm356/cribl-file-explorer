import RowIcon from '.';

describe('RowIcon', () => {
  it('should create an element', () => {
    const el = RowIcon({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'row-icon');
    expect(el).toHaveAttribute('data-folder-row', 'true');
  });

  it('should have a folder icon if the parameter is a folder', () => {
    const el = RowIcon({
      type: 'folder',
      name: 'test',
      modified: new Date(),
      children: [],
    });

    expect(el.querySelector('i')).toHaveClass('fa-folder-open');
  });

  it('should have a file icon if the parameter is a file', () => {
    const el = RowIcon({
      type: 'file',
      name: 'test',
      modified: new Date(),
      size: 1000,
    });

    expect(el.querySelector('i')).toHaveClass('fa-file');
  });
});
