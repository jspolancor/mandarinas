const modulationTypes = [
  "sine1",
  "sine2",
  "sine3",
  "sine4",
  "sine5",
  "sine6",
  "sine7",
  "sine8",
  "sine9",
  "sine10",
  "sine11",
  "sine12",
  "sine13",
  "sine14",
  "sine15",
  "sine16",
  "sine17",
  "sine18",
  "sine19",
  "sine20",
  "sine21",
  "sine22",
  "sine23",
  "sine24",
  "sine25",
  "sine26",
  "sine27",
  "sine28",
  "sine29",
  "sine30",
  "sine31",
  "sine32",
  "square1",
  "square2",
  "square3",
  "square4",
  "square5",
  "square6",
  "square7",
  "square8",
  "square9",
  "square10",
  "square11",
  "square12",
  "square13",
  "square14",
  "square15",
  "square16",
  "square17",
  "square18",
  "square19",
  "square20",
  "square21",
  "square22",
  "square23",
  "square24",
  "square25",
  "square26",
  "square27",
  "square28",
  "square29",
  "square30",
  "square31",
  "square32",
  "sawtooth1",
  "sawtooth2",
  "sawtooth3",
  "sawtooth4",
  "sawtooth5",
  "sawtooth6",
  "sawtooth7",
  "sawtooth8",
  "sawtooth9",
  "sawtooth10",
  "sawtooth11",
  "sawtooth12",
  "sawtooth13",
  "sawtooth14",
  "sawtooth15",
  "sawtooth16",
  "sawtooth17",
  "sawtooth18",
  "sawtooth19",
  "sawtooth20",
  "sawtooth21",
  "sawtooth22",
  "sawtooth23",
  "sawtooth24",
  "sawtooth25",
  "sawtooth26",
  "sawtooth27",
  "sawtooth28",
  "sawtooth29",
  "sawtooth30",
  "sawtooth31",
  "sawtooth32",
  "triangle1",
  "triangle2",
  "triangle3",
  "triangle4",
  "triangle5",
  "triangle6",
  "triangle7",
  "triangle8",
  "triangle9",
  "triangle10",
  "triangle11",
  "triangle12",
  "triangle13",
  "triangle14",
  "triangle15",
  "triangle16",
  "triangle17",
  "triangle18",
  "triangle19",
  "triangle20",
  "triangle21",
  "triangle22",
  "triangle23",
  "triangle24",
  "triangle25",
  "triangle26",
  "triangle27",
  "triangle28",
  "triangle29",
  "triangle30",
  "triangle31",
  "triangle32",
];

const synths = [
  "fmsine1",
  "fmsine2",
  "fmsine3",
  "fmsine4",
  "fmsine5",
  "fmsine6",
  "fmsine7",
  "fmsine8",
  "fmsine9",
  "fmsine10",
  "fmsine11",
  "fmsine12",
  "fmsine13",
  "fmsine14",
  "fmsine15",
  "fmsine16",
  "fmsine17",
  "fmsine18",
  "fmsine19",
  "fmsine20",
  "fmsine21",
  "fmsine22",
  "fmsine23",
  "fmsine24",
  "fmsine25",
  "fmsine26",
  "fmsine27",
  "fmsine28",
  "fmsine29",
  "fmsine30",
  "fmsine31",
  "fmsine32",
  "fmsquare1",
  "fmsquare2",
  "fmsquare3",
  "fmsquare4",
  "fmsquare5",
  "fmsquare6",
  "fmsquare7",
  "fmsquare8",
  "fmsquare9",
  "fmsquare10",
  "fmsquare11",
  "fmsquare12",
  "fmsquare13",
  "fmsquare14",
  "fmsquare15",
  "fmsquare16",
  "fmsquare17",
  "fmsquare18",
  "fmsquare19",
  "fmsquare20",
  "fmsquare21",
  "fmsquare22",
  "fmsquare23",
  "fmsquare24",
  "fmsquare25",
  "fmsquare26",
  "fmsquare27",
  "fmsquare28",
  "fmsquare29",
  "fmsquare30",
  "fmsquare31",
  "fmsquare32",
  "fmsawtooth1",
  "fmsawtooth2",
  "fmsawtooth3",
  "fmsawtooth4",
  "fmsawtooth5",
  "fmsawtooth6",
  "fmsawtooth7",
  "fmsawtooth8",
  "fmsawtooth9",
  "fmsawtooth10",
  "fmsawtooth11",
  "fmsawtooth12",
  "fmsawtooth13",
  "fmsawtooth14",
  "fmsawtooth15",
  "fmsawtooth16",
  "fmsawtooth17",
  "fmsawtooth18",
  "fmsawtooth19",
  "fmsawtooth20",
  "fmsawtooth21",
  "fmsawtooth22",
  "fmsawtooth23",
  "fmsawtooth24",
  "fmsawtooth25",
  "fmsawtooth26",
  "fmsawtooth27",
  "fmsawtooth28",
  "fmsawtooth29",
  "fmsawtooth30",
  "fmsawtooth31",
  "fmsawtooth32",
  "fmtriangle1",
  "fmtriangle2",
  "fmtriangle3",
  "fmtriangle4",
  "fmtriangle5",
  "fmtriangle6",
  "fmtriangle7",
  "fmtriangle8",
  "fmtriangle9",
  "fmtriangle10",
  "fmtriangle11",
  "fmtriangle12",
  "fmtriangle13",
  "fmtriangle14",
  "fmtriangle15",
  "fmtriangle16",
  "fmtriangle17",
  "fmtriangle18",
  "fmtriangle19",
  "fmtriangle20",
  "fmtriangle21",
  "fmtriangle22",
  "fmtriangle23",
  "fmtriangle24",
  "fmtriangle25",
  "fmtriangle26",
  "fmtriangle27",
  "fmtriangle28",
  "fmtriangle29",
  "fmtriangle30",
  "fmtriangle31",
  "fmtriangle32",
];

const scales = [
  ['C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3'],
  ['C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2'],
  ['C1', 'D1', 'Eb1', 'F1', 'G1', 'A1', 'Bb1', 'C1', 'D1', 'Eb1', 'F1', 'G1', 'A1', 'Bb1', 'C1', 'D1', 'Eb1', 'F1', 'G1', 'A1', 'Bb1', 'C1', 'D1', 'Eb1', 'F1', 'G1', 'A1', 'Bb1', 'C1', 'D1', 'Eb1', 'F1', 'G1', 'A1', 'Bb1', 'C1', 'D1', 'Eb1', 'F1', 'G1', 'A1', 'Bb1']
]
export { modulationTypes, synths, scales };
