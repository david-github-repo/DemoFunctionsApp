import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono();

app.get('/', (context) => context.text("Heyo, what's up?"));
app.get('/hello', (context) => context.text('Hello, world!'));
app.get('/json', (context) => context.json({ message: 'Hello, JSON!' }));
app.get('/html', (context) => context.html('<h1>Hello, HTML!</h1>'));

export default handle(app);
