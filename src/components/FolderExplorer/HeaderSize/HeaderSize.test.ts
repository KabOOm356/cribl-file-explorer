import HeaderSize from '.';

describe('HeaderSize', () => {
  it('should create an element', () => {
    const el = HeaderSize();

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'header-size');
  });
});
