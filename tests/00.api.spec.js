import TransifexApi from '../src/transifex-api.js';

global.txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});
global.slug = 'project' + require('shortid').generate();

console.log(slug);
describe('An api class', () => {
  it('should exist ', () => {
    expect(txApi).to.not.be.undefined;
  });
});
