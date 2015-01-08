module.exports = {

    'Amazon does its thing': function (test) {
        test
            .open('http://www.amazon.com/')
            .type('#twotabsearchtextbox', 'Blues Brothers VHS')
            .click('.nav-submit-input')
            .waitForElement('#result_0')
            .assert.text('#result_0 .a-spacing-small a h2').is('Blues Brothers 2000 - Collector\'s Edition')
            .done();
    }
};
