import * as faceapi from 'face-api.js';

export const loadModels = async () => {
    const MODEL_URL = '/models'; // آپ کو یہ ماڈلز public/models میں رکھنے ہوں گے
    await Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
    ]);
};

export const compareFaces = async (img1Url, img2Url) => {
    const img1 = await faceapi.fetchImage(img1Url);
    const img2 = await faceapi.fetchImage(img2Url);

    const desc1 = await faceapi.computeFaceDescriptor(img1);
    const desc2 = await faceapi.computeFaceDescriptor(img2);

    if (desc1 && desc2) {
        const distance = faceapi.euclideanDistance(desc1, desc2);
        // 0.6 سے کم کا فاصلہ مطلب تصاویر میچ کر رہی ہیں
        const matchPercentage = Math.round((1 - distance) * 100);
        return matchPercentage;
    }
    return 0;
};
