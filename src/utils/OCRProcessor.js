import Tesseract from 'tesseract.js';

export const scanCNIC = async (imageFile) => {
  try {
    console.log("🛡️ AlinGo AI: Scanning CNIC...");
    const { data: { text } } = await Tesseract.recognize(
      imageFile,
      'eng',
      { logger: m => console.log(m) }
    );

    // شناختی کارڈ نمبر تلاش کرنے کا ریجیکس (13 ہندسے)
    const cnicRegex = /[0-9]{5}-[0-9]{7}-[0-9]{1}/;
    const found = text.match(cnicRegex);

    if (found) {
      return { success: true, cnic: found[0], rawText: text };
    } else {
      return { success: false, message: "شناختی کارڈ نمبر واضح نہیں ہے۔" };
    }
  } catch (error) {
    console.error("OCR Error:", error);
    return { success: false, message: "AI ریڈنگ میں خرابی آئی۔" };
  }
};
