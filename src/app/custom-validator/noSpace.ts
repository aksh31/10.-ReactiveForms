import { AbstractControl, ValidationErrors } from "@angular/forms";



export class NoSpaceAllowValidator {
    public static spaceNotAllow(control : AbstractControl) : ValidationErrors | null {
        if((control.value as string)?.indexOf(' ') >= 0){
            return {spaceNotAllow:'Space Not Allowed in Username'}
        }else{
            return null;
        }
    }
}