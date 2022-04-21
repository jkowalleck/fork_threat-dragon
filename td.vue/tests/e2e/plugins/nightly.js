module.exports = (on, config) => {
    return Object.assign({}, config, {
        fixturesFolder: 'tests/e2e/fixtures',
        integrationFolder: 'tests/e2e/specs',
        screenshotsFolder: 'tests/e2e/screenshots',
        videosFolder: 'tests/e2e/videos',
        supportFile: 'tests/e2e/support/index.js',
        // baseUrl: 'https://www.threatdragon.com/'
        baseUrl: 'https://limitless-bastion-07726.herokuapp.com/'
    });
};