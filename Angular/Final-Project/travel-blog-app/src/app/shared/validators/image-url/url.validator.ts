import { ValidatorFn } from "@angular/forms";

export function imageUrlValidator(url: string[]): ValidatorFn {
    
    const regExp = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/);
    
    return (control) => {
        return control.value === "" || regExp.test(control.value)
            ? null
            : { imageUrlValidator: true };
    };
}