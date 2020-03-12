import { Rule, Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';

const testRunner = new SchematicTestRunner('apply-problem', join(__dirname, '../collection.json'));

export function runSchematic(
  schematicName: string,
  options: any,
  tree: Tree
): Promise<UnitTestTree> {
  return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}

export function callRule(rule: Rule, tree: Tree): Promise<Tree> {
  return testRunner.callRule(rule, tree).toPromise();
}

export function runExternalSchematic<SchemaOptions = any>(
  collectionName: string,
  schematicName: string,
  options: SchemaOptions,
  tree: Tree
) {
  return testRunner
    .runExternalSchematicAsync(collectionName, schematicName, options, tree)
    .toPromise();
}
