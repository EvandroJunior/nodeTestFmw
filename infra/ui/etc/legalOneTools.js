module.exports = {

    fillLookup: function(lookupName, lookupValue) {
        var self = this;
        return self
        .type(lookupName, lookupValue)
        .click(lookupName)
        .keyboardEvent('keypress', 16777221)
        .waitForSelector('div[style*="block"][class="lookup-dropdown"]>.lookup-wrapper>table>tbody>tr>td[data-val-field]')
        .click('div[style*="block"][class="lookup-dropdown"]>.lookup-wrapper>table>tbody>tr>td[data-val-field]');
    }

};