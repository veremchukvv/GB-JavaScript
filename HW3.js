    var i = 2;
    while (i <= 100) {
        for (z=1;z<=i-1;z++) {
        simple = i % z;
        alert("i = "+i+"z = "+z+"simple = "+simple);
        if (simple !== 0) {
            alert(i);
            break
        }
        else continue
    }
    i++;
    }