function solution(a, b) {
    const dateString = `2016-${a}-${b}`
    
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    // 인자 a, b에 맞는 Date 객체를 생성하고, getDay 메서드를 통해 해당 요일이 무슨 요일인지 확인.
    // Sunday ~ Saturday : 0 ~ 6
    const dayOfWeek = week[new Date(dateString).getDay()];
    
    return dayOfWeek
}