// API interface
export type UiGenOutput = {
  display_type: DisplayType;
  product_type: ProductType;
  product_items: Plan[] | Device[] | Information;
}

export type UiGenInput = {
  user_session: UserSession;
  messages: ChatGPTMessage[];
}

// General
export type Row = {
  ui_gen_output: UiGenOutput;
  chat_gpt_message_index: number;
}

export type Plan = {
  id: string;
  is_unlimited: boolean;
  cost: number;
}

export type Device = {
  id: string;
  kind: DeviceKinds;
  size: number;
}

export type Information = {
  id: string;
  title: string;
  content: string;
  image: string;
}

export type ChatGPTMessage = {
  role: string;
  name: string;
  content: null | string;
  function_call: any;
}

export type UserSession = {
  is_customer: boolean;
}

export enum DisplayType {
  TABLE = 'table',
  CARD = 'card',
}

export type InputInfo = {
  text: string;
  loading: boolean;
}

export enum ProductType {
  PLAN = 'plan',
  DEVICE = 'device',
  INFORMATION = 'information',
}

export enum DeviceKinds {
  PHONE = 'phone',
  TABLET = 'tablet',
  WATCH = 'watch',
}

// Componant params