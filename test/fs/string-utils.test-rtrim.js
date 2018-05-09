load('api_string.js');

function test_rtrim1() {
    let s1 = "";
    return string_rtrim(s1) === "";
}

function test_rtrim2() {
    let s2 = "    ";
    return string_rtrim(s2) === "";
}

function test_rtrim3() {
    let s3 = " aaa";
    return string_rtrim(s3) === " aaa";
}

function test_rtrim4() {
    let s4 = "aaa ";
    return string_rtrim(s4) === "aaa";
}

function test_rtrim5() {
    let s5 = "  aaa  ";
    return string_rtrim(s5) === "  aaa";
}

function test_rtrim6() {
    let s6 = " aa aa aa ";
    return string_rtrim(s6) === " aa aa aa";
}

function test_rtrim() {
    let result = true;
    print("Test: rtrim");
    if(!test_rtrim1()) {
        print("\tTest 1 failed !");
        result = false;
    }
    if(!test_rtrim2()) {
        print("\tTest 2 failed !");
        result = false;
    }
    if(!test_rtrim3()) {
        print("\tTest 3 failed !");
        result = false;
    }
    if(!test_rtrim4()) {
        print("\tTest 4 failed !");
        result = false;
    }
    if(!test_rtrim5()) {
        print("\tTest 5 failed !");
        result = false;
    }
    if(!test_rtrim6()) {
        print("\tTest 6 failed !");
        result = false;
    }
    return result;
}