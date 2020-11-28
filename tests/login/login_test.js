const { I, sessionPage} = inject();

Feature('login');

Before(() => {
    I.amOnPage('/');
});


Scenario('Click login with empty credentials', async () => {
    I.click(sessionPage.submitButton)
    I.see('Неправильный логин или пароль')
});
