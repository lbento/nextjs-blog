# Site Bike Itaú

O site será um PWA, ou seja, funcionara tanto como app mobile quanto pelo browser

Site desenvolvido utilizando as tecnologias:

- React-Dom (React pra web)
- [NextJs](https://nextjs.org/)

## Requisitos

NodeJS >= v12.18.4

## Rodando o projeto

Para rodar o projeto em ambiente de desenvolvimento, é necessário seguir os seguintes passos:

```bash
npm install
npm run dev
```

O projeto estará disponível na url `http://localhost:3000/` (a porta 3000 é utilizada como padrão).

Para cancelar a execução, basta um `Ctrl+C` no lugar em que estiver sendo executado.

Ps. Em algumas maquinas, quando se tenta inicializar novamente, ocorre um erro dizendo que a porta já está em uso, caso isso aconteça, basta executar o comando `npx kill-port {port}`

### Detalhes

O build de desenvolvimento é sem otimização, ou seja, ao rodar o projeto, é perceptível que ele é mais lento pois ele busca e renderiza a página na hora em que ela está sendo acessada (diferente do build de produção)

## Build para produção

Para gerar um build para produção com todas as otimizações, é necessário seguir os seguintes passos:

```bash
npm install
npm run build
npm start
```

Ps. Para cancelar a execução, basta um `Ctrl+C` no lugar em que estiver sendo executado.

Ps. Em algumas maquinas, quando se tenta inicializar novamente, ocorre um erro dizendo que a porta já está em uso, caso isso aconteça, basta executar o comando `npx kill-port {port}`

### Detalhes

Diferente do build de desenvolvimento, o build de produção é bem mais otimizado e a troca de páginas é perceptivelmente mais rápida pois as páginas já estão pré renderizadas no servidor e quando o usuário acessa a página, ela já está pronta
