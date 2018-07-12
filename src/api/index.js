/* eslint-disable no-use-before-define */

import { fetchJSON } from '../utils';
import urls from '../config/urls';

const tilesBaseURL = window.location.origin;

export const fetchSources = () =>
  fetchJSON(urls.sources).then(sources => sources, {});