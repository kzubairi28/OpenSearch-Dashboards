/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License. */

import React from 'react';

import { Axis, AreaSeries, Chart, Position, ScaleType, Settings, PartialTheme } from '../../src';
import * as TestDatasets from '../../src/utils/data_samples/test_dataset';
import { SB_SOURCE_PANEL } from '../utils/storybook';
import { ColorVariant } from '../../src/utils/commons';

export const Example = () => {
  const customTheme: PartialTheme = {
    areaSeriesStyle: {
      point: {
        visible: true,
        radius: 10,
        fill: ColorVariant.Series,
        stroke: ColorVariant.None,
        opacity: 0.5,
      },
      area: {
        opacity: 0.2,
      },
      line: {
        visible: false,
      },
    },
  };

  return (
    <Chart className="story-chart">
      <Settings showLegend showLegendExtra legendPosition={Position.Right} theme={customTheme} />
      <Axis id="bottom" position={Position.Bottom} title="Bottom axis" showOverlappingTicks={true} />
      <Axis id="left2" title="Left axis" position={Position.Left} tickFormat={(d: any) => Number(d).toFixed(2)} />

      <AreaSeries
        id="area"
        xScaleType={ScaleType.Ordinal}
        yScaleType={ScaleType.Linear}
        xAccessor="x"
        yAccessors={['y1', 'y2']}
        splitSeriesAccessors={['g']}
        data={TestDatasets.BARCHART_2Y1G}
      />
    </Chart>
  );
};

// storybook configuration
Example.story = {
  parameters: {
    options: { selectedPanel: SB_SOURCE_PANEL },
  },
};
