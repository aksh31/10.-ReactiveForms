import { AbstractControl, ValidationErrors } from "@angular/forms";



export class EmpIDValidator {
    static checkEmpID(control : AbstractControl) : ValidationErrors | null {
        let regExp = /^[a-z]\d{3}$/i;
        let val = control.value as string;
        let isValid = regExp.test(val);
        return isValid ? null : {empID : true};
    }
}