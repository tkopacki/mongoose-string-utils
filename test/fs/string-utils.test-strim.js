load('api_string.js');

function test_strim1() {
    let s1 = "";
    return string_trim(s1) === "";
}

function test_strim2() {
    let s2 = "    ";
    return string_trim(s2) === "";
}

function test_strim3() {
    let s3 = " aaa";
    return string_trim(s3) === "aaa";
}

function test_strim4() {
    let s4 = "aaa ";
    return string_trim(s4) === "aaa";
}

function test_strim5() {
    let s5 = "  aaa  ";
    return string_trim(s5) === "aaa";
}

function test_strim6() {
    let s6 = " aa aa aa ";
    return string_trim(s6) === "aa aa aa";
}

function test_strim() {
    let result = true;
    print("Test: strim");
    if(!test_strim1()) {
        print("\tTest 1 failed !");
        result = false;
    }
    if(!test_strim2()) {
        print("\tTest 2 failed !");
        result = false;
    }
    if(!test_strim3()) {
        print("\tTest 3 failed !");
        result = false;
    }
    if(!test_strim4()) {
        print("\tTest 4 failed !");
        result = false;
    }
    if(!test_strim5()) {
        print("\tTest 5 failed !");
        result = false;
    }
    if(!test_strim6()) {
        print("\tTest 6 failed !");
        result = false;
    }
    return result;
}