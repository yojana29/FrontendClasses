let a = 3;
let log = console.log;
switch (a) {
    case 0:
        {
            log("zero");
            break;
        }
    case 1:
        {
            log("one");
            break;
        }
    case 2 :
    case 3:    
        {
            log("Two,Three");
            break;
        }
    default:
        {
            log("Another Number");
        }
}