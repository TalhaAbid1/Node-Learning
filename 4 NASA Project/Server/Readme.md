## Learning Include...

Serving Random Urls From index

Creating a root level Package.json & handle both Client & Server But adding Scripts...

### JEST a Testing Package, 2 Ways to wring test Cases
1 { Add a **test** Folder At Root Level Of Project}
2 { Add a Folder With Name Either `launches.test.js || launches.spec.js` At Multiple Level Of Project > Source Folder Wither Different Projects}(`RECOMMENDED`)
Jest Will Recognize automatically both of these Formate

### Testing in node involves a few different tools being used all together.

1. Test runner, which is what finds all of the tests in your project, runs through them and gives you the results.
2. Test fixtures, where a fixture is just how your tests are set up and organized by module And by the individual tests where each test fixture can run in its own environment with its own sets of variables and data.
3. Assertions, which are basically functions that allow us to check, for example, that we expect five plus five to be equal to the number 10. That's an assertion.
4. Mocking, for example, if we have a database. And hundreds of tests that create, update and delete data in that database. Well, in that situation, we probably don't want the data from each test to stick around to affect the real life data in our database. So what we can do is Mark our database where a create operation won't actually affect our data.
