"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rotas_1 = __importDefault(require("./rotas"));
const app = (0, express_1.default)();
const porta = 8001;
app.use(express_1.default.json());
app.use(rotas_1.default);
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}...`);
});
