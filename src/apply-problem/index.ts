import { chain, Rule } from '@angular-devkit/schematics';
import { applyTemplateFiles } from './applyTemplateFiles';
import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function applyProblem(schema: Schema): Rule {
  return chain([applyTemplateFiles(schema)]);
}
