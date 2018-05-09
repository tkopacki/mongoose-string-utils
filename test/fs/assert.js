function assert(actual, desired) {
    if(actual === desired) {
        return true;
    } else {
        print("\t\tFailed: actual(", actual, ") != desired(", desired, ")");
        return false;
    }
}