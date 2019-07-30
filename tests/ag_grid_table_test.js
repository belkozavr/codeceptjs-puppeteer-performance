Feature('Ag-grid table');

Scenario('Example without { css: selector }', (I) => {
    I.amOnPage('/');
    I.click('Name', '.ag-header-cell[col-id="name"] [role="columnheader"]');
    I.click('Language', '.ag-header-cell[col-id="language"] [role="columnheader"]');
    I.click('Country', '.ag-header-cell[col-id="country"] [role="columnheader"]');
    I.click('Game Name', '.ag-header-cell[col-id="game.name"] [role="columnheader"]');
});

Scenario('example with { css: selector }', (I) => {
    I.amOnPage('/');
    I.click('Name', { css: '.ag-header-cell[col-id="name"] [role="columnheader"]'});
    I.click('Language', { css: '.ag-header-cell[col-id="language"] [role="columnheader"]'});
    I.click('Country', { css: '.ag-header-cell[col-id="country"] [role="columnheader"]'});
    I.click('Game Name', { css: '.ag-header-cell[col-id="game.name"] [role="columnheader"]'});
}); 

