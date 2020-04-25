import {AbstractControl} from "@angular/forms";

export function commentValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[a-zA-Z ]{2,}$/.test(control.value);
  return valid
    ? null
    : {invalidComment : {valid: false,
      value: control.value}}
}
