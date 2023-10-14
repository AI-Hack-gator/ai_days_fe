import { ChatGPTMessage, Device, DisplayType, ProductType, UiGenOutput, UserSession } from "./types";

const uiGenFetch = async (messages: ChatGPTMessage[], userSession: UserSession): Promise<UiGenOutput> => {
  // TODO: integrate with backend
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    "display_type": DisplayType.CARD,
    "product_type": ProductType.PLAN,
    "product_items": [
      {
        "id": "d1",
        "kind": "phone",
        "size": 6.5
      },
      {
        "id": "d2",
        "kind": "tablet",
        "size": 10.1
      }
    ] as Device[]
  }
}