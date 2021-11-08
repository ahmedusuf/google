const  searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;
    window.location.href ="https://www.google.com/search?q=" + input + "&sxsrf=AOaemvJVAaf75yohGYU9_dTsGculzx3urg%3A1635239568068&source=hp&ei=j8Z3Yf6pNI6v5OUP66Wf4A0&iflsig=ALs-wAMAAAAAYXfUoAR_B90IK1FKeJTB3lEbBpy6PRX3&ved=0ahUKEwi-rcKM3ufzAhWOF7kGHevSB9wQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EANQ3w1YmRpgnRxoAHAAeACAAQCIAQCSAQCYAQCgAQGwAQA&sclient=gws-wiz "
}