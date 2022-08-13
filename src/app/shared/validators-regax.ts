


export class  CustomRegex {
    public static textOnly = '^[a-zA-z]*$';
    public static email = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-zA-Z]{2,100}$';
    public static password = '/^(?=.[A-Za-z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,}$/'
}