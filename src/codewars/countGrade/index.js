function countGrade(scores) {
  let grade = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == 100) grade.S++;
    else if (scores[i] >= 90) grade.A++;
    else if (scores[i] >= 80) grade.B++;
    else if (scores[i] >= 60) grade.C++;
    else if (scores[i] < 60 && scores[i] >= 0) grade.D++;
    else if (scores[i] == -1) grade.X++;
  }
  return grade;
}

function countGrade(scores) {
  // ~~(x) === Math.floor(x)
  const score = (x) => (x >= 0 ? "DDDDDDCCBAS"[~~(x / 10)] : "X");
  return scores.reduce((grades, s) => ((grades[score(s)] += 1), grades), {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  });
}
const countGrade = (scores) =>
  ((fn) => ({
    S: fn(100),
    A: fn(90, 100),
    B: fn(80, 90),
    C: fn(60, 80),
    D: fn(0, 60),
    X: fn(-1),
  }))(
    (min, max = min + 1) =>
      scores.filter((val) => val >= min && val < max).length
  );
