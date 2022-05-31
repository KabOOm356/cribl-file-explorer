import HeaderModified from '.';

describe('HeaderModified', () => {
  it('should create an element', () => {
    const el = HeaderModified();

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'header-modified');
  });
});
