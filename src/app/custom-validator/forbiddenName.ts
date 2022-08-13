import { AbstractControl, ValidationErrors } from "@angular/forms";
import { retry } from "rxjs";


export class ForbiddenNameValidator {
    public static forbiddName(control : AbstractControl) : ValidationErrors | null {
        if((control.value as string)?.toLowerCase().includes('admin')){
            return {forbiddenName : 'Admin is already exist ..!'}
        }else{
            return null
        }
    }
}