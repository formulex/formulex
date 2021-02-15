import { types } from 'mobx-state-tree';
import Values from './values';

const Features = types.compose(Values, types.model({}));

export default Features;
