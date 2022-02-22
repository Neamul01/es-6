const points = [2, 53, 643, 13, 225, 6543, 23, 42, 653, 25, 23, 53,];
const doublePoints = points.map(n => n * 2);
// console.log(doublePoints)

const number = [2, 53, 643, 13, 225, 6543, 23, 42, 653, 25, 23, 53, {
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
}];
const subject = number.map(n => n);
console.log(subject)
