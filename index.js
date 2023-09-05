function solution(my_string, indices) {
    let answer = my_string;
    
    for(let i = 0; i < indices.length; i++){
        answer[indices[i]] = 0
    }
    console.log(answer)
}