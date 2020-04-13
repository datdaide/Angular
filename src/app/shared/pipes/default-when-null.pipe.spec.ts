import { DefaultWhenNullPipe } from './default-when-null.pipe';

describe('DefaultWhenNullPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultWhenNullPipe();
    expect(pipe).toBeTruthy();
  });
});
