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
  const apiUrl = process.env.NEXT_PUBLIC_SHEETDB_API_URL;
  
  if (!apiUrl) {
    console.warn("SheetDB API URL is not defined in environment variables. Falling back to console logging.");
    // Simulate API delay and success in dev mode
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Mock Submit Success:", { formName, rawData });
    return { success: true, message: "Mock submission successful" };
  }

  // Normalize data to map to unified columns in Google Sheets
  const payload = {
    submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    form_name: formName,
    name: rawData.name || rawData.contactPerson || "",
    phone: rawData.phone || rawData.mobile || "",
    email: rawData.email || "",
    city: rawData.city || rawData.propertyLocation || "",
    property_type: rawData.propertyType || "",
    budget: rawData.budget || "",
    requirement: rawData.requirement || rawData.message || rawData.query || rawData.propertyDetails || "",
    company_name: rawData.companyName || "",
    experience: rawData.experience || "",
    expected_price: rawData.expectedPrice || "",
    preferred_date: rawData.preferredDate || "",
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
