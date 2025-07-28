async function uploadToDrive(blob) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => {
    fetch('YOUR_APPS_SCRIPT_URL', {
      method: 'POST',
      body: reader.result.split(',')[1]
    });
  };
}