import gs from "google-spreadsheet";
import type { SheetInfo } from "./api";

export default async (sheetInfo: SheetInfo): Promise<boolean | string> => {
  try {
    const doc = new gs.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: Buffer.from(
        process.env.FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
        "base64"
      ).toString("utf8"),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[sheetInfo.sheetTitle];
    if (sheetInfo.type === "signup") {
      const rows = await sheet.getRows();
      let existingEmails: string[] = [];
      rows.map((row) => {
        existingEmails.push(row._rawData[0]);
      });

      if (existingEmails.includes(sheetInfo.data[0])) {
        return "duplicate";
      }
    }
    await sheet.addRow(sheetInfo.data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
