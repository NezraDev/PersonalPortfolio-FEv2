type ClassValue = string | number | boolean | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter((v) => typeof v === "string" && v.length > 0).join(" ");
}
