window.addEventListener("load",init);
function init(){
    bindevents();
}
function bindevents(){
    document.getElementById('search').addEventListener('click',search);
    document.getElementById('doodle').addEventListener('click',doodle);
}
function search(){
    let value = document.getElementById('searchvalue').value;
    let URL = `https://www.google.com/search?q=${value}&source=hp&ei=JIW7YeeLLYuB-QbJjKvgDg&iflsig=ALs-wAMAAAAAYbuTNLiLVQpIgjBim4s3KJkBua-nrubT&ved=0ahUKEwjnre-i-ej0AhWLQN4KHUnGCuwQ4dUDCAc&uact=5&oq=phones&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQyQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEOgsIABCABBCxAxCDAToLCC4QgAQQxwEQowI6CgguEMcBENEDEEM6CAguELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoECC4QQzoNCC4QsQMQxwEQ0QMQQzoHCAAQsQMQQzoECAAQQzoNCC4QsQMQxwEQowIQQzoHCAAQyQMQQzoFCAAQkgNKBQhAEgExUABY8A5ggRBoAHAAeACAAYUBiAGMBpIBAzAuNpgBAKABAQ&sclient=gws-wiz`
    window.location.href = URL;
}
function doodle(){
    let URL = "https://www.google.com/doodles";
    window.location.href = URL;
}