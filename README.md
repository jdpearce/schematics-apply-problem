# Getting Started With Schematics

This repository is intended to illustrate a problem with testing the `apply`/`mergeWith` rule only by using `callRule` rather than running the entire schematic.

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

When you run the tests, the index test will pass but the `applyTemplateFiles.spec.ts` test will fail with an error like this:

```bash
Failures:
1) checkProjectExists Rule should apply the files to the tree
  Message:
    TypeError: Cannot read property 'path' of undefined
  Stack:
        at <Jasmine>
        at ./apply-problem/node_modules/@angular-devkit/schematics/tools/file-system-engine-host-base.js:216:96
        at ./tmp/apply-problem/node_modules/@angular-devkit/schematics/src/rules/url.js:13:73
        at Object.callSource (./tmp/apply-problem/node_modules/@angular-devkit/schematics/src/rules/call.js:55:20)
        at ./tmp/apply-problem/node_modules/@angular-devkit/schematics/src/rules/base.js:45:60
        at Object.callSource (./tmp/apply-problem/node_modules/@angular-devkit/schematics/src/rules/call.js:55:20)
        at ./tmp/apply-problem/node_modules/@angular-devkit/schematics/src/rules/base.js:53:23
        at MergeMapSubscriber.project (./tmp/apply-problem/node_modules/@angular-devkit/schematics/src/rules/call.js:74:24)
        at MergeMapSubscriber._tryNext (./tmp/apply-problem/node_modules/rxjs/internal/operators/mergeMap.js:69:27)
        at MergeMapSubscriber._next (./tmp/apply-problem/node_modules/rxjs/internal/operators/mergeMap.js:59:18)
        at MergeMapSubscriber.Subscriber.next (./tmp/apply-problem/node_modules/rxjs/internal/Subscriber.js:66:18)

2 specs, 1 failure
```

The origin of this error seems to suggest that context is expected which isn't being provided by `callRule` 🤷‍♀️
