//Первое задание

outer: for (i=2;i<=100;i++) {
        for (z=2;z<=i-1;z++) {
        simple = i % z;
        if (simple === 0) {
            alert(i+" Составное");
            continue outer
        }
    }
    alert(i+" Простое");
    }