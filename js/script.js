function faq() {

    const quest = document.querySelectorAll(".faq_quests");
    const aswer = document.querySelectorAll(".aswer");
    const img_icon = document.querySelectorAll('.area_img_faq img');

    for (let i = 0; i < quest.length; i++) {

        quest[i].addEventListener("click", () => {

            if (quest[i].classList.contains("close")) {
                quest[i].classList.toggle("close");
                aswer[i].classList.toggle("open");
                img_icon[i].src = 'img/+.png';
            } else {
                quest[i].classList.add("close");
                aswer[i].classList.add("open");
                img_icon[i].src = 'img/-.png';
            }


        });

    }


}
faq();