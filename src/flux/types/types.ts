export interface SelectCeldaAction {
  type: 'Color' | 'Letter';
  postId: string;
}

export interface CeldaState {
  [postId: string]: string;
}