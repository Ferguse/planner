import createImmutableSelector from 'create-immutable-selector';
import Immutable from 'immutable';

import {
  dateRangeFilterSelector,
  enabledFiltersIdsSelector,
  inputValueSelector,
  enabledLayersIdsSelector,
  enabledPaintersIdsSelector,
  selectedRouteIdsSelector,
  selectedStopIdsSelector,
  routesIdsInLoupeSelector,
  rgRoutesFilterSelector
} from './uiSelectors';

const SUPERVIEW_SEGMENTS = 'api.v_sec_data';
const SUPERVIEW_STOPS = 'api.stop_data';

export const entitiesSelector = state => state.get('entities');

export const routesSelector = createImmutableSelector(
  entitiesSelector,
  selectedRouteIdsSelector,
  (entities, selectedRouteIds) => {
    const routes = entities.get('routes', Immutable.Map({}));
    return routes.withMutations((mutableRoutes) => {
      selectedRouteIds.forEach(selectedRouteId =>
        mutableRoutes.setIn([selectedRouteId.toString(), 'selected'], true));
    });
  }
);

export const allSourcesSelector = createImmutableSelector(
  entitiesSelector,
  map => map.get('sources', Immutable.Map({}))
);

export const sourcesSelector = createImmutableSelector(
  allSourcesSelector,
  // TODO: withMutations
  sources => sources.delete(SUPERVIEW_SEGMENTS).delete(SUPERVIEW_STOPS)
);

export const superviewSourcesSelector = createImmutableSelector(
  allSourcesSelector,
  dateRangeFilterSelector,
  (sources, dateRangeFilter) => {
    const filter = encodeURI(JSON.stringify(dateRangeFilter));

    return Immutable.Map({
      [SUPERVIEW_SEGMENTS]: sources.get(SUPERVIEW_SEGMENTS, Immutable.Map({})),
      [SUPERVIEW_STOPS]: sources.get(SUPERVIEW_STOPS, Immutable.Map({}))
    }).map(source =>
      source.updateIn(['tiles', 0], url => `${url}?filter=${filter}`));
  }
);

export const filtersSelector = createImmutableSelector(
  entitiesSelector,
  entities =>
    entities
      .get('filters', Immutable.Map({}))
      .sortBy(filter => filter.get('weight'))
);

export const filtersWithRoutesCountSelector = createImmutableSelector(
  filtersSelector,
  routesSelector,
  (filters, routes) => filters.size + routes.size
);

export const enabledFiltersSelector = createImmutableSelector(
  filtersSelector,
  enabledFiltersIdsSelector,
  (filters, enabledFiltersIds) =>
    enabledFiltersIds.reduce((acc, filterId) => {
      const filter = filters.get(filterId);
      // there is no filters on initial load
      if (!filter) return acc;
      return acc.set(filterId, filter);
    }, Immutable.Map({}))
);

export const filtersFilteredByInputValueSelector = createImmutableSelector(
  filtersSelector,
  inputValueSelector,
  enabledFiltersIdsSelector,
  (filters, inputValue, enabledFiltersIds) =>
    filters
      .filter(filter =>
        filter
          .get('title', '')
          .toLowerCase()
          .includes(inputValue))
      .withMutations((mutableFilters) => {
        enabledFiltersIds.forEach((filterId) => {
          if (mutableFilters.get(filterId)) {
            mutableFilters.setIn([filterId, 'enabled'], true);
          }
        });
      })
);

export const layersSelector = createImmutableSelector(entitiesSelector, map =>
  map.get('layers', Immutable.Map({})));

export const informationLayersSelector = createImmutableSelector(
  layersSelector,
  layers => layers.filter(layer => layer.get('type') === 'information')
);

export const workingGroupLayersSelector = createImmutableSelector(
  layersSelector,
  rgRoutesFilterSelector,
  (layers, filter) =>
    layers
      .filter(layer => layer.get('type') === 'working_group')
      .map(layer =>
        layer.withMutations(mutableLayer =>
          mutableLayer.updateIn(['styles'], styles =>
            styles.map(style => style.set('filter', filter)))))
);

export const isochronesLayersSelector = createImmutableSelector(
  layersSelector,
  layers => layers.filter(layer => layer.get('type') === 'isochrones')
);

export const panelLayersSelector = createImmutableSelector(
  layersSelector,
  enabledLayersIdsSelector,
  (layers, enabledLayersIds) =>
    layers
      .withMutations((mutableLayers) => {
        enabledLayersIds.forEach(layerId =>
          mutableLayers.setIn([layerId, 'enabled'], true));
      })
      .sortBy(layer => layer.get('weight'))
);

const enabledLayersSelector = createImmutableSelector(
  enabledLayersIdsSelector,
  informationLayersSelector,
  workingGroupLayersSelector,
  isochronesLayersSelector,
  (
    selectedLayersIds,
    informationLayers,
    workingGroupLayers,
    isochronesLayers
  ) => {
    // merge all layers into one Immutable.Map
    const layers = informationLayers.withMutations(mutableLayers =>
      mutableLayers.merge(workingGroupLayers).merge(isochronesLayers));

    // build Immutable.Map with selected Layers only
    return selectedLayersIds.reduce(
      (acc, layerId) => acc.set(layerId, layers.get(layerId)),
      Immutable.Map({})
    );
  }
);

export const mapLayersSelector = createImmutableSelector(
  enabledLayersSelector,
  layers => layers.sortBy(layer => layer.get('map_weight'))
);

