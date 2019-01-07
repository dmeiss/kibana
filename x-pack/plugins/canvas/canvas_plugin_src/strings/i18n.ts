/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export const i18n =
  typeof STUB_CANVAS_I18N !== 'undefined'
    ? STUB_CANVAS_I18N
    : typeof canvas !== 'undefined'
    ? canvas.i18n
    : {};
