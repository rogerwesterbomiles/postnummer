import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

export * from './not-found/not-found.component';
export * from './server-error/server-error.component';

export const errorPages = [NotFoundComponent, ServerErrorComponent];
