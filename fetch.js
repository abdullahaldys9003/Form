

async function createCategory() {
  try {
    // استخراج البيانات من الكائن الجديد
    const name = "alii";
    const formData = new FormData();
    // إضافة البيانات إلى نموذج البيانات
    formData.append('name', name);
    // إرسال طلب POST إلى الملف php
    const response = await fetch('Form.php', {
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

