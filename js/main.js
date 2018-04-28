'use strict';
//definicja funkcji ajax
function ajax(method, url) {
    //    zmienna, która trzyma obiekt XMLHttpRequest . method moze byc get albo post
    let httpReq = new XMLHttpRequest();

    //    otwieramy polaczenie do serwera//
    httpReq.open(method, url);

    //    sprawdzam zmienne statusu polaczenia - readyState
    /*    0 : poalaczenie nawiązywane
        1: polaczenie nawiązane
        2: zadanie odebrane
        3: przetwarzanie zadania
        4: dane zwrócone i gotow do użycia*/

    httpReq.onreadystatechange = function () {

        /*        jezeli readyState ==4 czyli czy dane sa zwrocone i gotowe do uzycia*/
        if (httpReq.readyState == 4) {

            /*           jezeli utzymuje polaczenie z serwerem - status 200(ok) */

            if (httpReq.status == 200) {

                //             tworze zmienna, ktora trzyma dane - dane tekstowe, nie jest to obiekt. na stringach mozemy ciac,laczyc itp

                let returnData = httpReq.responseText;

                //                metoda która bedzie wykonywala sie na zwroconych danych

                httpReq.onsuccess(returnData);

                //      zerujemy polaczeni-          jak juz sie wykona to odcinamy sie od serwera
                httpReq = null;


            }
        }
    }

    //    definujemy metode czyli to co bedziemy robic z danymi. na obiekcie httpReq dodalismy dodadatkowe parametry do metody . Funkcja dla obiektu to metoda

    httpReq.onsuccess = function (response) {

        //        parsuje tekst do obiektu json. Wszystko co sie zmienia to wlasnie tutaj
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);

    }

    //wysylanie żądania - za pomocą send
    httpReq.send();

}

//wywolujemy funkcje ajax

ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');
