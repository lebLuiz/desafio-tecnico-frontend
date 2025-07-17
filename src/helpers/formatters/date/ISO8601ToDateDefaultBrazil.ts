export default function (date: Date | string): string {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Sao_Paulo",
  };
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
}
