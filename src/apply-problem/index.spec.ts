import { Tree } from '@angular-devkit/schematics';
import { runSchematic } from '../utils/testing';

describe('apply-problem', () => {
  it('works', async () => {
    const tree = await runSchematic('apply-problem', {}, Tree.empty());
    expect(tree.files).toEqual(['/libs/destination/test.txt']);
  });
});
