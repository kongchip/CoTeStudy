function solution(files) {
  return files
    .map((file) => {
      // console.log(file.match(/(\D+)(\d+)/));
      return file.match(/(\D+)(\d+)/);
    })
    .sort((a, b) => {
      if (a[1].toLowerCase() > b[1].toLowerCase()) {
        return 1;
      } else if (a[1].toLowerCase() < b[1].toLowerCase()) {
        return -1;
      } else {
        return parseInt(a[2]) - parseInt(b[2]);
      }
    })
    .map((file) => file.input);
}
