type Callback = (action: any) => void;

class Dispatcher {
  private callbacks: Callback[] = [];

  register(callback: Callback): string {
    this.callbacks.push(callback);
    return this.callbacks.length - 1;
  }

  dispatch(action: any): void {
    this.callbacks.forEach(callback => callback(action));
  }
}

export default new Dispatcher();