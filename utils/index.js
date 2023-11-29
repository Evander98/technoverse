export const formatCurrency = (num) => {
  const locale = "id-ID";
  const currency = "IDR";

  const options = {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return num.toLocaleString(locale, options);
};
