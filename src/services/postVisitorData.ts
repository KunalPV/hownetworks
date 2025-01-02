import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "@/lib/firebase";

/**
 * Data structure for visitor logging.
 */
interface VisitorData {
  visitorId: string;
  visitDate: ReturnType<typeof serverTimestamp>;
}

/**
 * Logs a visitor's data to the Firestore database.
 * @param visitorId - The unique identifier for the visitor.
 * @returns A promise resolving to a status object indicating success or failure.
 */
export async function postVisitorData(visitorId: string): Promise<{ success: boolean; message: string }> {
  const visitorData: VisitorData = {
    visitorId,
    visitDate: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "visitors"), visitorData);
    return { success: true, message: "Visitor data logged successfully." };
  } catch (error) {
    console.error(`Failed to log visitor data for visitorId: ${visitorId}`, error);
    return { success: false, message: "Failed to log visitor data." };
  }
}
