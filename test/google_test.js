module.exports = {
    'Page title is correct': function (test) {
        test
            .open('http://www.test.de')
            .assert.title().is('Stiftung Warentest', 'It has title')
            .done();
    }
};
