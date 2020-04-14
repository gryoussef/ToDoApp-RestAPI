"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'root',
    database: 'nest_test',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map