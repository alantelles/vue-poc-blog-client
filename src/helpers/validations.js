export function noBlanks (...fields) {
    var valid = true
    for (let field in fields) {
        if (field.trim().length === 0) {
            valid = false
            break
        }
    }
    return valid
}