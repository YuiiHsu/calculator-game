/**
 * 更新成績
 * @param {*} params 
 */
export const updateScore = (params) => {
    return fetch('/updatescore', {
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
    return fetch('/scores', {
        method: 'POST',
        body: JSON.stringify({
            page: params.page,
            pageSize: params.pageSize
        }),
    }).then((res) =>
        res.json()
    );
}
