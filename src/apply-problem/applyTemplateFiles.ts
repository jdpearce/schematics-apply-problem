import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { Schema } from './schema';

export function applyTemplateFiles(schema: Schema): Rule {
  return mergeWith(
    apply(url('./files'), [
      template({
        ...schema,
        tmpl: ''
      }),
      move('libs/destination')
    ])
  );
}
