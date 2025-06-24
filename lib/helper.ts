export const validateEmail = (email: string) => {
  // Basic email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export function downloadFile(fileUrl: string, fileName: string) {
  try {
    const link = document.createElement("a");
    link.href = fileUrl;

    // Set the download attribute with a desired filename.
    // If not set, the browser will typically use the last part of the URL.
    if (fileName) {
      link.download = fileName;
    }

    // Append the link to the document body (necessary for some browsers to trigger click)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document body after the download is triggered
    document.body.removeChild(link);

    console.log(`Download triggered for: ${fileUrl}`);
  } catch (error) {
    console.error("Error triggering file download:", error);
    // You might want to display a user-friendly message in your UI here.
    // For example, update a state variable in React to show an error message.
  }
}
