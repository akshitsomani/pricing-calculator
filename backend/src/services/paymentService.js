import { PAYMENT_STATUS } from '../utils/constants.js';

const COMMISSION_RATE = 0.05;
const PLATFORM_MARGIN_RATE = 0.07;

export const calculateLedger = ({ sellerBase = 0, logisticsFee = 0 }) => {
  const brokerCommission = sellerBase * COMMISSION_RATE;
  const platformMargin = sellerBase * PLATFORM_MARGIN_RATE;
  const buyerTotal = sellerBase + brokerCommission + platformMargin + logisticsFee;

  return {
    sellerPayout: sellerBase,
    brokerCommission,
    platformMargin,
    logisticsFee,
    buyerTotal,
    status: PAYMENT_STATUS.PENDING
  };
};
