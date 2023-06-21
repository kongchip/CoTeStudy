function solution(record) {
  let last = {};
  let result = [];

  for (let i = 0; i < record.length; i++) {
    let [action, id, nick] = record[i].split(' ');
    if (nick) {
      last[id] = nick;
    }
  }

  let records = [];

  for (let i = 0; i < record.length; i++) {
    let action = record[i].split(' ')[0];
    if (action === 'Enter') {
      records.push(`${last[record[i].split(' ')[1]]}님이 들어왔습니다.`);
    } else if (action === 'Leave') {
      records.push(`${last[record[i].split(' ')[1]]}님이 나갔습니다.`);
    }
  }

  return records;
}
