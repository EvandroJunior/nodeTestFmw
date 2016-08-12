module.exports = {

    fill: function (name, value) {
        var self = this;
        return self
            .type(name, value)
            .click(name)
            .keyboardEvent('keypress', 16777221)
            .waitForSelector('div[style*="block"][class="lookup-dropdown"]>.lookup-wrapper>table>tbody>tr>td[data-val-field]')
            .click('div[style*="block"][class="lookup-dropdown"]>.lookup-wrapper>table>tbody>tr>td[data-val-field]');
    }

};