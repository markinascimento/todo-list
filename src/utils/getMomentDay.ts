export function getMomentDay(hour: number): string {
  if (hour > 5 && hour < 12) {
    return "Bom Dia";
  }

  if (hour >= 12 && hour < 18) {
    return "Boa Tarde";
  }

  return "Boa Noite";
}
