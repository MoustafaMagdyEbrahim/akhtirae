function showPage(pageId) {
    document.querySelectorAll('.hidden').forEach((el) => el.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function orderComplete() {
    alert("تم تسجيل الطلب بنجاح وسوف تصل لك مكالمة تأكيدية خلال 24 ساعة، من فضلك قم بالرد علي أي مكالمة تأتي إليك هذه الفتره لانها وشكرا طلبك منتج من شركة اختراع");
}
