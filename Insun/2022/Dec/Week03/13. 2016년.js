function solution(a, b) {
  // 요일을 먼저 배열로 만들어줌
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // new Date 메서드 사용
  let date = new Date(2016, a - 1, b);
  return day[date.getDay()];
}
