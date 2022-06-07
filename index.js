let el = document.querySelectorAll('[type=radio]');

for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('change', (e) => {
        let marcado = e.target.value;

        if (marcado == "correta") {

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";
            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for (let c = 0; c < els.length; c++) {
                els[c].disabled = true;
            }
        } else if (marcado == "incorreta") {
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";
            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for (let c = 0; c < els.length; c++) {
                els[c].disabled = true;
            }

            let correta = parentNode.parentNode.querySelectorAll('[value=correta]');
            correta.parentNode.style.backgroundColor = "green";
        }
    });
}