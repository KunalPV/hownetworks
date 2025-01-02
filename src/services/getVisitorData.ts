import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import db from "@/lib/firebase";

export interface Visitor {
  id: string;
  visitDate: Date;
}

interface FirestoreVisitorData {
  visitDate?: Timestamp;
}

export async function getVisitorData(): Promise<Visitor[]> {
  try {
    const q = query(collection(db, "visitors"), orderBy("visitDate", "desc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn("No visitor data found in the Firestore collection.");
      return [];
    }

    const visitors: Visitor[] = querySnapshot.docs.map((doc) => {
      const data = doc.data() as FirestoreVisitorData;

      return {
        id: doc.id,
        visitDate: data.visitDate ? data.visitDate.toDate() : new Date(0), // Fallback to epoch if visitDate is undefined
      };
    });

    return visitors;
  } catch (error) {
    console.error("Error fetching visitor data:", {
      error,
      context: {
        collection: "visitors",
        orderBy: "visitDate desc",
      },
    });
    return [];
  }
}
