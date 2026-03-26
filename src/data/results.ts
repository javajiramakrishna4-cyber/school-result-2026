export interface StudentResult {
  rollNo: string;
  name: string;
  flo: number;
  sle: number;
  tlh: number;
  math: number;
  gsc: number;
  ssc: number;
  total: number;
  percentage: string;
  grade: string;
  description: string;
  status: string;
}

export const resultsData: StudentResult[] = [
  { rollNo: "1", name: "SANGEETA SABAR", flo: 47, sle: 30, tlh: 53, math: 30, gsc: 30, ssc: 30, total: 220, percentage: "36.67", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "2", name: "KALIBIDI DEEPANJALI", flo: 34, sle: 30, tlh: 47, math: 30, gsc: 30, ssc: 30, total: 201, percentage: "33.50", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "3", name: "TOIKA GIRISH", flo: 30, sle: 30, tlh: 35, math: 30, gsc: 30, ssc: 30, total: 185, percentage: "30.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "4", name: "NAGABANSHA SUDHEER", flo: 67, sle: 63, tlh: 75, math: 44, gsc: 61, ssc: 58, total: 368, percentage: "61.33", grade: "B2", description: "Good", status: "PASS" },
  { rollNo: "5", name: "MADHUSADAN NIMALA", flo: 30, sle: 40, tlh: 75, math: 30, gsc: 31, ssc: 30, total: 236, percentage: "39.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "6", name: "KALYAN GOUDA", flo: 43, sle: 37, tlh: 67, math: 30, gsc: 30, ssc: 33, total: 240, percentage: "40.00", grade: "C", description: "Above Average", status: "PASS" },
  { rollNo: "7", name: "DIBYABATI SABAR", flo: 30, sle: 30, tlh: 43, math: 30, gsc: 30, ssc: 30, total: 193, percentage: "32.17", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "8", name: "SRITAM NAG", flo: 43, sle: 32, tlh: 42, math: 41, gsc: 38, ssc: 31, total: 227, percentage: "37.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "9", name: "JYOTSHNA SABAR", flo: 35, sle: 30, tlh: 72, math: 35, gsc: 30, ssc: 30, total: 232, percentage: "38.67", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "10", name: "BHUMIKA NAGABANSHA", flo: 65, sle: 46, tlh: 59, math: 30, gsc: 30, ssc: 41, total: 271, percentage: "45.17", grade: "C", description: "Above Average", status: "PASS" },
  { rollNo: "11", name: "KAMARDA SANU", flo: 52, sle: 52, tlh: 56, math: 35, gsc: 40, ssc: 41, total: 276, percentage: "46.00", grade: "C", description: "Above Average", status: "PASS" },
  { rollNo: "12", name: "DEEPAK KUMAR SAHU", flo: 40, sle: 30, tlh: 56, math: 30, gsc: 45, ssc: 32, total: 233, percentage: "38.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "13", name: "KARTIK SABAR", flo: 30, sle: 31, tlh: 73, math: 30, gsc: 30, ssc: 30, total: 224, percentage: "37.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "14", name: "SAI KADRAKA", flo: 30, sle: 30, tlh: 60, math: 30, gsc: 17, ssc: 30, total: 197, percentage: "32.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "15", name: "KANDAGARI SARAJA", flo: 30, sle: 30, tlh: 54, math: 30, gsc: 30, ssc: 30, total: 204, percentage: "34.00", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "16", name: "SAIRAM UIKA", flo: 30, sle: 30, tlh: 48, math: 30, gsc: 16, ssc: 30, total: 184, percentage: "30.67", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "17", name: "BIDIKA GYANESWERA", flo: 30, sle: 30, tlh: 61, math: 30, gsc: 30, ssc: 31, total: 212, percentage: "35.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "18", name: "BISWANATH SUBHAM", flo: 30, sle: 30, tlh: 60, math: 30, gsc: 30, ssc: 30, total: 210, percentage: "35.00", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "19", name: "EANDAPILI BARUNA", flo: 46, sle: 48, tlh: 60, math: 30, gsc: 36, ssc: 43, total: 263, percentage: "43.83", grade: "C", description: "Above Average", status: "PASS" },
  { rollNo: "20", name: "ANANYA MISHRA", flo: 65, sle: 46, tlh: 92, math: 30, gsc: 45, ssc: 45, total: 323, percentage: "53.83", grade: "B2", description: "Good", status: "PASS" },
  { rollNo: "21", name: "PRIYANKA PATTANAYAK", flo: 63, sle: 48, tlh: 68, math: 38, gsc: 53, ssc: 50, total: 320, percentage: "53.33", grade: "B2", description: "Good", status: "PASS" },
  { rollNo: "22", name: "SUBHAM KUMAR PRADHAN", flo: 36, sle: 31, tlh: 52, math: 30, gsc: 30, ssc: 30, total: 209, percentage: "34.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "23", name: "SAI SUBHAM MOHAPATRA", flo: 67, sle: 59, tlh: 65, math: 50, gsc: 44, ssc: 52, total: 337, percentage: "56.17", grade: "B2", description: "Good", status: "PASS" },
  { rollNo: "24", name: "NAGABANSA PRIYA", flo: 60, sle: 40, tlh: 93, math: 30, gsc: 36, ssc: 46, total: 305, percentage: "50.83", grade: "B2", description: "Good", status: "PASS" },
  { rollNo: "25", name: "CHIRASRATA BAURI", flo: 60, sle: 49, tlh: 74, math: 31, gsc: 35, ssc: 43, total: 292, percentage: "48.67", grade: "C", description: "Above Average", status: "PASS" },
  { rollNo: "26", name: "SRUTI HADIPA", flo: 30, sle: 31, tlh: 76, math: 30, gsc: 30, ssc: 30, total: 227, percentage: "37.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "27", name: "ASTOR PODAJI", flo: 31, sle: 30, tlh: 76, math: 30, gsc: 33, ssc: 30, total: 230, percentage: "38.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "28", name: "SNEHALATA KAIBARTTA", flo: 30, sle: 30, tlh: 63, math: 30, gsc: 30, ssc: 30, total: 213, percentage: "35.50", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "29", name: "KALI CHARN SABAR", flo: 30, sle: 30, tlh: 50, math: 30, gsc: 30, ssc: 30, total: 200, percentage: "33.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "30", name: "ANIL BEHERA", flo: 30, sle: 30, tlh: 39, math: 30, gsc: 30, ssc: 30, total: 189, percentage: "31.50", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "31", name: "ANSUMAN SATAPATHI", flo: 0, sle: 0, tlh: 0, math: 0, gsc: 0, ssc: 0, total: 0, percentage: "0.00", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "32", name: "ARABATI HIMIRIKA", flo: 0, sle: 0, tlh: 0, math: 0, gsc: 0, ssc: 0, total: 0, percentage: "0.00", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "33", name: "CHARANA MALLIPHULA", flo: 30, sle: 30, tlh: 45, math: 30, gsc: 30, ssc: 30, total: 195, percentage: "32.50", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "34", name: "NITU MISHAL", flo: 30, sle: 30, tlh: 41, math: 30, gsc: 30, ssc: 30, total: 191, percentage: "31.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "35", name: "GARILU CHARAN", flo: 30, sle: 30, tlh: 56, math: 30, gsc: 30, ssc: 30, total: 206, percentage: "34.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "36", name: "SAMIYA SABAR", flo: 30, sle: 30, tlh: 46, math: 30, gsc: 30, ssc: 30, total: 196, percentage: "32.67", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "37", name: "KHIRAJ SABARA", flo: 30, sle: 30, tlh: 51, math: 30, gsc: 30, ssc: 30, total: 201, percentage: "33.50", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "38", name: "TAPASWINI SABAR", flo: 30, sle: 30, tlh: 41, math: 30, gsc: 11, ssc: 30, total: 172, percentage: "28.67", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "39", name: "SAMUAL KARADA", flo: 33, sle: 30, tlh: 39, math: 30, gsc: 30, ssc: 30, total: 192, percentage: "32.00", grade: "E", description: "Fair", status: "PASS" },
  { rollNo: "40", name: "BLESON GANTA", flo: 48, sle: 57, tlh: 67, math: 30, gsc: 54, ssc: 50, total: 306, percentage: "51.00", grade: "B2", description: "Good", status: "PASS" },
  { rollNo: "41", name: "SONAM KUMARI NAG", flo: 51, sle: 52, tlh: 64, math: 30, gsc: 41, ssc: 47, total: 285, percentage: "47.50", grade: "C", description: "Above Average", status: "PASS" },
  { rollNo: "42", name: "SRIRAM RINA", flo: 33, sle: 33, tlh: 35, math: 30, gsc: 30, ssc: 30, total: 191, percentage: "31.83", grade: "E", description: "Fair", status: "PASS" },
  { rollNo: "43", name: "BADAL SABAR", flo: 35, sle: 35, tlh: 35, math: 30, gsc: 15, ssc: 30, total: 180, percentage: "30.00", grade: "E", description: "Fair", status: "PASS" },
  { rollNo: "44", name: "MANTU PALAKA", flo: 30, sle: 30, tlh: 35, math: 32, gsc: 30, ssc: 30, total: 187, percentage: "31.17", grade: "E", description: "Fair", status: "PASS" },
  { rollNo: "45", name: "MANTU NAURI", flo: 30, sle: 30, tlh: 44, math: 30, gsc: 30, ssc: 30, total: 194, percentage: "32.33", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "46", name: "ADITYA PADAKA", flo: 30, sle: 30, tlh: 35, math: 30, gsc: 30, ssc: 30, total: 185, percentage: "30.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "47", name: "TARINI BHADRIKA", flo: 0, sle: 0, tlh: 0, math: 0, gsc: 0, ssc: 0, total: 0, percentage: "0.00", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "48", name: "GITANJALI DHULI", flo: 17, sle: 16, tlh: 41, math: 8, gsc: 14, ssc: 28, total: 124, percentage: "20.67", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "49", name: "KALPANA PATIKA", flo: 38, sle: 32, tlh: 44, math: 30, gsc: 30, ssc: 37, total: 211, percentage: "35.17", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "50", name: "SAGAR NIMALA", flo: 0, sle: 0, tlh: 0, math: 0, gsc: 0, ssc: 0, total: 0, percentage: "0.00", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "51", name: "CHINMAYEE PANDA", flo: 47, sle: 30, tlh: 44, math: 30, gsc: 30, ssc: 30, total: 211, percentage: "35.17", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "52", name: "MANAS SABAR", flo: 30, sle: 30, tlh: 35, math: 30, gsc: 30, ssc: 30, total: 185, percentage: "30.83", grade: "D", description: "Average", status: "PASS" },
  { rollNo: "53", name: "KALPANA DHULI", flo: 8, sle: 16, tlh: 41, math: 10, gsc: 13, ssc: 22, total: 110, percentage: "18.33", grade: "F", description: "Unsatisfactory", status: "FAIL" },
  { rollNo: "54", name: "SUBRAT PANDA", flo: 30, sle: 30, tlh: 36, math: 30, gsc: 30, ssc: 30, total: 186, percentage: "31.00", grade: "D", description: "Average", status: "PASS" },
];
