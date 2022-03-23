/**
 * 更新成績
 * @param {*} params 
 */
export const updateScore = (params) => {
    return fetch('/updateScore', {
        method: 'POST',
        body: JSON.stringify({
            name: params.names,
            score: params.score,
        }),
    }).then((res) =>
        res.json()
    );
}

/**
 * 取得成績列表
 * @param {*} params 
 */
export const getScore = (params) => {
    fetch('/getScore', {
        method: 'GET',
        body: JSON.stringify({
            name: params.page,
        }),
    }).then((res) =>
        res.json()
    );
}
