"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)();
const PORT = Number(process.env.PORT || 3000);
app.register(cors_1.default, {
    origin: '*', // Modify according to your needs
});
app.get('/', async (request, reply) => {
    return { message: 'Hello, Heroku with Fastify!' };
});
app.get('/prompts', async (request, reply) => {
    return { message: 'Hello Prompts!' };
    //const prompts = await prisma.prompt.findMany()
    //return prompts
});
function startServer(port = PORT) {
    app.listen({ port, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server is running at ${address}`);
    });
}
exports.startServer = startServer;
