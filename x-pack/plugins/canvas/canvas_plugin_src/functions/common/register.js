/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import 'babel-polyfill';

import { applyFunctionStrings, i18nProvider } from '../../strings';
import { functions } from './index';

const { i18n, register } = canvas;

// i18n is only available from Kibana when specs are registered.  Init the Canvas i18n Provider with that instance.
i18nProvider.init(i18n);

// Apply localized strings to the Common Function specs, then register them.
applyFunctionStrings(functions).forEach(register);
