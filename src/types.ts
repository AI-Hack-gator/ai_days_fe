export type ChatGPTMessage = {
  role: string;
  name: string;
  content: null | string;
  function_call: any;
}

export type UserSession = {
  is_customer: boolean;
}

export type UiGenInput = {
  user_session: UserSession;
  messages: ChatGPTMessage[];
}

export enum DisplayType {
  TABLE = 'table',
  LIST = 'list',
}

export type UiGenOutput = {
  display_type: DisplayType;
  product_type: ProductType;
  product_items: Plan[] | Device[] | Information;
}

export enum ProductType {
  PLAN = 'plan',
  DEVICE = 'device',
  INFORMATION = 'information',
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
}

export enum DeviceKinds {
  PHONE = 'phone',
  TABLET = 'tablet',
  WATCH = 'watch',
}