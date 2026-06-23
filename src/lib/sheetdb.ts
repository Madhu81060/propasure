/**
 * Utility to submit form data to SheetDB (Google Sheets REST API).
 */

export interface FormSubmissionData {
  name?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  city?: string;
  propertyLocation?: string;
  propertyType?: string;
  subject?: string;
  budget?: string;
  requirement?: string;
  message?: string;
  query?: string;
  preferredDate?: string;
  expectedPrice?: string;
  companyName?: string;
  contactPerson?: string;
  experience?: string;
  propertyDetails?: string;
}

export async function submitToSheetDB(formName: string, rawData: FormSubmissionData) {
  // Use the approved SheetDB endpoint directly
  const apiUrl = "https://sheetdb.io/api/v1/k3ys5i5gowc3a";

  // Normalize data to map to unified columns in Google Sheets
  const payload = {
    submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    name: rawData.name || rawData.contactPerson || "",
    mobile: rawData.mobile || rawData.phone || "",
    email: rawData.email || "",
    subject: rawData.propertyType || rawData.subject || formName || "",
    message: rawData.requirement || rawData.message || rawData.query || "",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        data: [payload]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`SheetDB Error (${response.status}): ${errorText || response.statusText}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error: any) {
    console.error("SheetDB submission failed:", error);
    throw error;
  }
}
