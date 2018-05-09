load('api_string.js');
load('assert.js');

function test_split1a() {
    let s1 = " a    bb bbb  ";
    let r1a = string_split(s1/*, ' ', true*/);
    return r1a.length === 3 && r1a[0] === "a" && r1a[1] === "bb" && r1a[2] === "bbb";
}
    
function test_split1b() {
    let s1 = " a    bb bbb  ";
    let r1b = string_split(s1, ','/*, true*/);
    return r1b.length === 1 && r1b[0] === "a    bb bbb";
}   
    
function test_split1c() {
    let s1 = " a    bb bbb  ";
    let r1c = string_split(s1, ',', false);
    return r1c.length === 1 && r1c[0] === " a    bb bbb  ";
}   
    
function test_split1d() {
    let s1 = " a    bb bbb  ";
    let r1d = string_split(s1, ' ', false);
    return r1d.length === 3 && r1d[0] === "a" && r1d[1] === "bb" && r1d[2] === "bbb";
}  

function test_split2() {
    let s2 = "";
    let r2 = string_split(s2);
    return r2.length === 0;
}

function test_split3() {
    let s3 = "   a";
    let r3 = string_split(s3);
    return assert(r3.length, 1) && assert(r3[0], "a");
}

function test_split4() {
    let s4 = "a   ";
    let r4 = string_split(s4);
    return assert(r4.length, 1) && assert(r4[0], "a");
}

function test_split5() {
    let s5 = "aaa";
    let r5 = string_split(s5);
    return assert(r5.length, 1) && assert(r5[0], "aaa");
}

function test_split6a() {
    let s6 = "aaa, bbb , ccc ,ddd";
    let r6 = string_split(s6, ",");
    return r6.length === 4 && r6[0] === "aaa" && r6[1] === "bbb" && r6[2] === "ccc" && r6[3] === "ddd";
}

function test_split6b() {
    let s6 = "aaa, bbb,ccc , ddd ";
    let r6 = string_split(s6, ",", false);
    return r6.length === 4 && r6[0] === "aaa" && r6[1] === " bbb" && r6[2] === "ccc " && r6[3] === " ddd ";
}

function test_split() {
    let result = true;
    print("Test: split");
    if(!test_split1a()) {
        print("\tTest 1a failed !");
        result = false;
    }
    if(!test_split1b()) {
        print("\tTest 1b failed !");
        result = false;
    }
    if(!test_split1c()) {
        print("\tTest 1c failed !");
        result = false;
    }
    if(!test_split1d()) {
        print("\tTest 1d failed !");
        result = false;
    }
    if(!test_split2()) {
        print("\tTest 2 failed !");
        result = false;
    }
    if(!test_split3()) {
        print("\tTest 3 failed !");
        result = false;
    }
    if(!test_split4()) {
        print("\tTest 4 failed !");
        result = false;
    }
    if(!test_split5()) {
        print("\tTest 5 failed !");
        result = false;
    }
    if(!test_split6a()) {
        print("\tTest 6a failed !");
        result = false;
    }
    if(!test_split6b()) {
        print("\tTest 6b failed !");
        result = false;
    }
    return result;
}