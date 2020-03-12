import { Tree } from '@angular-devkit/schematics';
import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { callRule } from '../utils/testing';
import { applyTemplateFiles } from './applyTemplateFiles';

describe('checkProjectExists Rule', () => {
  let tree: UnitTestTree;

  beforeEach(async () => {
    tree = new UnitTestTree(Tree.empty());
  });

  it('should apply the files to the tree', async () => {
    const schema = {};

    tree = (await callRule(applyTemplateFiles(schema), tree)) as UnitTestTree;

    expect(tree.files).toEqual(jasmine.arrayContaining(['libs/destination/test.txt']));
  });
});
