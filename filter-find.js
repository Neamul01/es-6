const points = [2, 53, 643, 13, 225, 6543, 23, 42, 653, 25, 23, 53, {
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
const bigPoint = points.filter(n => n > 20 && n < 100 && n == 53 || n == 42);
const name = points.find(p => p.group == 'science')
console.log(name)