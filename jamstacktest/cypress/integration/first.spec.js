describe('Initial Test', () => {

    const url = "http://localhost:8080";

    it('verifies that the test is running', () => {
        let n = 1;
        expect(n).to.equal(1);
    });

    it('should load the homepage', () => {

        cy.visit(url);

    })

    it('should have a h1 with "Homepage" as the text', () => {

        cy.visit(url);
        cy.get('h1').contains('Homepage');
        //cy.contains('h1', 'xxx');
    });

    it('should have a link to Blog post 1', () => {

        cy.visit(url);
        cy.get('a').contains('Interesting Blog Post');

    });

    it('should be able to click the link to Blog post 1', () => {

        cy.visit(url);
        cy.get('a').contains('Blog').click();
        cy.get('a').contains('Interesting Blog Post').click();

        cy.get('h1').contains('Interesting Blog Post');
    });

});