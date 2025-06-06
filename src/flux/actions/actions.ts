
import Dispatcher from '..dispatcher/dispatcher';
import { SelectCeldaAction } from '../types/types';

export const SelectCeldaAction = {
  selectColor(postId: string): void {
    Dispatcher.dispatch({
      type: 'Color',
      postId
    } as SelectColorAction);
  },

  SelectLetter(postId: string): void {
    Dispatcher.dispatch({
      type: 'Letter',
      postId
    } as SelectLetterAction);
  }
};