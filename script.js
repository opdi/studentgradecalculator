
function calculateGrade() {
    const marks = [];
    for (let i = 1; i <= 5; i++) {
        const mark = parseFloat(document.getElementById(`mark${i}`).value) || 0;
        marks.push(mark);
    }

    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const avg = sum / marks.length;
    
    let grade;
    if (avg >= 90) grade = 'A';
    else if (avg >= 80) grade = 'B';
    else if (avg >= 70) grade = 'C';
    else if (avg >= 60) grade = 'D';
    else grade = 'F';

    document.getElementById("result").innerHTML = `Average: ${avg.toFixed(2)}<br>Grade: ${grade}`;
}
