import HeaderName from '.';

describe('HeaderName', () => {
  it('should create an element', () => {
    const el = HeaderName();

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'header-name');
  });
});
