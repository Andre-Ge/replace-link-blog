var apklama = 'http://j.gs/EFxr';
var apkbaru = 'http://adf.ly/1kE34v';
function updateme()
{
var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,apklama,apkbaru);
document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);

}
setTimeout('updateme()',100);
