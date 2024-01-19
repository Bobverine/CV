import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value
      .split(".")
      .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`)
      .join(" ");
  }
}
