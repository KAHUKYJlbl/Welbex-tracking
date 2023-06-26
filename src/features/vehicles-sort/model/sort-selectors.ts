import { NameSpace, State } from '../../../app/provider/store';
import { SortTypes } from './sort-slice';

export const getCurrentSort = (state: State): SortTypes => state[NameSpace.Sort].currentSort;
