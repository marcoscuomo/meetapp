import Sequelize, { Model } from 'sequelize';

class User extends model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.STRING,
                passwoard_hash: Sequelize.STRING,
            }, 
            {
                sequelize,
            }
        );
        }
    }
}

export default User;