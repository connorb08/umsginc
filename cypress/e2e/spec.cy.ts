describe("Home Page", () => {

    before(() => {

    })

    after(() => {
        
    })



    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it("displays main and footer", () => {
        cy.get('main').should('be.visible');
        cy.get('footer').should('be.visible');
    });

    it("displays nav links", () => {
        cy.get('h2').contains('Governance');
        cy.get('h2').contains('Resources');
        cy.get('h2').contains('Announcements');
        cy.get('h2').contains('Senate');

    });

});

export {}