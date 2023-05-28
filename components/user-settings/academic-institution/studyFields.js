import { icons } from "../../../constants";
import { Image } from "react-native";

const studyFields = [
  {
    key: "biology",
    label: "Biology",
    value: "Biology",
  },
  // icon: () => <Image source={icons.biology} />,
  // children: [
  {
    key: "molecular-biology",
    label: "Molecular Biology",
    value: "Molecular Biology",
    parent: "Biology",
    // icon: () => <Image source={icons[`biology-molecular-biology`]} />,
  },
  {
    key: "cellular-biology",
    label: "Cellular Biology",
    value: "Cellular Biology",
    parent: "Biology",
    // icon: () => <Image source={icons[`biology-cellular-biology`]} />,
  },
  {
    key: "ecology",
    label: "Ecology",
    value: "Ecology",
    parent: "Biology",
    // icon: () => <Image source={icons[`biology-ecology`]} />,
  },
  // ],
  {
    key: "chemistry",
    label: "Chemistry",
    value: "Chemistry",
    // icon: () => <Image source={icons.chemistry} />,
    // children: [
  },
  {
    key: "organic-chemistry",
    label: "Organic Chemistry",
    value: "Organic Chemistry",
    parent: "Chemistry",
    // icon: () => <Image source={icons[`chemistry-organic-chemistry`]} />,
  },
  {
    key: "inorganic-chemistry",
    label: "Inorganic Chemistry",
    value: "Inorganic Chemistry",
    parent: "Chemistry",
    // icon: () => <Image source={icons[`chemistry-inorganic-chemistry`]} />,
  },
  {
    key: "physical-chemistry",
    label: "Physical Chemistry",
    value: "Physical Chemistry",
    parent: "Chemistry",
    // icon: () => <Image source={icons[`chemistry-physical-chemistry`]} />,
  },
  // ],

  {
    key: "software-engineering",
    label: "Software Engineering",
    value: "Software Engineering",
  },
  // icon: () => <Image source={icons["software-engineering"]} />,
  // children: [
  {
    key: "web-development",
    label: "Web Development",
    value: "Web Development",
    parent: "Software Engineering",
    // icon: () => (
    // <Image source={icons["software-engineering-web-development"]} />
    // ),
  },
  {
    key: "mobile-development",
    label: "Mobile Development",
    value: "Mobile Development",
    parent: "Software Engineering",
    // icon: () => (
    // <Image source={icons["software-engineering-mobile-development"]} />
    // ),
  },
  {
    key: "data-science",
    label: "Data Science",
    value: "Data Science",
    parent: "Software Engineering",
    // icon: () => <Image source={icons["software-engineering-data-science"]} />,
  },
  // ],

  {
    key: "abstract-mathematics",
    label: "Abstract Mathematics",
    value: "Abstract Mathematics",
    // icon: () => <Image source={icons["abstract-mathematics"]} />,
    // children: [
  },
  {
    key: "algebra",
    label: "Algebra",
    value: "Algebra",
    parent: "Abstract Mathematics",
    // icon: () => <Image source={icons["abstract-mathematics-algebra"]} />,
  },
  {
    key: "geometry",
    label: "Geometry",
    value: "Geometry",
    parent: "Abstract Mathematics",
    // icon: () => <Image source={icons["abstract-mathematics-geometry"]} />,
  },
  {
    key: "topology",
    label: "Topology",
    value: "Topology",
    parent: "Abstract Mathematics",
    // icon: () => <Image source={icons["abstract-mathematics-topology"]} />,
  },
  // ],
  // Add more study fields here
  // ...Previous study fields

  {
    key: "physics",
    label: "Physics",
    value: "Physics",
    // icon: () => <Image source={icons.physics} />,
  },
  // children: [
  {
    key: "classical-physics",
    label: "Classical Physics",
    value: "Classical Physics",
    parent: "Physics",
    // icon: () => <Image source={icons["physics-classical"]} />,
  },
  {
    key: "quantum-physics",
    label: "Quantum Physics",
    value: "Quantum Physics",
    parent: "Physics",
    // icon: () => <Image source={icons["physics-quantum"]} />,
  },
  {
    key: "astrophysics",
    label: "Astrophysics",
    value: "Astrophysics",
    parent: "Physics",
    // icon: () => <Image source={icons["physics-astrophysics"]} />,
  },
  // ],
  {
    key: "psychology",
    label: "Psychology",
    value: "Psychology",
    // icon: () => <Image source={icons.psychology} />,
    // children: [
  },

  {
    key: "clinical-psychology",
    label: "Clinical Psychology",
    value: "Clinical Psychology",
    parent: "Psychology",
    // icon: () => <Image source={icons["psychology-clinical"]} />,
  },
  {
    key: "cognitive-psychology",
    label: "Cognitive Psychology",
    value: "Cognitive Psychology",
    parent: "Psychology",
    // icon: () => <Image source={icons["psychology-cognitive"]} />,
  },
  {
    key: "social-psychology",
    label: "Social Psychology",
    value: "Social Psychology",
    parent: "Psychology",
    // icon: () => <Image source={icons["psychology-social"]} />,
  },
  // ],
  // Add more study fields here
  // ...Previous study fields

  {
    key: "sociology",
    label: "Sociology",
    value: "Sociology",
  },

  // icon: () => <Image source={icons.sociology} />,
  // children: [
  {
    key: "urban-sociology",
    label: "Urban Sociology",
    value: "Urban Sociology",
    parent: "Sociology",
    // icon: () => <Image source={icons["sociology-urban"]} />,
  },
  {
    key: "gender-studies",
    label: "Gender Studies",
    value: "Gender Studies",
    parent: "Sociology",
    // icon: () => <Image source={icons["sociology-gender"]} />,
  },
  {
    key: "criminology",
    label: "Criminology",
    value: "Criminology",
    parent: "Sociology",
    // icon: () => <Image source={icons["sociology-criminology"]} />,
  },
  // ],
  {
    key: "history",
    label: "History",
    value: "History",
  },

  // icon: () => <Image source={icons.history} />,
  // children: [
  {
    key: "ancient-history",
    label: "Ancient History",
    value: "Ancient History",
    parent: "History",
    // icon: () => <Image source={icons["history-ancient"]} />,
  },
  {
    key: "modern-history",
    label: "Modern History",
    value: "Modern History",
    parent: "History",
    // icon: () => <Image source={icons["history-modern"]} />,
  },
  {
    key: "world-history",
    label: "World History",
    value: "World History",
    parent: "History",
    // icon: () => <Image source={icons["history-world"]} />,
  },
  // ],
  {
    key: "linguistics",
    label: "Linguistics",
    value: "Linguistics",
  },

  // icon: () => <Image source={icons.linguistics} />,
  // children: [
  {
    key: "syntax",
    label: "Syntax",
    value: "Syntax",
    parent: "Linguistics",
    // icon: () => <Image source={icons["linguistics-syntax"]} />,
  },
  {
    key: "phonetics",
    label: "Phonetics",
    value: "Phonetics",
    parent: "Linguistics",
    // icon: () => <Image source={icons["linguistics-phonetics"]} />,
  },
  {
    key: "semantics",
    label: "Semantics",
    value: "Semantics",
    parent: "Linguistics",
    // icon: () => <Image source={icons["linguistics-semantics"]} />,
  },
  // ],
  // Add more study fields here
];

export default studyFields;
