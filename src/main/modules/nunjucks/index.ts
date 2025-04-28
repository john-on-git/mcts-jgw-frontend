import * as path from 'path';

import { formatDate, truncateLongString } from '../../assets/js/utils';

import * as express from 'express';
import * as nunjucks from 'nunjucks';

export class Nunjucks {
  constructor(public developmentMode: boolean) {
    this.developmentMode = developmentMode;
  }

  enableFor(app: express.Express): void {
    app.set('view engine', 'njk');
    const env = nunjucks.configure(path.join(__dirname, '..', '..', 'views'), {
      autoescape: true,
      watch: this.developmentMode,
      express: app,
    });
    env.addFilter('formatDate', formatDate);
    env.addFilter('truncateLongString', truncateLongString);

    app.use((req, res, next) => {
      res.locals.pagePath = req.path;
      next();
    });
  }
}