export const paintersSelector = createImmutableSelector(
  enabledPaintersIdsSelector,
  entitiesSelector,
  (enabledPaintersIds, entities) =>
    entities
      .get('painters', Immutable.Map({}))
      .withMutations((mutablePainters) => {
        enabledPaintersIds.forEach(painterId =>
          mutablePainters.setIn([painterId, 'enabled'], true));
      })
      .sortBy(painter => painter.get('weight'))
);

/**
 * enabledPaintersSelector returns painters enabled in uiReducer
 * first painter in list is treated as default painter,
 * so if there is no other painters selected, we are using default one
 */
export const enabledPaintersSelector = createImmutableSelector(
  paintersSelector,
  enabledFiltersSelector,
  selectedRouteIdsSelector,
  (painters, filters, selectedRouteIds) => {
    const enabledPainters = painters.filter(
      painter => painter.get('enabled') === true
    );

    if (
      enabledPainters.isEmpty() &&
      (!filters.isEmpty() || !selectedRouteIds.isEmpty())
    ) {
      return painters.take(1);
    }

    return enabledPainters;
  }
);

export const superviewFilterSelector = createImmutableSelector(
  enabledFiltersSelector,
  routesSelector,
  (filters, routes) => {
    const filterBy = filters.reduce(
      (acc, filter) => acc.add(filter.get('filter_by')),
      Immutable.Set()
    );

    const hasRouteIds = routes.reduce((acc, route) => {
      if (route.get('selected') || filterBy.some(f => route.get(f))) {
        return acc.push(['has', route.get('id')]);
      }
      return acc;
    }, Immutable.List());

    return hasRouteIds.isEmpty() ? null : hasRouteIds.unshift('any');
  }
);

export const superviewLayersSelector = createImmutableSelector(
  superviewFilterSelector,
  enabledPaintersSelector,
  (filter, painters) => {
    const mapboxLayers = painters
      .valueSeq()
      .flatMap(painter => painter.get('styles'))
      .toList();

    if (!filter) {
      return mapboxLayers;
    }

    return mapboxLayers.map((mapboxLayer) => {
      const exitingFilter = mapboxLayer.get('filter');
      if (!exitingFilter) {
        return mapboxLayer.set('filter', filter);
      }

      return mapboxLayer.set(
        'filter',
        Immutable.List(['all', exitingFilter, filter])
      );
    });
  }
);

export const createLayerSelector = layerId => (state) => {
  const layers = layersSelector(state);
  return layers.get(layerId);
};

export const mapboxLayersSelector = createImmutableSelector(
  mapLayersSelector,
  layers =>
    layers
      .valueSeq()
      .flatMap(i => i.get('styles'))
      .toList()
);

export const routeSelector = (state, props) =>
  state.getIn(['entities', 'routes', props.routeId]);

export const stopSelector = (state, props) =>
  state.getIn(['entities', 'stops', props.stopId]);

export const routesFilteredByInputValueSelector = createImmutableSelector(
  routesSelector,
  inputValueSelector,
  (routes, inputValue) =>
    routes.filter(route =>
      route
        .get('route_number', '')
        .toLowerCase()
        .includes(inputValue))
);

export const stopsSelector = createImmutableSelector(
  entitiesSelector,
  selectedStopIdsSelector,
  (entities, selectedStopIds) => {
    const stops = entities.get('stops', Immutable.Map({}));
    return stops.withMutations((mutableStops) => {
      selectedStopIds.forEach(selectedStopId =>
        mutableStops.setIn([selectedStopId, 'selected'], true));
    });
  }
);

export const selectedRoutesSelector = createImmutableSelector(
  selectedRouteIdsSelector,
  routesSelector,
  (routeIds, routes) =>
    routeIds.map(routeId => routes.get(routeId)).filter(route => !!route)
);

// https://github.com/reduxjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
export const makeRouteSelector = () =>
  createImmutableSelector(routeSelector, (route) => {
    if (!route) return null;
    const workTimes = route.get('work_times');
    const start = workTimes && workTimes.get('start').substring(0, 5);
    const stop = workTimes && workTimes.get('stop').substring(0, 5);
    return route
      .set('work_times', Immutable.fromJS({ start, stop }))
      .set('route_length', Math.floor(route.get('route_length') / 1000));
  });

// https://github.com/reduxjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
export const makeStopSelector = () =>
  createImmutableSelector(stopSelector, routesSelector, (stop, routes) => {
    if (!stop) return null;

    const stopRouteIds = stop.get('route_ids');
    if (!stopRouteIds) return stop;

    const stopRoutes = stopRouteIds
      .map(routeId => routes.get(routeId))
      .filter(route => !!route);

    return stop.set('routes', stopRoutes);
  });

// https://github.com/reduxjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
export const makeRoutesInLoupeSelector = () =>
  createImmutableSelector(
    entitiesSelector,
    routesIdsInLoupeSelector,
    selectedRouteIdsSelector,
    (entities, routesIdsInLoupe, selectedRouteIds) => {
      if (!routesIdsInLoupe) return null;

      const routes = entities.get('routes', Immutable.Map());
      const routesInLoupe = routesIdsInLoupe.reduce((acc, routeId) => {
        const isSelected = selectedRouteIds.includes(routeId);
        const route = routes.get(routeId).set('isSelected', isSelected);

        return acc.push(route);
      }, Immutable.List());

      return routesInLoupe;
    }
  );
