interface Visitor {
  visitDate: Date; // Matches the actual structure
  id: string; // Include any additional properties if needed
}

export const transformVisitorData = (visitors: Visitor[]) => {
  const groupedData: Record<string, number> = visitors.reduce(
    (acc, visitor) => {
      const visitDate = new Date(visitor.visitDate);
      const month = visitDate.toLocaleString("default", { month: "long" });

      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const currentDate = new Date();
  const lastSixMonths = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    return date.toLocaleString("default", { month: "long" });
  }).reverse();

  return lastSixMonths.map((month) => ({
    month,
    desktop: groupedData[month] || 0,
    mobile: 0,
  }));
};
