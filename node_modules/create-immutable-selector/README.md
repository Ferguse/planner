# create-immutable-selector

`createImmutableSelector` is a customized version of reselect's [createSelector](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc) with [Immutable.is](http://facebook.github.io/immutable-js/docs/#/is) as equality check.

```js
import createImmutableSelector from "create-immutable-selector";

const shopItemsSelector = state => state.getIn(["shop", "items"]);
const taxPercentSelector = state => state.getIn(["shop", "taxPercent"]);

const subtotalSelector = createImmutableSelector(shopItemsSelector, items =>
  items.reduce((acc, item) => acc + item.value, 0)
);
```
