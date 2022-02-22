//array destructure
const numbers = [35, 63, 74, 12, 764, 432, 74, 21, 523];
const [a, b, c, d, e] = numbers;
// console.log(e);

//object destructure
const student = {
    name: 'Nomen',
    roll: 59,
    class: 'intermadiate',
    group: 'science',
    subjects: {
        bangla: true,
        english: true,
        math: true,
        science: {
            physics: 'yes',
            chemistry: 'yes',
            biology: 'yes'
        }
    }
}
const { physics, chemistry, biology } = student.subjects.science;
console.log(physics, chemistry)