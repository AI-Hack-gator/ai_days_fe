// API interface
export type UiGenOutput = {
  display_type: DisplayType;
  product_type: ProductType;
  product_items: Plan[] | Device[] | Information;
  messages: ChatGPTMessage[];
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
  monthly_price_for_1_line: string;
  monthly_price_for_2_lines: string;
  monthly_price_for_3_lines: string;
  monthly_price_for_4_lines: string;
  unlimited_plus_plan_price_for_connected_tablets: string;
  unlimited_plus_plan_features_for_connected_tablets: string;
  price_to_add_connected_tablets_to_the_unlimited_plan: string;
  price_to_add_connected_smart_watches: string;
  features_of_the_unlimited_plan_for_connected_smart_watches: string;
  features_of_the_unlimited_plan_for_connected_tablets: string;
  video_streaming_using_5G_ultra_wideband: string;
  video_streaming_using_5G_nationwide_and_4G: string;
  video_streaming_using_hotspot: string;
  access_to_5G: string;
  mobile_hotspot: string;
  international_data: string;
  perks_you_may_choose_between_for_an_additional_10_dollars: string;
  autopay_discount: string;
  groups_that_get_discounts: string;
  product: string;
};

export type Device = {
  display: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  operating_system: string;
  connectivity: string;
  other_features: string | null;
  image: string;
  overview: string;
  monthly_price: string;
  retail_price: number;
  trade_in: string;
  promotion: string;
  links: string;
  product: string;
};


export type Information = {
  title: string;
  description: string;
  link: string[];
  image_url: string;
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
  TABLE = 'tables',
  CARD = 'cards',
}

export type InputInfo = {
  text: string;
  loading: boolean;
}

export enum ProductType {
  PLAN = 'plans',
  DEVICE = 'devices',
  INFORMATION = 'information',
}


// Componant params