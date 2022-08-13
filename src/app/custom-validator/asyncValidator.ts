import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";




export class AsyncValidator {
    static forbiddenEmail(control : AbstractControl) : Promise<any> | Observable<any> {
        return new Promise((resolve, reject) => {
            if(control.value === 'admin@gmail.com'){
                resolve({emailError : 'This email id is already exist'});
            }else{
                resolve({emailError : null});
            }
        })
    }
}