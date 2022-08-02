class SignupPage{
    go(){
        cy.visit('/')

        cy.get('[data-testid="sign-up-link"] > ._7UhW9').click()
        cy.get('.vvzhL').should('have.text', 'Sign up to see photos and videos from your friends.')
    }

    fillForm(user){
        cy.get(':nth-child(4) > ._9GP1n > .f0n8F > ._2hvTZ').type(user.email)
        cy.get('input[name = "fullName"]').type(user.fullName)
        cy.get('input[name = "username"]').type(user.userName)
        cy.get('input[name = "password"]').type(user.password)
        cy.get(':nth-child(9) > .qF0y9 > .sqdOP').click()
        
    }

    newForm(){
        cy.get(':nth-child(1) > .h144Z').select('January')
        cy.get(':nth-child(2) > .h144Z').select('8')
        cy.get(':nth-child(3) > .h144Z').select('1989')  
        cy.get('.lC6p0').click()
        cy.get('.j_2Hd').type('247508')      
    }
}

export default new SignupPage;