/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import moment from 'moment';
import { functionErrors } from '../../errors';

export const axisConfig = () => ({
  name: 'axisConfig',
  aliases: [],
  type: 'axisConfig',
  context: {
    types: ['datatable'],
  },
  help: 'Configure axis of a visualization',
  args: {
    show: {
      types: ['boolean'],
      help: 'Show the axis labels?',
      default: true,
    },
    position: {
      types: ['string'],
      help: 'Position of the axis labels - top, bottom, left, and right',
      options: ['top', 'bottom', 'left', 'right'],
      default: '',
    },
    min: {
      types: ['number', 'date', 'string', 'null'],
      help:
        'Minimum value displayed in the axis. Must be a number or a date in ms or ISO8601 string',
    },
    max: {
      types: ['number', 'date', 'string', 'null'],
      help:
        'Maximum value displayed in the axis. Must be a number or a date in ms or ISO8601 string',
    },
    tickSize: {
      types: ['number', 'null'],
      help: 'Increment size between each tick. Use for number axes only',
    },
  },
  fn: (context, args) => {
    const positions = ['top', 'bottom', 'left', 'right', ''];
    const { position, min, max, ...rest } = args;

    if (!positions.includes(position)) {
      throw functionErrors.axisConfig.positionInvalid(position);
    }

    const minVal = typeof args.min === 'string' ? moment.utc(args.min).valueOf() : args.min;
    const maxVal = typeof args.max === 'string' ? moment.utc(args.max).valueOf() : args.max;

    if (minVal != null && isNaN(minVal)) {
      throw functionErrors.axisConfig.minInvalid(min);
    }
    if (maxVal != null && isNaN(maxVal)) {
      throw functionErrors.axisConfig.maxInvalid(max);
    }

    return {
      min: minVal,
      max: maxVal,
      type: 'axisConfig',
      position,
      ...rest,
    };
  },
});
