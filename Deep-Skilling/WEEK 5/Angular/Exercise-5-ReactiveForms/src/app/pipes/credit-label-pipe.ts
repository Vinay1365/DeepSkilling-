import { Pipe, PipeTransform } from '@angular/core';

/*
 * PURE vs IMPURE PIPES:
 * Pure Pipe (default): Angular runs the transform() method only when it detects a PURE change
 * in the input value (a primitive value change or an object reference change).
 * 
 * Impure Pipe (pure: false): Angular runs transform() on every change-detection cycle,
 * even for mutations inside objects or arrays. This can impact performance if overused.
 */
@Pipe({
  name: 'creditLabel',
  pure: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (credits === null || credits === undefined || credits === 0) {
      return 'No Credits';
    }
    if (credits === 1) {
      return '1 Credit';
    }
    return `${credits} Credits`;
  }
}
