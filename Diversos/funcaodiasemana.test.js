const questoes = require('./funcaodiasemana');

test('testar a função funcaodiasemana', () =>{
    expect(questoes.verificarDia('domingo')).toBe('Pode descançar!')
})
