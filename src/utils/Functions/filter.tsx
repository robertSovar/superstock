const filterData = <T,>(data: T[], key: keyof T, searchTerm: string): T[] => {
  if (!searchTerm) return data; // Dacă searchTerm e gol, returnăm toate datele
  return data.filter((item) =>
    String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default filterData;
