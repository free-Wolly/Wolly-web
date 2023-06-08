import { gql } from "graphql-request";

const createSimpleOrderMutation = gql`
  mutation CreateSimpleOrder($data: CreateSimpleOrderInput!) {
    createSimpleOrder(data: $data) {
      id
    }
  }
`;

const vars = {
  data: {
    startTime: null!,
    serviceType: null!,
    serviceSubType: null!,
    addressId: null!,
    price: null!,
    paymentMethod: null!,
    endTime: null!,
    duration: null!,
    paymentStatus: null,
    comment: null,
    cleanersQuantity: null,
    chemicalCleaning: {
      twoSeaterSofa: null,
      threeSeaterSofa: null,
      softChair: null,
      sixSeaterSofa: null,
      mattress: null,
      fourSeaterSofa: null,
      fiveSeaterSofa: null,
      carpet: null,
      armchair: null,
    },
    apartmentCleaning: {
      wardrobe: null,
      studio: null,
      premiumLiquids: null,
      petExists: null,
      oven: null,
      livingRoom: null,
      kitchenInside: null,
      kitchen: null,
      fridge: null,
      curtains: null,
      clothesWashing: null,
      cabinet: null,
      bedroom: null,
      bathroom: null,
      balconyArea: null,
      area: null,
    },
    swimmingPoolCleaning: {
      squareMeter: null,
      poolType: null,
    },
    maid: {
      quantity: null,
      hours: null,
    },
  },
};

export default createSimpleOrderMutation;
