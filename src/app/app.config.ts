import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostReducer } from './components/posts/state/posts.reducer';
import { appReducer } from './states/app.state';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideStore(),provideStore(appReducer),  provideStoreDevtools({maxAge:25,logOnly:!isDevMode})]
};
