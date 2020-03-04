const express = require('express');
const routes = require('./routes');

/*O método construtor é chamado automaticamente quando a classe é instanciada 
Essa classe App só é chamada uma vez */

class App{
    constructor(){
        this.server = express();

        //É necessário chamar os métodos criados fora do construtor dentro dele, senão nunca serão (chamados).
        this.middlewares();
        this.routes();
    }

    middlewares(){//Método
        this.server.use(express.json());
    }

    routes(){//Método
        /* As rotas ficam em um arquivo diferente, então, eles devem ser importadas para esse arquivo.
        Lembrando que isso aqui, o app é como se fosse o corpo da minha aplicação */
        this.server.use(routes);
    }
}

//Exportando do meu arquivo App, e o server é a unica coisa que deve ser acessada. Daí exporto ele diretamente
module.exports = new App().server;