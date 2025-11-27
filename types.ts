export enum ViewState {
  Initial = 'INITIAL',
  Letter = 'LETTER',
  Forgiven = 'FORGIVEN'
}

export interface ApologyState {
  view: ViewState;
  recipientName: string;
}

export interface GeneratedContent {
  title: string;
  body: string;
}