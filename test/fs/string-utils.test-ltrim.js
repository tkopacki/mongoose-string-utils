load('api_string.js');

function test_ltrim1() {
    let s1 = "";
    return string_ltrim(s1) === "";
}

function test_ltrim2() {
    let s2 = "    ";
    return string_ltrim(s2) === "";
}

function test_ltrim3() {
    let s3 = " aaa";
    return string_ltrim(s3) === "aaa";
}

function test_ltrim4() {
    let s4 = "aaa ";
    return string_ltrim(s4) === "aaa ";
}

function test_ltrim5() {
    let s5 = "  aaa  ";
    return string_ltrim(s5) === "aaa  ";
}

function test_ltrim6() {
    let s6 = " aa aa aa ";
    return string_ltrim(s6) === "aa aa aa ";
}

function test_ltrim() {
    let result = true;
    print("Test: ltrim");
    if(!test_ltrim1()) {
        print("\tTest 1 failed !");
        result = false;
    }
    if(!test_ltrim2()) {
        print("\tTest 2 failed !");
        result = false;
    }
    if(!test_ltrim3()) {
        print("\tTest 3 failed !");
        result = false;
    }
    if(!test_ltrim4()) {
        print("\tTest 4 failed !");
        result = false;
    }
    if(!test_ltrim5()) {
        print("\tTest 5 failed !");
        result = false;
    }
    if(!test_ltrim6()) {
        print("\tTest 6 failed !");
        result = false;
    }
    return result;
}