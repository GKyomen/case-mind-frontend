# Mind Your Data | Frontend

Frontend feito por [Gabriel Kyomen](https://github.com/GKyomen) em novembro de 2021 para o case do processo seletivo da [Mind Consulting](https://mindconsulting.com.br/)

Visite o Backend [clicando aqui](https://github.com/GKyomen/case-mind-backend).

## Iniciando o projeto

### Requisitos
* Node
* Seguir [o README do Backend](https://github.com/GKyomen/case-mind-backend/blob/main/README.md)

### Subindo a aplicação (modo de desenvolvimento)
```
$ git clone https://github.com/GKyomen/case-mind-backend.git
```
```
$ npm install
```
```
$ npm start
```

### Visualizando a aplicação
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

## Funcionalidades
* Registrar um usuário com nome completo, CPF, e-mail, senha e tipo de usuário na tela de login
  * O campo de CPF possui formatação automática por Regex
  * O usuário não é registrado caso já tenha uma conta com mesmo CPF ou mesmo e-mail no banco
  * A senha é criptografada com BCrypt e um hash SHA256
  * O usuário é redirecionado para a tela de perfil em caso de sucesso
* Fazer login com credenciais corretas, utilizando e-mail ou CPF e senha na tela de login
  *  O usuário é redirecionado para a tela de perfil em caso de sucesso
  *  O usuário é barrado em caso de credenciais incorretas ou se tiver sido desativado
* Tela de perfil que mostra todos os seus dados
  * É possível editar seus próprios dados 
  * Caso o usuário seja administrador, ele pode:
    * Visualizar todos os outros usuários em uma tabela
    * Desativar um usuário, impedindo sua entrada no sistema
    * Editar os dados de um usuário, em outra tela
    * Excluir um usuário, impedindo sua entrada no sistema

## Requisitos faltantes
* Imagem de perfil do usuário no momento do registro e da edição
* Mensagens de erro visuais em caso de não conseguir logar ou cadastrar-se (é possível vê-las pelo console)
