import Header from '.';

describe('Header', () => {
  it('should create an element', () => {
    const el = Header();

    expect(el).toBeInstanceOf(Element);
    expect(el).toHaveAttribute('data-testid', 'header');
  });
});
