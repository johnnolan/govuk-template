/* istanbul ignore file */
import { initAll } from 'govuk-frontend';
import jsEnabled from './scripts/jsEnabled';

initAll();
jsEnabled(document.body);
