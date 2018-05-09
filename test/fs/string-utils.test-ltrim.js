load('api_string.js');

function test_ltrim1() {
    let s1 = "";
    return StringUtils.ltrim(s1) === "";
}

function test_ltrim2() {
    let s2 = "    ";
    return StringUtils.ltrim(s2) === "";
}

function test_ltrim3() {
    let s3 = " aaa";
    return StringUtils.ltrim(s3) === "aaa";
}

function test_ltrim4() {
    let s4 = "aaa ";
    return StringUtils.ltrim(s4) === "aaa ";
}

function test_ltrim5() {
    let s5 = "  aaa  ";
    return StringUtils.ltrim(s5) === "aaa  ";
}

function test_ltrim6() {
    let s6 = " aa aa aa ";
    return StringUtils.ltrim(s6) === "aa aa aa ";
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