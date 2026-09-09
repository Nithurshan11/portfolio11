export type Education = {
  school: string;
  program: string;
  details?: string[];
};

export const education: Education[] = [
  {
    school: "SLIIT",
    program: "BSc (Hons) Information Technology, Software Engineering",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering.",
    ],
  },
  {
    school: "Bandarawela Central College",
    program: "G.C.E. Advanced Level",
  },
  {
    school: "Saraswathy Central College, Badulla",
    program: "G.C.E. Ordinary Level",
  },
];
