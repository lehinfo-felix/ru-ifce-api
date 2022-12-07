
import env from './config/env';
(async () => {
  const { setupApp } = await import('./config/app')
  const app = await setupApp();
  app.listen(env.port, async () => {
    console.log("ru-ifce-bot iniciado na porta " + env.port + "🚀");
  });
})()