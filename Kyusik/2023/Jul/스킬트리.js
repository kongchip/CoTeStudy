function solution(skill, skill_trees) {
  const skill_check = (tree) => {
    const level = [...skill];
    for (s of [...tree]) {
      if (level.length === 0) return true;
      if (level.includes(s) && s !== level[0]) return false;
      if (s === level[0]) level.shift();
    }
    return true;
  };
  return skill_trees.filter((x) => skill_check(x)).length;
}
