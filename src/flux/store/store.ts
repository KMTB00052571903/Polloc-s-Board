//Co

import Dispatcher from '../dispatcher/dispatcher';
import { SelectCeldaAction, CeldaState } from '../types/types';
import { EventEmitter } from 'events';

class CeldaStore extends EventEmitter {
  private state: CeldaStore = {};

  getState(): CeldaStore {
    return this.state;
  }

  getLikes(postId: string): number {
    return this.state[postId] || 0;
  }

  private handleAction(action: CeldaStore): void {
    switch (action.type) {
      case 'SelectCeldaAction':
        this.state[action.postId] = (this.state[action.postId] || 0) + 1;
        break;
      case 'SelectLetterAction':
        this.state[action.postId] = Math.max(0, (this.state[action.postId] || 0) - 1);
        break;
    }
    this.emit('change');
  }

  constructor() {
    super();
    this.dispatchToken = Dispatcher.register(
      (action: SelectCeldaAction) => this.handleAction(action)
    );
  }
}

export default new CeldaStore();