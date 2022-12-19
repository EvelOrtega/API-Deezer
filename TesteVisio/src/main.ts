import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const cors = require('cors');
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
