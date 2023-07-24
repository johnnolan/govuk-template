/* istanbul ignore file */
require('es6-promise/auto');
import { initAll } from 'govuk-frontend';
import jsEnabled from './scripts/jsEnabled';

initAll();
jsEnabled(document.body);
