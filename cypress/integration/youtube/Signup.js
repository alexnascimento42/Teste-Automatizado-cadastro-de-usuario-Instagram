/// <reference types="Cypress" /> 

import signup from '../../pages/SignupPage'
import signupFactory from '../../factories/SignupFactory'

describe('Cadastro de usuario', () => {

    it('Cadastrar usuario no instagram', () => {
        
        var user = signupFactory.used()

        signup.go()
        signup.fillForm(user)
        signup.newForm()

    })
})