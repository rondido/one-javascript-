
    let people = [
        '용1',
        '동2',
        '아3',
        '경4',
        '나5',
        '도6',
        '령7',
        '민8',
        '상9',
        '수10',
        '진11',
        '유12',
        '정13',
        '주14',
        '반15',
        '용16',
        '정17',
        '성18',
        '수19',
        '우20',
        '재21',
        '태22',
        '영23',
        '예24',
        '진25'
    ];
    let flag = []
for(let i=0; i<people.length; i++){
    flag.push(0)
}

let count=0; 
let cnt=0;
let team=[];
while(count<people.length){
    let num = Math.floor(Math.random()*people.length)
    console.log(num);
    if (flag[num]===1){
        continue
    }

    flag[num]=1
    cnt++
    team.push(people[num])

    if (cnt===3){
        cnt=0
        team.push('--')
    }
    count++
}

console.log(team);
    