/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export enum VisLayerTypes {
  PointInTimeEvents = 'PointInTimeEvents',
}

export enum VisLayerErrorTypes {
  PERMISSIONS_FAILURE = 'PERMISSIONS_FAILURE',
  FETCH_FAILURE = 'FETCH_FAILURE',
}

export interface VisLayerError {
  type: keyof typeof VisLayerErrorTypes;
  message?: string;
}

export type PluginResourceType = string;

export interface PluginResource {
  type: PluginResourceType;
  id: string;
  name: string;
  urlPath: string;
}

export interface VisLayer {
  type: keyof typeof VisLayerTypes;
  originPlugin: string;
  pluginResource: PluginResource;
  error?: VisLayerError;
}

export type VisLayers = VisLayer[];

export interface EventMetadata {
  pluginResourceId: string;
  tooltip?: string;
}

export interface PointInTimeEvent {
  timestamp: number;
  metadata: EventMetadata;
}

export interface PointInTimeEventsVisLayer extends VisLayer {
  events: PointInTimeEvent[];
}

export const isPointInTimeEventsVisLayer = (obj: any) => {
  return obj?.type === VisLayerTypes.PointInTimeEvents;
};

export const isValidVisLayer = (obj: any) => {
  return obj?.type in VisLayerTypes;
};
