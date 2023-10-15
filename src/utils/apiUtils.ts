import {
  ChatGPTMessage,
  Device,
  DisplayType,
  Plan,
  ProductType,
  UiGenOutput,
  UserSession,
} from "../types";

const devicesDemo = [
  {
    battery: "5,000 mAh",
    camera: "Quad 108 MP rear, 40 MP front",
    connectivity: "5G, Wi-Fi 6E",
    display: "6.8 inches Dynamic AMOLED",
    image:
      "https://ss7.vzw.com/is/image/VerizonWireless/samsung-diamond-3-green",
    links: "https://www.verizon.com/smartphones/samsung-galaxy-s23-ultra/",
    monthly_price: "Starts at $33.33/mo",
    operating_system: "Android 13",
    other_features: null,
    overview:
      "The Samsung Galaxy S Series has a legacy of pushing the boundaries of what a smartphone can do, and with Galaxy S23 Ultra, they’re raising that bar again. Galaxy S23 Ultra features the highest camera resolution on a phone, and with stunning Night Mode powered by Nightography, you can take your best shots no matter the lighting. Plus, with the fastest Snapdragon processor yet, you can juggle high-intensity games and toggle between multiple apps or video calls with ease. Working on the go? Write, sketch, edit, create and share from anywhere with a built-in S Pen. Do all this and more on an incredibly large display built for gaming, streaming, creating and doing– and now you can pair it with Verizon’s ultra-fast 5G Ultra Wideband network. Do more of what you love with S23 Ultra and the network America relies on.",
    processor: "Exynos 2200 or Snapdragon 8 Gen 2 (USA)",
    product: "Samsung Galaxy S23 Ultra",
    promotion:
      "['Get a $200 Verizon Gift Card when you switch.', 'Buy the Android Smart phone device and get $170 off a Samsung Galaxy Watch. New line for watch required.']",
    ram: "12 GB",
    retail_price: 1199.99,
    storage: "128/256/512 GB, 1 TB",
    trade_in:
      "Get up to $1000 off this device when you trade in. New line required.",
  },
  {
    battery: "4,000 mAh",
    camera: "Dual 50 MP rear, 10 MP front",
    connectivity: "5G, Wi-Fi 6E",
    display: "6.2 inches Dynamic AMOLED",
    image:
      "https://ss7.vzw.com/is/image/VerizonWireless/samsung-diamond1-cream",
    links: "https://www.verizon.com/smartphones/samsung-galaxy-s23/",
    monthly_price: "Starts at $22.22/mo",
    operating_system: "Android 13",
    other_features: "In-display fingerprint sensor, IP68",
    overview:
      "Meet the Samsung Galaxy S23, the phone that takes you out of the everyday and into the epic. Life doesn’t wait for the perfect lighting, but with Nightography, you are always ready to seize the moment and snap photos like a pro. See your content clearly no matter the time of day on a display with a refresh rate up to 120Hz and adaptive Vision Booster. Capture and create in rich detail, and then use Quick Share1 to share across devices without losing quality. And now you can pair it with Verizon’s ultra-fast 5G Ultra Wideband network– do more of what you love with Galaxy S23 and the network America relies on.",
    processor: "Exynos 2200 or Snapdragon 8 Gen 2 (USA)",
    product: "Samsung Galaxy S23",
    promotion:
      "['Get a $200 Verizon Gift Card when you switch.', 'Buy the Android Smart phone device and get $170 off a Samsung Galaxy Watch. New line for watch required.']",
    ram: "8 GB",
    retail_price: 799.99,
    storage: "128/256 GB",
    trade_in:
      "Get up to $800 off this device when you trade in. New line required.",
  },
  {
    battery: "4,800 mAh",
    camera: "Triple 12 MP rear, 20 MP front",
    connectivity: "5G, Wi-Fi 6E",
    display: "6.7 inches Super Retina XDR",
    image:
      "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-15-pro-max-256gb-natural-titanium-mu683ll-a-a",
    links: "https://www.verizon.com/smartphones/apple-iphone-15-pro-max/",
    monthly_price: "Starts at $33.33/mo",
    operating_system: "iOS 16",
    other_features: "Face ID, Ceramic Shield, MagSafe",
    overview:
      "iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
    processor: "Apple A16 Bionic",
    product: "Apple iPhone 15 Pro Max",
    promotion:
      "['Buy the 5G Apple iPhone device and get $279.99 off a iPad. New line for Apple iPad required.', 'Get a $200 Verizon Gift Card when you switch.']",
    ram: "8 GB",
    retail_price: 1199.99,
    storage: "128/256/512 GB, 1 TB",
    trade_in: "Get $1000 off this device when you trade in. New line required.",
  },
];

const plansDemo = [
  {
    access_to_5G: "5G Nationwide & 5G UW Included ",
    autopay_discount:
      "$10/line per month discount for using Auto Pay and paper-free billing. ",
    features_of_the_unlimited_plan_for_connected_smart_watches:
      "Unlimited 5G / 4G LTE data (+15 GB of premium data). Unlimited Talk & Text",
    features_of_the_unlimited_plan_for_connected_tablets:
      "50% discount per phone line, 15 GB LTE/5G Nationwide Unlimited 5G Ultra Wideband",
    groups_that_get_discounts:
      "first responders, military members or veterans, nurses, teachers or college students.",
    international_data:
      "Talk, text, & data in Canada and Mexico and text for other nations outside the US",
    mobile_hotspot: "30GB of premium hotspot",
    monthly_price_for_1_line: "$80 ",
    monthly_price_for_2_lines: "$70 ",
    monthly_price_for_3_lines: "$55 ",
    monthly_price_for_4_lines: "$45 ",
    perks_you_may_choose_between_for_an_additional_10_dollars:
      "Disney Bundle, 100 GB Mobile Hotspot, Apple One?, Walmart+ Membership, Apple Music Family, Smartwatch Data & Safety,+play $15 Monthly Credit, 3 TravelPass days, 2 TB Cloud Storage ",
    price_to_add_connected_smart_watches: "$10 ",
    price_to_add_connected_tablets_to_the_unlimited_plan: "$20 ",
    product: "Unlimited Plus",
    unlimited_plus_plan_features_for_connected_tablets:
      "50% discount per phone line, 30 GB LTE/5G Nationwide Unlimited 5G Ultra Wideband ",
    unlimited_plus_plan_price_for_connected_tablets: "$30 ",
    video_streaming_using_5G_nationwide_and_4G: "720 p ",
    video_streaming_using_5G_ultra_wideband: "4K ",
    video_streaming_using_hotspot: "1080p ",
  },
] as Plan[];

export const uiGenFetch = async (
  messages: ChatGPTMessage[],
  userSession: UserSession
): Promise<UiGenOutput> => {
  // TODO: integrate with backend
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    display_type: "cards" as DisplayType,
    messages: [
      {
        content: "show me the top 3 devices based on screen size",
        role: "user",
      },
      {
        content: null,
        function_call: {
          arguments: '{\n  "row_type": "cards",\n  "prod_type": "devices"\n}',
          name: "row_orchestration",
        },
        role: "assistant",
      },
      {
        content: null,
        function_call: {
          arguments: '{\n  "items": ["Display"]\n}',
          name: "focus",
        },
        role: "assistant",
      },
      {
        content:
          '["Samsung Galaxy S23 Ultra", "Samsung Galaxy S23", "Apple iPhone 15 Pro Max"]',
        role: "assistant",
      },
    ] as ChatGPTMessage[],
    product_items: plansDemo,
    product_type: "devices" as ProductType,
  };
};
