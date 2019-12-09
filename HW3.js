//Первое задание

var i = 2;
outer: while (i<=100) {
        for (z=2;z<=i-1;z++) {
        simple = i % z;
        if (simple === 0) {
            alert(i+" Составное");
            i++;
            continue outer
        }
    }
    alert(i+" Простое");
    i++;
    }

//Второе задание

