
/*
async function createCategory() {
  try {
    // استخراج البيانات من الكائن الجديد
    const name = "alii";
    const formData = new FormData();
    // إضافة البيانات إلى نموذج البيانات
    formData.append('name', name);
    // إرسال طلب POST إلى الملف php
    const response = await fetch('https://databasepro.infinityfreeapp.com/index.php', {
      method: 'POST',
      body: formData,
    });

    // التحقق من استجابة الخادم
    if (!response.ok) {
      throw new Error(`فشل الرجاء المحاولة لاحقًا: ${response.status}`);
    }

    // تحويل استجابة json إلى كائن
    const dataJson = await response.json();
    
    alert(dataJson);
    
  } catch (error) {
    // إظهار رسالة الخطأ
    alert(error);
  }
}
*/


async function createCategory() {
  try {
    // استخراج البيانات من الكائن الجديد
    const name = "alii";
    const formData = new FormData();
    // إضافة البيانات إلى نموذج البيانات
    formData.append('name', name);

    // إرسال طلب POST إلى الملف php
    await fetch('https://databasepro.infinityfreeapp.com/index.php', {
      method: 'POST',
      body: formData,
    });

    // يمكنك إضافة رسالة نجاح إذا كنت ترغب في ذلك
    alert('تم إرسال البيانات بنجاح');

  } catch (error) {
    // إظهار رسالة الخطأ
    alert('حدث خطأ أثناء إرسال البيانات: ' + error.message);
  }
}
