import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { defaults } from '@formulex/utils';

const Values = types
  .model('Values', {})
  .volatile(() => {
    return {
      __internalValues__: observable<any>({}),
      __internalInitialValues__: observable<any>({}),
    };
  })
  .views((self) => {
    return {
      get values() {
        return defaults(
          {},
          toJS(self.__internalValues__),
          toJS(self.__internalInitialValues__),
        );
      },
      get initialValues() {
        return toJS(self.__internalInitialValues__);
      },
    };
  });

export default Values;
