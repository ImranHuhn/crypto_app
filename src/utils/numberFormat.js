export const percentageFormat = (number) => {
  return Math.abs(number).toFixed(1).concat("%")
}

//currying technique to prevent repetition
export const abbreviateCurrency = (currency) => (
  value = { decimalPlaces: 2 }
) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: value.decimalPlaces,
    minimumFractionDigits: 0,
    style: "currency",
    currency
  }).format(value.number);
};


export const longCurrencyFormat = (value) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: value.currency,
  }).format(value.number);
};
