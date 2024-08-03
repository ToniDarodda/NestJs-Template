"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const account_1 = require("../entities/account");
(0, dotenv_1.config)({ path: '.env.development' });
const configService = new config_1.ConfigService();
exports.dataSourceOptions = {
    type: configService.get('TYPE'),
    host: configService.get('HOST'),
    port: parseInt(configService.get('PORT'), 10),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    entities: [account_1.Account],
    migrations: [__dirname + '/../migrations/*.ts'],
    synchronize: false,
};
exports.dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.dataSource.initialize();
//# sourceMappingURL=typeorm.config.js.map