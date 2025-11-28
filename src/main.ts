// Punto di bootstrap: indica ad Angular di avviare il modulo root nel browser.
// Suggerimento: tieni questo file minimo così la logica resta in AppModule.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Avvia l’albero di moduli Angular; gli errori finiscono in console per visibilità.
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
