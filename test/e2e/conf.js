exports.config = {
  seleniumAddres: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
}